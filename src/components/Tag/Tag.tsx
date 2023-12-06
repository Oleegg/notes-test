import { useState } from "react";
import { addSelectedTeg, deleteSelectedTag } from "../../store/noteSlice";
import { useAppDispatch } from "../../store/store";
import "./Tag.css";

const Tag = ({ tag }: { tag: string }) => {
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useAppDispatch();

  const checkTagHandler = (tag: string) => {
    if (!isSelected) {
      dispatch(addSelectedTeg({ tag }));
      setIsSelected(true);
    } else {
      dispatch(deleteSelectedTag({ tag }));
      setIsSelected(false);
    }
  };

  return (
    <span
      className={isSelected ? "tag-list__span-select" : "tag-list__span"}
      onClick={() => checkTagHandler(tag)}
    >
      {tag}
    </span>
  );
};

export default Tag;
