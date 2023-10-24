import React, { lazy, Suspense } from "react";
import Container from "./../../UI/Container";

const AboutHeader = lazy(() => import("./AboutHeader"));
const AboutStory = lazy(() => import("./AboutStory"));
const AboutIcons = lazy(() => import("./AboutIcons"));
const AboutPolicies = lazy(() => import("./AboutPolicies"));
const AboutDoctors = lazy(() => import("./AboutDoctors"));

function About() {
  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutHeader />
        <AboutStory />
        <AboutIcons />
        <AboutPolicies />
        <AboutDoctors />
      </Suspense>
    </Container>
  );
}

export default About;
