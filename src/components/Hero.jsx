import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center">
      <div className="flex flex-col gap-4 max-w-[800px] w-full mx-auto p-4">
        <p>IT'S TIME TO GET </p>
        <h1 className="uppercase font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
          READY FOR <span className="text-blue-400">SUMMER</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hearby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">absolutely shredded </span>
        and accept all risks of becoming the subject of envy amongst the entire
        neighbourhood, if not{" "}
        <span className="text-blue-400 font-medium">the world!</span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
