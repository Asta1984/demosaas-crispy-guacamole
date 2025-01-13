import { WarpBackground } from "../components/ui/warp-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";



export default function Mazerunner() {
    return (
        <WarpBackground>
        <Card className=" w-full bg-black">
          <CardContent className="flex flex-col gap-2 p-6 md:p-20">
            <CardTitle className='text-slate-300 font-OnlinePrivileges md:text-xl'>Give your big idea the website it deserves</CardTitle>
            <CardDescription className='text-sky-700 font-Type_writer text-xs md:text-sm '>
            Invest in us for a fast, cost-effective MVP that accelerates your path to market. Save money, reduce risk, and launch your startup success story today! 
            </CardDescription>
          </CardContent>
        </Card>
        </WarpBackground>
    );
  }