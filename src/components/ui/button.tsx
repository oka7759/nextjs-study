import { NextPage } from "next";
import Link from "next/link";
import classes from "./button.module.css";
import { BtnProps } from "@/types/props";

const Button = (props: BtnProps) => {
  if (props.link) {
    return (
      <Link className={classes.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
