import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addTeg, deleteTag, editNote } from "../../store/noteSlice";
import { Note, checkHaveLastTag, checkHaveTag } from "../../store/additionally";
import "./EditNode.css";

const EditNode = ({
  note,
  setIsEdit,
}: {
  note: Note;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState(note.text);
  const [tagValue, setTagValue] = useState(note.tag);
  const state = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const saveHandler = () => {
    if (value) {
      dispatch(editNote({ id: note.id, text: value, tag: tagValue }));
      if (checkHaveLastTag(note.tag, state)) {
        dispatch(deleteTag({ tag: note.tag }));
      }
      if (!checkHaveTag(tagValue, state)) {
        dispatch(addTeg({ tag: tagValue }));
      }
    } else {
      dispatch(editNote({ id: note.id, text: note.text, tag: note.tag }));
    }
    setIsEdit(false);
  };

  const cancelHandler = () => setIsEdit(false);

  useEffect(() => {
    const tag = value.slice(value.indexOf("#"));
    console.log(tag, "*****", note.tag);

    if (value.includes("#") && tag.length > 1 && tag !== note.tag) {
      setTagValue(value.slice(value.indexOf("#")));
    }
  }, [value, note.tag, dispatch, state]);

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
        <label className=" label edit__label">
          <input
            className="input edit__input"
            autoFocus={true}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <div className="edit__btns">
          <button className="btn edit__btn" onClick={saveHandler}>
            Save
          </button>
          <button className="btn edit__btn" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNode;
