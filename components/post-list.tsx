import { DUMMY_DATA } from "@/dummy-data";

const PostList = () => {
  console.log(DUMMY_DATA);
  return (
    <div>
      <div className="left-container">
        {DUMMY_DATA &&
          DUMMY_DATA.map((data) => {
            return <div key={data.id}>{data.title}</div>;
          })}
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default PostList;
