import { useRouter } from "next/router";

const TutorialsArticle = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query.articleID);

  //send a request to some backend server
  return (
    <div>
      <h1>TutorialsArticle</h1>
    </div>
  );
};

export default TutorialsArticle;
