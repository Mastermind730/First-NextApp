"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./styles.css";
export default function Home() {
 

  return (
    <main>
      <nav className="navbar">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <h1 className="heading text-center">My First Next App</h1>
      <div className="contents main">
        <h2 className="text-center ">Main Contents</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
          dignissimos obcaecati error nesciunt neque quod aperiam ab autem
          consequatur nostrum eaque accusamus illo rem, quos vero culpa sequi
          quas. Quas totam a dicta aspernatur quisquam quos suscipit soluta.
          Quaerat vel similique illum a fugit saepe rerum perspiciatis
          laboriosam numquam earum.
        </p>
      </div>

      
    </main>
  );
}
