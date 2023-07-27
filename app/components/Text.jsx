'use client'
import Typewriter from "typewriter-effect";
function Text() {
  return (
    <Typewriter 
      options={{
        wrapperClassName: "p-2 text-white text-2xl max-md:text-sm",
        strings: [
          "React JS Developer",
          "Next JS Developer",
          "Computer Science Undergrad",
          "Front End Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  )
}

export default Text