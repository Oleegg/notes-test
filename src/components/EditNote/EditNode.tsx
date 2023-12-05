import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { Note, editNote } from "../../store/noteSlice";
import "./EditNode.css";

const EditNode = ({
  note,
  setIsEdit,
}: {
  note: Note;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState(note.text);

  const dispatch = useAppDispatch();

  const saveHandler = () => {
    if (value) {
      dispatch(editNote({ id: note.id, text: value }));
    } else {
      dispatch(editNote({ id: note.id, text: note.text }));
    }
    setIsEdit(false);
  };

  const cancelHandler = () => setIsEdit(false);

  return (
    <div
      className="edit"
      onClick={(e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        cancelHandler();
      }}
    >
      <div
        className="edit__wrapper"
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <div className="edit__btns">
          <button onClick={saveHandler}>Save</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditNode;
