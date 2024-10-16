"use client";

import { useState } from "react";
import { ServerComponentOne } from "./server-component-one";
{/* while using server inside client it also convert the server into client 
      and we can loss server functionality to avoid this we can pass the server 
      component as a child in client it will retains server as a server component */}
    //   by passing the server componnet as a child in client component it does not
    // recognize that it is server or client thats why it works using this approach
export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>ClientComponentOne</h1>
      {children}
    </>
  );
};