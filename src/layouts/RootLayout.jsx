import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="max-w-7xl mx-auto ">
      {isLoading && (
        <LoadingSpinner></LoadingSpinner>
      )}
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="pt-16 md:pt-18 min-h-screen">
        <section>
          <Outlet></Outlet>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
