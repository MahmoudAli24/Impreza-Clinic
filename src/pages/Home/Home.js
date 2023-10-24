import React from "react";
import { Fragment, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MainHeader = React.lazy(() =>
  import("../../components/MainHeader/MainHeader")
);
const TwoCards = React.lazy(() => import("../../components/TwoCards/TwoCards"));
const Quality = React.lazy(() => import("../../components/Quality/Quality"));
const Covid = React.lazy(() => import("../../components/Covid/Covid"));
const Questions = React.lazy(() =>
  import("../../components/Questions/Questions")
);
const People = React.lazy(() => import("../../components/People/People"));
const Contact = React.lazy(() => import("../../components/Contact/Contact"));

function Home() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <MainHeader />
        <TwoCards />
        <Quality />
        <Covid />
        <Questions />
        <People />
        <Contact text={"Impreza Clinic for the Whole Family"} />
      </Suspense>
    </Fragment>
  );
}

export default Home;
