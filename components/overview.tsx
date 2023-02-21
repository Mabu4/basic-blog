import FirstHeader from "@/components/first-header";
import PostList from "@/components/post-list";

const OverviewComponent = () => {
 
  console.log(process.env.MONGODB_URI);
  return (
    <div>
      <FirstHeader />
      <PostList />
    </div>
  );
};

export default OverviewComponent;
