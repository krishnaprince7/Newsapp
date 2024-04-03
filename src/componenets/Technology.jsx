import React, { useState,useEffect } from 'react'
import axios from 'axios';

const Technology = () => {
  const [data, setdata] = useState("");

  const fetchdata = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=Technology&apiKey=1f4be9a8bb504c7aa7ae920d3bb7b4fb"
      )
      .then((res) => setdata(res.data.articles));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="w-full  ">
      <div className="max-w-[1280px]   mx-auto px-4 sm:px-8 py-4">
        <h1 className="sm:text-3xl text-xl  font-semibold underline pl-0 sm:pl-10">
          TOP HEADLINES
        </h1>
        <div className="my-3   sm:px-8 py-4 flex flex-col ">
          {data
            ? data.map((items, index) => (
                <div className="my-4 mx-auto border-2  sm:w-[600px] " style={{boxShadow:"2px 2px 10px silver,"}}>
                  <h1 className="text-xl px-2 font-semibold">{items.title}</h1>
                  <img className="my-2 px-2" src={items.urlToImage} alt="Image not found" style={{width:"auto",height:"300px",objectFit:"cover"}} />
                  <p className="text-start px-2">{items.content}</p>
                  <a className="text-[19px] px-2 underline text-blue-600" target="blank" href={items.url}>View more</a>
                </div>
              ))
            : "LOADING...."}
        </div>
      </div>
    </div>
  )
}

export default Technology