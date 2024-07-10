import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="{'text-3xl}">
      <div className="{'flex'}">
        <Link to={"/about"}>About</Link>
      </div>
      <div>Main Page</div>
    </div>
  );
}

export default MainPage;
