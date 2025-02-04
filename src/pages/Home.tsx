import InfiniteGrid from "@/components/Grid";
import Spacetimefabric from "@/components/SquareBackground";
import Mazerunner from "@/components/Warp";
import Landing from "@/components/Landing";
import { Footer } from "@/components/ui/footer-section";

export default function Hero() {
  return (
    <>
      <Landing/>
      <InfiniteGrid />
      <Spacetimefabric />
      <Mazerunner />
      <Footer />
    </>
  );
}

