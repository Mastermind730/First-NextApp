"use client";
// import { getServerSideProps } from 'next/dist/build/templates/pages';
import "../styles.css";
import React from 'react';
import Link from 'next/link';
import { useState,useEffect } from 'react';

const page = (props) => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
      console.log("Use effect is running");
      fetch("http://localhost:3000/api/blog")
        .then((a) => {
          return a.json();
        })
        .then((parsed) => {
          console.log(parsed);
          setblogs(parsed);
        });
    }, []);
    // let res= await fetch("http://localhost:3000/api/hello");
    // let data= await res.json();
    // setblogs(data);
    return (
      <>

      
      <div className="container">
      <h1 className="heading text-center my-4 text-warning">Read and Enjoy the given blogs!!</h1>
        {blogs.map((item) => (
          <div className="blog_posts text-center m-8 p-1.2" key={item.slug}>
            <Link href={`/blogpost/${item.slug}`}>
              <h3 className="text-center tertheading">{item.title}</h3>
            </Link>
            <p className="text-center">{item.content}</p>
          </div>
        ))}
        </div>
      </>
    );
    
}

export default page;


// export async function getServerSideProps(){
//         let res=await fetch("http://localhost:3000/api/hello");
//         let blogdata=await res.json();


//         return { props: { blogdata } }

// 