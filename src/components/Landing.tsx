import { Link } from "react-router-dom";
import { MacbookScroll } from "./ui/macbook-scroll";
import {motion} from "framer-motion";
import { Mac } from "./ui/mac";
import { Safari } from "./ui/safari";
import { Iphone16Pro } from "./ui/iphone";

export default function Landing() {
    return(
        <section className="py-16 md:py-20 px-8 md:px-20 mb-16">
            <div className="flex justify-center p-8 -mb-10">
                <div className="text-center font-OnlinePrivileges border border-purple-500 rounded-full hover:bg-accent transform">
                <Link to="/features" className="text-xs p-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                    Build and Launch Your MVP in Record Time. 
                </Link>
                </div>
            </div>
            <MacbookScroll />
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.9 }} // Trigger when 80% in view, only once
                transition={{ duration: 1, ease: "easeOut" }}
            > 
            <h1 className="text-3xl text-center text-primary p-3 font-OnlinePrivileges">
                Simplyfing the complex
                <p className="font-Type_writer text-xs p-5">
                    From web applications to embedded systems  we provide end-to-end development solutions to transform your ideas into production-ready products.
                </p>
            </h1>
            </motion.div>
            <Safari className="flex justify-self-center max-w-screen-lg"/>
            <h1 className="font-OnlinePrivileges text-center text-3xl mt-36">Give your ideas what it deserves</h1>
            <Mac className="flex justify-self-end mt-10" src="https://utfs.io/f/6e654499-f7f4-4d5f-8a96-57255f6775e7-12vlav.jpg"/>
            <h1 className="font-OnlinePrivileges text-center text-3xl mt-36">Share with everyone</h1>
            <Iphone16Pro className="flex justify-self-left mt-20" />
         
            <div className="-z-50 md:absolute md:inset-y-0 md:right-0 md:w-1/2 mb-5 overflow-hidden">
            </div>
            <div className="flex flex-col mb-10 sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">

            </div>
 
        </section>
    )    

}