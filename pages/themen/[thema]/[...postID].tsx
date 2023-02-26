import { useRouter } from "next/router";
import DetailviewComponent from "@/components/detailview";

const BlogDetailview = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.postID);

  const id = router.query.postID ? router.query.postID.toString() : "";

  //send a request to some backend server

  return (
    <main className="page-wrapper-detail">
      <DetailviewComponent id={id}></DetailviewComponent>
    </main>
  );
};

export default BlogDetailview;
