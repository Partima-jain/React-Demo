import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";


const App = () => {
  let heroData = [
    {text1:"Dive into..",text2:"What you love"},
    {text1:"Indulge your ",text2:"Passions"},
    {text1:"Give in to",text2:" your passions"},
    {text1:"Don't manage....",text2:"Lead"},
    {text1:"Be an Achiever..",text2:"not a Performer"},
  ]

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  })
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setplayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setplayStatus={setplayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
      <About/>
      <Footer/>
    </div>
  )
}

export default App