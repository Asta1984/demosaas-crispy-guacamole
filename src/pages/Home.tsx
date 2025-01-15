import InfiniteGrid from "@/components/Grid";
import Spacetimefabric from "@/components/SquareBackground";
import Mazerunner from "@/components/Warp";
import Landing from "@/components/Landing";

export default function Hero() {
  return (
    <>
      <div className="overflow-auto">
        <Landing/>
      </div>
      <InfiniteGrid />
      <Spacetimefabric />
      <Mazerunner />
    </>
  );
}

