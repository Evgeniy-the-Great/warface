import React from "react";
import data from "../data";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main benefits={data.benefits} />
      {/* <Footer /> */}
    </>
  );
};

export default App;
