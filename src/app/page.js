"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Skip from "@/components/Skip";
import Intro from "@/components/Intro";
import Site from "@/components/Site";
import Port from "@/components/Port";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Home() {
  useEffect(() => {
    lenis();
    link();
  }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Site />
        <Port />
      </main>
    </>
  );
}
