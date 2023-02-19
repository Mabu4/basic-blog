import { useRouter } from "next/router";

interface property {
  theme: String;
}

const BlogOverview = ({ theme }: property) => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.theme);
  const id = router.query.theme ? router.query.theme.toString() : "";

  //send a request to some backend server

  return (
    <div>
      <h1>Das ist der Blog</h1>
    </div>
  );
};

export default BlogOverview;
