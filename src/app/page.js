"use client"
import Header from "@/components/Header/Header";
import Tabs from "@/components/Tabs/Tabs";
import withAuth from "@/utils/withAuth";

const HomePage = () => {
  return (
    <>
      <Header />
      <Tabs />
    </>
  );
}

export default withAuth(HomePage);