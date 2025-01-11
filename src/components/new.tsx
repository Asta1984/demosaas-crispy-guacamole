import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

export default function AnimateSvg() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.9 });
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            const sequence = async () => {
                await controls.start({
                    opacity: 1,
                    scale: 5,
                    rotate: 360,
                    transition: {
                        duration: 2,
                        type: "spring"
                    }
                });
                
                await controls.start({
                    opacity: 0,
                    scale: 12,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                });
            };
            
            sequence();
        }
    }, [isInView, controls]);
    
    return (
        <div ref={ref} className="h-screen flex items-center justify-center relative ">
            <AnimatePresence mode="wait">
                {(
                    <motion.img
                        key="logo"
                        src="sewantika (3).svg"
                        alt="Sewantika"
                        className="w-24 h-24"
                        initial={{
                            opacity: 0,
                            scale: 0.1
                        }}
                        animate={controls}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}