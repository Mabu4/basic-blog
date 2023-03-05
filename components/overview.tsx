import FirstHeader from "./first-header";
import SecondHeader from "./second-header";
import PostList from "./post-list";

interface property {
  type: string;
}

const OverviewComponent = ({ type }: property) => {
  return (
    <>
      <div className="page-wrapper">
        {type === "first" ? <FirstHeader /> : <SecondHeader />}
        <PostList />
      </div>
    </>
  );
};

export default OverviewComponent;
