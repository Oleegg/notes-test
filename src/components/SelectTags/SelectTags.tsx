import { deleteSelectedTag } from "../../store/noteSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import "./SelectTags.css";

const SelectTags = () => {
  const selectTags = useAppSelector((state) => state.app.selectedTags);
  const dispatch = useAppDispatch();

  const deleteSelectHandler = (tag: string) => {
    dispatch(deleteSelectedTag({ tag }));
  };

  return (
    <div className="select-tag">
      selected:
      {selectTags.length ? (
        selectTags.map((tag) => (
          <span
            className="select-tag__span"
            key={tag}
            onClick={() => deleteSelectHandler(tag)}
          >
            {tag}
          </span>
        ))
      ) : (
        <p>No celected tags</p>
      )}
    </div>
  );
};

export default SelectTags;
