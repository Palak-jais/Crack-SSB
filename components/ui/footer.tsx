import React from "react";
export default function Footer(){
    return<>
        <footer className="bg-blue-500 text-white py-6 h-50 w-100">
        <div className="container mx-auto flex items-center justify-between">
          <p className="p-10">{new Date().getFullYear()} Crack SSB. All rights reserved.</p>
          <div className=" p-10">
            <div><a href="#" className="hover:text-gray-500">EXPLORE</a></div>
            <div><a href="#" className="hover:text-gray-500">CHAT</a></div>
          </div>
        </div>
      </footer>
    </>
}