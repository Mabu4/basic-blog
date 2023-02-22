import FirstHeader from "@/components/first-header";
import PostList from "@/components/post-list";

const OverviewComponent = () => {
  console.log(process.env.API_KEY);
  return (
    <div>
      <FirstHeader />
      <PostList />
    </div>
  );
};

export default OverviewComponent;
