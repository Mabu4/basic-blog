import { useRouter } from "next/router";
import OverviewComponent from "@/components/overview";
import Head from "next/head";

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
    <>
      <Head>
        <title>Thema von der Übersicht</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <OverviewComponent type={"second"} />
      </main>
    </>
  );
};

export default BlogOverview;
