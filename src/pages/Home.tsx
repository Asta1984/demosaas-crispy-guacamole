import InfiniteGrid from "@/components/Grid";
import Spacetimefabric from "@/components/SquareBackground";
import Landing from "@/components/Landing";
import { Footer } from "@/components/ui/footer-section";
import { AnimatedText } from "@/components/AnimatedText";
import { DisplayCardsDemo } from "@/components/Display-default-cards";
import { BentoGridDemo } from "@/components/Bento-hero";

export default function Hero() {
  return (
    <>
      <Landing/>
      <DisplayCardsDemo />
      <Spacetimefabric />
      <BentoGridDemo />
      <InfiniteGrid />
      <AnimatedText text="Sewantika"/>
      <Footer />
    </>
  );
}

