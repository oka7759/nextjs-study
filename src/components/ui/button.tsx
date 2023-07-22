import { NextPage } from 'next'
import Link from 'next/link'
import classes from './button.module.css'
import { BtnProps } from '@/types/props'

interface Props {}

const Button = (props:BtnProps) => {
  return <Link className={classes.btn} href={props.link}>{props.children}</Link>
}

export default Button