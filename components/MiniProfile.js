// import React from 'react'
import { UserAuth } from "../pages/api/auth/[...nextauth]";
import { signOut, useSession } from "next-auth/react";

function MiniProfile() {
   // const { data: session } = useSession();
   const { user, googleSignIn, logOut } = UserAuth();

   // console.log(session);
   const handleSignOut = async () => {
      try {
        await logOut();
      } catch (error) {
        console.log(error);
      }
    };

   return (
      <div className="flex items-center justify-between mt-14 ml-10">
         <img
            className="w-16 h-16 rounded-full border p-[2px]"
            src={user?.image}
            alt=""
         />

         <div className="flex-1 mx-4">
            {/* <h2 className="font-bold">Itadori Yuji desu!</h2> */}
            <h2 className="font-bold">{user?.displayName}</h2>
            {/* <h2 className="font-bold">So glad you are here!</h2> */}
            <h2 className="text-sm text-gray-400">Welcome to Instagram</h2>
         </div>

         <button
            onClick={handleSignOut}
            className="text-blue-400 text-sm font-semibold">
            Sign Out
         </button>
      </div>
   )
}

export default MiniProfile;
