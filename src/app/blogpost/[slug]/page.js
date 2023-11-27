"use client";
import { useState } from "react";
import "../../styles.css";
// import { getStaticPaths } from "next/dist/build/templates/pages";
import * as fs  from "fs";

export default function blog({ params }) {
  
  return (
  <div className="container">
      <main className="main">
        <h1>Title of the page: {params.slug}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel cum
          eaque quos harum consequuntur impedit dicta est et iure velit dolores
          autem earum minima, quisquam quae animi quis fuga eos, temporibus
          incidunt perspiciatis, perferendis ratione fugiat! Quis commodi
          quaerat, rem nisi labore explicabo, dicta officia modi ipsam, sequi
          unde! Vitae.
        </p>
      </main>
    </div>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           slug: "how-to-learn-javascript"
//         }

//       },
//       {
//         params: {
//           slug: "how-to-learn-typescript"
//         }

//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }

// export async function getStaticProps() {
//   try {
//     let data = await fs.promises.readdir("blogdata");
//     let myfile;
//     let allblogs = [];
//     for (let index = 0; index < data.length; index++) {
//       const item = data[index];
//       console.log(item);
//       myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
//       console.log(myfile);
//       allblogs.push(JSON.parse(myfile));
//     }
//     return { props: { allblogs: JSON.parse(allblogs) } };
//   } catch (error) {
//     console.error("Error reading files:", error);
//     return { props: { allblogs: [] } }; // Handle error gracefully
//   }
// }



