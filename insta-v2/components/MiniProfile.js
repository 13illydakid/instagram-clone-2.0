// import React from 'react'

function MiniProfile() {
   return (
      <div className="flex items-center justify-between mt-14 ml-10">
         <img
            className="w-16 h-16 rounded-full border p-[2px]"
            src="https://staticg.sportskeeda.com/editor/2022/01/cbc36-16421825565301-1920.jpg"
            alt=""
         />

         <div className="flex-1 mx-4">
            <h2 className="font-bold">Itadori Yuji desu!</h2>
            {/* <h2 className="font-bold">So glad you are here!</h2> */}
            <h2 className="text-sm text-gray-400">Welcome to Instagram</h2>
         </div>

         <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
      </div>
   )
}

export default MiniProfile;
