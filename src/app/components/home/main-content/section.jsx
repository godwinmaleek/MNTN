import style from "./style/section.module.scss";
import Image from "next/image";

export default function MainSection({
  sectionId,
  styles,
  imgSrc,
  rtl,
  sectionRef,
  ...rest
}) {
  return (
    <div
      ref={sectionRef}
      id={sectionId}
      className={`${
        rtl ? `${style.section} ${style.rtl}` : `${style.section}`
      }`}
      style={styles}
    >
      <div className={style.sectionText}>
        <span className={style.sectionIndex}>01</span>
        <div className={style.headText}>
          <span></span>
          <p>GEt Started</p>
        </div>
        <h2>What level of hiker are you?</h2>
        <p>
          Determining what level of hiker you are can be an important tool when
          planning future hikes. This hiking level guide will help you plan
          hikes according to different hike ratings set by various websites like
          All Trails and Modern Hiker. What type of hiker are you – novice,
          moderate, advanced moderate, expert, or expert backpacker?{" "}
        </p>
        <div className={style.readMore}>
          <p>read more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
          >
            <path
              d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
              fill="#FBD784"
            />
          </svg>
        </div>
      </div>

      <div className={style.sectionImageContainer}>
        <Image src={imgSrc} {...rest}></Image>
      </div>
    </div>
  );
}
