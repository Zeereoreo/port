import React from "react";
import Image from "next/image";

import { introText,introContact } from "@/constants";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro__inner">
        <h2 className="intro__title">{introText.title}</h2>
        <div className="intro__text">
          <div className="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div className="contact">
            <div>{introContact.desc[0]}</div>
            <div>{introContact.desc[1]}</div>
            <a href="https://zeereo.tistory.com/">{introContact.desc[2]}</a>
            <a href="https://github.com/Zeereoreo">{introContact.desc[3]}</a>
          </div>
          <div className="img">
            <Image
              src={introText.img}
              alt="어바웃"
              width={200}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        {/* <div className="intro__lines bottom" aria-hidden="true"> */}
          {/* <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Intro;
