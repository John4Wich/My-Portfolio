import Lottie from "lottie-web";
import { useRef, useEffect } from "react";
// import Building from "./assets/building.json";


export default function GifConversion({data,play}) {
  console.log("what is data : ",data)
  const containers = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: containers.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      playmode: true && play ? play : "normal",
      autoplay: true,
      animationData: data // the path to the animation json
    });
  }, []);

  return (
    <>
      <div ref={containers} style={{backgroundRepeat:"no-repeat",overflow:"hidden",width:"50vw", height:"80vh"}}></div>
    </>
  );
}
