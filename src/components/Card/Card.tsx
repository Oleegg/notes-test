import { useState } from "react";
import "./Card.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  deleteNote,
  deleteTag,
  deleteSelectedTag,
} from "../../store/noteSlice";
import EditNode from "../EditNote/EditNode";
import { Note, checkHaveLastTag } from "../../store/additionally";

const Card = ({ note }: { note: Note }) => {
  const [isChose, setIsChose] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const state = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    if (checkHaveLastTag(note.tag, state)) {
      dispatch(deleteSelectedTag({ tag: note.tag }));
      dispatch(deleteTag({ tag: note.tag }));
    }
    dispatch(deleteNote({ id: note.id }));
  };

  return (
    <div
      className={isChose ? "card-edit" : "card"}
      onClick={() => setIsChose(!isChose)}
    >
      <div className="card__wrapper">
        {isEdit ? <EditNode note={note} setIsEdit={setIsEdit} /> : null}
        <div className="text">{note.text}</div>
        <div className="teg">
          <p>{note.tag || "No tag"}</p>
          <div className="card__btns">
            <button onClick={() => setIsEdit(true)} className="btn card-btn">
              Edit
            </button>
            <button onClick={deleteHandler} className="btn card-btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
