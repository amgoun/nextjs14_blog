import React from "react";

export default function pages() {
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>create new post </h1>
      <form action=" " className=" flex flex-col">
        <label htmlFor="title">post title</label>
        <input type="text" name="title" id="" className=" border-2  border-red-200 py-2 px-2 " />
      </form>
    </div>
  )
}
