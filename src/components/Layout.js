import React from "react";
import From from "./From";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <header id="header">
        <Header/>
      </header>
      <section>
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
          <From/>
        </div>
    
      </section>
    </div>
  );
};

export default Layout;
