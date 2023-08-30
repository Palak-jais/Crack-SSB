import React from "react";
export default function Footer(){
    return<>
        <footer className="bg-light-blue text-blue-700  font-bold py-6 h-50 w-100">
        <div className="container mx-auto flex items-center justify-between">
          <p className="p-10">{new Date().getFullYear()} Crack SSB.</p>
          <div className=" p-10">
            <p className="p-10 "> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
}