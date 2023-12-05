import { useState } from "react";
import { useAppSelector } from "../../../store/store";
import CardList from "../../CardList/CardList";
import SelectTags from "../../SelectTags/SelectTags";
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
          <button onClick={() => setIsAddNote(true)}>Add a note</button>
          {isAddNote ? (
            <AddNote tag={tag} setTag={setTag} setIsAddNote={setIsAddNote} />
          ) : null}
          <SelectTags />
        </div>
        <h2>Notes ist</h2>
      </>
      <div className="main__content">
        <CardList />
        <TagsList tag={tag} tagList={state.tags} />
      </div>
    </main>
  );
};

export default Main;
