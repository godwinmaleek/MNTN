import style from "../footer/styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logoContainer}>
        <div className="logo">MNTN</div>
        <p>Get out there & discover your next slope, mountain & destination!</p>
      </div>
      <div className={style.linkWrapper}>
        <div>
          <p>More on MNTN</p>
          <div className={style.links}>
            <a href="#">The Team</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div>
          <p>More on The Blog</p>
          <div className={style.links}>
            <a href="#">About MNTN</a>
            <a href="#">Contributors & Writers</a>
            <a href="#">Write For Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>

      <span className={style.copyright}>
        Copyright 2019 MNTN, Inc. Terms & Privacy
      </span>
    </footer>
  );
}
