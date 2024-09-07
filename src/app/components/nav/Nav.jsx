import style from "./style/nav.module.scss";
import Image from "next/image";

import accountSvg from "../../../../public/svg/cart.svg";

export default function Nav() {
  return (
    <div className={style.container}>
      <div className={"logo"}>MNTN</div>
      <nav>
        <a href="">Equipment</a>
        <a href="">About us</a>
        <a href="">Blog</a>
      </nav>
      <div className={style.account}>
        <Image src={accountSvg} />
        <span>Account</span>
      </div>
    </div>
  );
}
