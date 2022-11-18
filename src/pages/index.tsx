import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Menu } from "../components/Menu";
import { Balance } from "../components/Balance";

export default function Home() {
  return (
    <div className="flex">
      <Menu></Menu>
      <div className="py-10 px-20 w-screen">
        <h1 className="font-blinker font-bold text-2xl mb-5">Welcome, USER</h1>
        <Balance></Balance>
      </div>
    </div>
  );
}
