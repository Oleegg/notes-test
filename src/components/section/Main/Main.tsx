import { useState } from "react";
import { useAppSelector } from "../../../store/store";
import CardList from "../../CardList/CardList";
import TagsList from "../../TagsList/TagsList";
import AddNote from "../../AddNote/AddNote";
import "./Main.css";

const Main = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  const [tag, setTag] = useState("");
  const state = useAppSelector((state) => state.app);
  return (
    <main className="main">
      <>
        <div className="main__filter">
          <p></p>
          <h2>Notes ist</h2>
          <button className="btn main__btn" onClick={() => setIsAddNote(true)}>
            Add a note
          </button>
          {isAddNote ? (
            <AddNote tag={tag} setTag={setTag} setIsAddNote={setIsAddNote} />
          ) : null}
        </div>
      </>
      <div className="main__content">
        <CardList />
        <TagsList tag={tag} tagList={state.tags} />
      </div>
    </main>
  );
};

export default Main;
