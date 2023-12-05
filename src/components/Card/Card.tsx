import { useState } from "react";
import "./Card.css";
import { useAppDispatch } from "../../store/store";
import { Note, deleteNote } from "../../store/noteSlice";
import EditNode from "../EditNote/EditNode";

const Card = ({ note }: { note: Note }) => {
  const [isChose, setIsChose] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
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
          <p>{note.id}</p>
          <div className="card__btns">
            <button onClick={() => setIsEdit(true)} className="btn">
              Edit
            </button>
            <button onClick={deleteHandler} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
