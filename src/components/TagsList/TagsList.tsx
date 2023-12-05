import { addSelectedTeg } from "../../store/noteSlice";
import { useAppDispatch } from "../../store/store";
import "./TagsList.css";

type Props = {
  tag: string;
  tagList: string[];
};

const TagsList = ({ tag, tagList }: Props) => {
  const dispatch = useAppDispatch();

  const checkTagHandler = (tag: string) => {
    dispatch(addSelectedTeg({ tag }));
  };

  return (
    <div className="tag-list">
      <h4>Tags list</h4>
      <p>
        {tagList.length
          ? tagList.map((tag) => (
              <span
                className="tag-list__span"
                key={tag}
                onClick={() => checkTagHandler(tag)}
              >
                {" "}
                {tag}{" "}
              </span>
            ))
          : null}
        {tag}
      </p>
    </div>
  );
};

export default TagsList;
