import Image from "next/image";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Discover from "../components/discover";
import StepsOfSuccess from "../components/stepsofsuccess";
import Footer from "../components/footer";
import SuccessfulContracts from "@/components/SuccessfulContracts";
import MatchSection from "@/components/MatchSection";

export default function Home() {
  return (
    <div className="space-y-4 max-w-[1440px] mx-auto">
      <Navbar />
      <Banner />
      <Discover />    
      <SuccessfulContracts />
      <MatchSection />
      <StepsOfSuccess />
      <Footer />
    </div>
  );
}
