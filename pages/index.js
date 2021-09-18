import Head from "next/head";
import LandingPage from "../components/LandingPage";
import Usefulness from "../components/Usefulness";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>dev2money</title>
        <meta name="description" content="Generated by create next app" />
        {/* it should be changed */}
        <link rel="icon" href="/favicon.ico" />
        {/* it should be changed */}
      </Head>
      <LandingPage />
      <Usefulness />
    </div>
  );
}
