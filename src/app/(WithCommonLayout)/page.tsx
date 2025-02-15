"use client"

import { useUser } from "@/context/UserContext";



const HomePage = () => {
  const {user} = useUser()
  console.log(user)



  return (
    <div className="text-center text-2xl">
      welcome
    </div>
  );
};

export default HomePage;