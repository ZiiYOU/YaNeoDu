"use client";

import axios from 'axios';
import { useEffect } from 'react';

function myPage() {

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/licenses");
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])
  

  return (
    <div>myPage</div>
  )
}

export default myPage