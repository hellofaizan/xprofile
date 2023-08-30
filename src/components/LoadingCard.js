import React, { useContext } from "react";
import ThemeContext from "@/ThemeContext";

export default function Skeleton({ number }) {
    const { theme } = useContext(ThemeContext);
    return (
        Array(number).fill(0).map((index) => (
            <div key={index} className=" w-full h-auto overflow-hidden border border-gray-700 hover:border-gray-600 hover:scale-[1.006] rounded-xl">
                <div className="animate-pulse flex flex-col">
                    <div className=" bg-slate-700 mb-2 h-20 w-full"></div>
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            <div className={`rounded-full bg-slate-700 h-28 w-28 ml-2 md:ml-4 -mt-8 border-4 ${theme == "dark" ? "border-black" : "border-white"
                                }`} ></div>
                        </div>
                        <div className="h-5 -mt-5 w-48 bg-slate-700 rounded"></div>
                    </div>





                    <div className="p-4">
                        <div className="h-4 bg-slate-700 mb-2 rounded"></div>
                        <div className="h-4 bg-slate-700 rounded"></div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="h-12 bg-slate-700 rounded col-span-1"></div>
                            <div className="h-12 bg-slate-700 rounded col-span-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}