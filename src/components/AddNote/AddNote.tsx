import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addNote, addTeg } from "../../store/noteSlice";
import "./AddNote.css";

type Props = {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  setIsAddNote: Dispatch<SetStateAction<boolean>>;
};

const AddNote = ({ tag, setTag, setIsAddNote }: Props) => {
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (value.includes("#") && value.slice(value.indexOf("#")).length > 1) {
      setTag(value.slice(value.indexOf("#")));
    }
  }, [value, setTag]);

  const cancelHandler = () => setIsAddNote(false);

  const addHandler = () => {
    if (value) {
      dispatch(addNote({ text: value }));
      if (tag.length) {
        dispatch(addTeg({ tag }));
      }
    }
    setTag("");
    setValue("");
    cancelHandler();
  };

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
        <input
          className=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="edit__btns">
          <button onClick={addHandler}>Add note</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
