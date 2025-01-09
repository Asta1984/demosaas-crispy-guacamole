"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function GrowingSvg() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 15])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  return (
    <div ref={containerRef} className="h-[100vh]">
      <div className="fixed inset-y-0 right-0 flex justify-end">
        <motion.img
          style={{
            scale,
            opacity,
          }}
          src="sewantika.svg" 
          alt="Dynamic SVG"
          className="mt-96 md:w-80 md:h-80"
        />
      </div>
    </div>
  )
}

