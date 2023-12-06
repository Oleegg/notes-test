import Tag from "../Tag/Tag";
import "./TagsList.css";

type Props = {
  tag: string;
  tagList: string[];
};

const TagsList = ({ tag, tagList }: Props) => {
  return (
    <div className="tag-list">
      <h4>Tags list</h4>
      <p>
        {tagList.length
          ? tagList.map((tag) => <Tag key={tag} tag={tag} />)
          : null}
        {tag}
      </p>
    </div>
  );
};

export default TagsList;
