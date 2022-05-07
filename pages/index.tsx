import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import TopBar from "../src/componetes/topBar/topBar";

const Home: NextPage = () => {
  return (
    <div>
      <TopBar />
    </div>
  );
};

export default Home;
