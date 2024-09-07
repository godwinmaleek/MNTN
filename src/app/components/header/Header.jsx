import Nav from "../nav/Nav";
import Image from "next/image";
import skyImage from "../../../../public/images/HG.png";
import mountainImage from "../../../../public/images/MG.png";
import clifImage from "../../../../public/images/VG.png";
import arrowDownward from "../../../../public/svg/arrow_downward_24px.svg";
import style from "../header/styles/header.module.scss";
import { useCallback, useEffect, useRef } from "react";
import scrollIntoView from "scroll-into-view";

export default function Header({ scrollToSection }) {
  const heroTextContainerRef = useRef();
  const skyImageContainerRef = useRef();
  const mountainImageContainerRef = useRef();
  const clifImageContainerRef = useRef();

  const onScroll = useCallback((event) => {
    const { scrollY } = window;

    heroTextContainerRef.current.style.transform = `translateY(${
      scrollY * 0.4
    }px)`;

    mountainImageContainerRef.current.style.transform = `translateY(${
      scrollY * 0.15
    }px)`;
    clifImageContainerRef.current.style.transform = `translateY(${
      scrollY * -0.3
    }px)`;

    // clifImageContainerRef.current.style.top = `${585 + scrollY * -0.05}px`;
    // mountainImageContainerRef.current.style.top = `${360 + scrollY * 0.19}px`;
    // heroTextContainerRef.current.style.marginTop = `${106.5 + scrollY * 0.3}px`;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header className={style.header}>
      <Nav />

      <div
        ref={heroTextContainerRef}
        className={style.headTextContainer}
        id="headTextContainer"
      >
        <div className={style.headText}>
          <span></span>
          <p>A Hiking guide</p>
        </div>
        <h1>Be prepared for the Mountains and beyond!</h1>
        <div
          className={style.scrollDown}
          onClick={() => {
            scrollIntoView(scrollToSection.current);
          }}
        >
          <p>scroll down</p>
          <Image src={arrowDownward} alt="arrow down"></Image>
        </div>
      </div>
      <div
        ref={skyImageContainerRef}
        className={style.skyImageContainer}
        id="skyImageContainer"
      >
        <div className={style.skyImageGradient}></div>
        <Image className={style.heroImg} src={skyImage} alt="sky"></Image>
      </div>
      <div
        ref={mountainImageContainerRef}
        className={style.mountainImageContainer}
        id="mountainImageContainer"
      >
        <div className={style.mountainImageGradient}></div>
        <Image
          className={style.heroImg}
          src={mountainImage}
          alt="mountain"
        ></Image>
      </div>
      <div ref={clifImageContainerRef} className={style.clifImageContainer}>
        <div className={style.clifImageGradient}></div>
        <Image className={style.heroImg} src={clifImage} alt="clifEdge"></Image>
      </div>

      {/* <div className={style.heroEndGradient}></div> */}
    </header>
  );
}
