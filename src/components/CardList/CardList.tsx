/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useEffect, useState } from "react";
import { addAll } from "../../store/noteSlice";
import "./CardList.css";
import { State } from "../../store/additionally";

const CardList = () => {
  const state = useAppSelector((state) => state.app);
  const [notesList, setNotesList] = useState(state.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadFromLocalStorage = () => {
      try {
        const stateStr = localStorage.getItem("state");

        if (stateStr) {
          const tags = JSON.parse(stateStr).tags;
          const notes = JSON.parse(stateStr).notes;
          const selectedTags = JSON.parse(stateStr).selectedTags;

          if (tags.length || notes.length || selectedTags.length) {
            dispatch(addAll({ notes, tags, selectedTags }));
            setNotesList(notes);
          }
        }
      } catch (e) {
        console.error(e);
        return undefined;
      }
    };
    loadFromLocalStorage();
  }, []);

  useEffect(() => {
    const saveToLocalStorage = (state: State) => {
      try {
        localStorage.setItem("state", JSON.stringify(state));
      } catch (e) {
        console.error(e);
      }
    };

    if (state.notes.length || state.tags.length) {
      saveToLocalStorage(state);
    }
  }, [state]);

  useEffect(() => {
    const select = state.selectedTags;
    const notes = state.notes;
    if (select.length) {
      const index = [] as number[];
      const filtered = [];
      for (let i = 0; i < notes.length; i++) {
        for (let k = 0; k < select.length; k++) {
          if (
            notes[i].text.includes(select[k]) &&
            !index.includes(notes[i].id)
          ) {
            filtered.push(notes[i]);
            index.push(notes[i].id);
          }
        }
      }
      setNotesList(filtered);
    } else {
      setNotesList(notes);
    }
  }, [state]);

  return (
    <div className="card-list">
      {notesList.length ? (
        notesList.map((note) => <Card key={note.id} note={note} />)
      ) : (
        <p>No notes</p>
      )}
    </div>
  );
};

export default CardList;
