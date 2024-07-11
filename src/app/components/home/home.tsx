"use client"

import React,{ useState, useEffect } from "react";
import Banner from "./Banner";
import PostsPreview from "./PostsPreview";

export default function Home() {

  return (
<>
  <Banner/>
  <PostsPreview/>
  </>
  );
}
