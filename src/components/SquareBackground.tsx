import { Squares } from "../components/ui/squares-background"
import { motion } from "framer-motion";

export default function Spacetimefabric() {
  return (
    <div className="relative mb-20 md:mb-40">
      <div className="h-screen">
        <Squares 
          direction="diagonal"
          speed={0.01}
          squareSize={20}
          borderColor="#333" 
          hoverFillColor="#777"
        />
      </div>
      <div className="absolute inset-0 flex md:items-center justify-center">        
        <motion.img 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }} // Trigger when 80% in view, only once
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-64 w-64 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-3xl md:text-5xl font-Enterpriser leading-none tracking-tighter text-transparent"
            src= 'https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/animatedmaci.gif' 
            alt="Remote GIF"
        />
      </div>
    </div>
  )
}