import { useRouter } from "next/router";
import DetailviewComponent from "@/components/detailview";

const BlogArticle = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.articleID);

  const id = router.query.articleID ? router.query.articleID.toString() : "";

  //send a request to some backend server
  return (
    <div>
      <h1>Blog Article oben</h1>
      <DetailviewComponent id={id}></DetailviewComponent>
    </div>
  );
};

export default BlogArticle;
