import { State } from "../../store/additionally";
import Tag from "../Tag/Tag";
import "./TagsList.css";

type Props = {
  tag: string;
  state: State;
};

const TagsList = ({ tag, state }: Props) => {
  const tags = state.tags;
  const selectedTags = state.selectedTags.filter((tag) => tags.includes(tag));
  console.log("-----------", selectedTags);

  return (
    <div className="tag-list">
      <h4>Tags list</h4>
      <p>
        {tags.length
          ? tags.map((tag) => (
              <Tag key={tag} tag={tag} checked={selectedTags.includes(tag)} />
            ))
          : null}
        {tag}
      </p>
    </div>
  );
};

export default TagsList;
