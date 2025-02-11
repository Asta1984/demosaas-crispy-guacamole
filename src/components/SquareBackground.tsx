import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import {motion} from "framer-motion";

export default function Spacetimefabric() {
  return (
    <div>
    <div className=" flex md:items-center justify-center ">
      <img 
        src= 'animatedmaci.gif' 
        alt="Remote GIF"
        className="h-32 w-32 md:h-56 md:w-56 p-6"
      />
    </div>
    <div className="relative -mb-40 md:mb-8 p-16 ">
      <div className="relative h-screen rounded-3xl">

        <div className="absolute inset-0 flex justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }} // Trigger when 80% in view, only once
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
          <Card className=" w-full bg-transparent border-none ">
          <CardContent className="flex flex-col gap-2 p-6 md:p-20">
            <CardTitle className='text-slate-300 font-OnlinePrivileges text-2xl md:text-4xl'>Exceptional solutions that matters.</CardTitle>
            <CardDescription className='text-emerald-500 font-Type_writer text-xs md:text-sm '>
            You want job to be done, we get it done. 
            </CardDescription>
          </CardContent>
          </Card>
          </motion.div>
        </div>      
      </div>
    </div>
    </div>
  )
}