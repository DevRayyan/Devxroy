'use client'

import { useState } from "react";

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden mx-8 rounded-xl  relative mt-3 " style={{ maxHeight: "400px" }}>
            <div
                className={`flex transition ease-out duration-40`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s,i) => {
                    return <img key={i} src={s}  style={{ maxHeight: "400px",minWidth:'100%',objectFit:'cover' }} />;
                })}
            </div>

            <div className="absolute  top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <i className="fa-regular fa-angle-left"></i>
                </button>
                <button onClick={nextSlide}>
                    <i className="fa-regular fa-angle-right"></i>
                </button>
            </div>

            <div className="absolute  bottom-0 py-4 flex justify-center gap-1 w-full">
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                            }}
                            key={"circle" + i}
                            className={`rounded-full w-2 lg:w-3 h-2 lg:h-3 cursor-pointer  ${i == current ? "border-2 border-indigo-500 bg-slate-900" : "bg-slate-100"
                                }`}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}