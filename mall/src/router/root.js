import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import ListPage from "../pages/todo/ListPage";

const Loading = <div className="{'bg-red-700'}">Loading....</div>;

const Main = lazy(() => import("../pages/MainPage"));

const About = lazy(() => import("../pages/AboutPage"));

const TodoIndex = lazy(() => import("../pages/todo/indexPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "todo",
    element: (
      <Suspense fallback={Loading}>
        <TodoIndex />
      </Suspense>
    ),
    children: [
      {
        path: "list",
        element: (
          <Suspense fallback={Loading}>
            <ListPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default root;
