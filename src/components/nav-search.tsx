"use client";
// this is leaf component
import { useState } from "react";

export const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};

// if we make the parent component use client then all its child or nested compoennts
// converted into client components
// to avoid this use client the component in leave component so only that component is client