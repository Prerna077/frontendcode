import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import SellerComponent from "../components/sellers/Sellercomponent";

const SellerScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
         <SellerComponent />
      </main>
    </>
  );
};

export default  SellerScreen;
