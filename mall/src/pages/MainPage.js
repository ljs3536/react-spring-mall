import React from "react";
import BasicLayout from "../layouts/BasicLayout";

function MainPage() {
  return (
    <BasicLayout>
      <div className={"text-3xl"}>Main Page</div>
      <div className="text-4xl font-extrabold m-2 p-3 bg-green-500">
        HelloWorld
      </div>
    </BasicLayout>
  );
}

export default MainPage;
