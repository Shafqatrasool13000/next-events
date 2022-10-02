import { NextPage } from "next";
import Link from "next/link";
import { ButtonProps } from "../../utils/Type";
import classes from "./button.module.css";

const Button: NextPage<any> = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children} </a>
      </Link>
    );
  }
  return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>;
};

export default Button;
