import { Link } from "react-router-dom";
import AnimateSvg from "../components/svganimate";
import { MacbookScroll } from "./ui/macbook-scroll";

export default function Landing() {
    return(
        <section className="py-16 md:py-20 px-8 md:px-20 mb-16">
            <h1 className="text-2xl sm:text-4xl font-OnlinePrivileges text-wrap max-w-md mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-lime-500 mt-10">
            Launching your ideas has never been easier
            </h1>
            <p className="text-xl sm:text-2xl text-wrap max-w-md font-OnlinePrivileges mb-5 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Build and Launch Your MVP in Record Time. 
            </p>
            <p className='text-xs text-wrap max-w-md font-Type_writer mb-12'>
            From web applications to embedded systems, we provide end-to-end development solutions to transform your ideas into production-ready products.
          </p>
         
            <div className="-z-50 md:absolute md:inset-y-0 md:right-0 md:w-1/2 mb-5 overflow-hidden">
            <AnimateSvg />
            </div>
            <div className="flex flex-col mb-10 sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10">
            <Link to="/features"
                className="text text-center sm:text-lg font-bold px-6 sm:px-8 py-3 border border-purple-500 rounded-full hover:bg-accent transition-colors transform hover:scale-105 duration-200 ease-in-out">
                Explore
            </Link>
            </div>
            <div>
            <MacbookScroll />
            </div>
        </section>
    )    

}