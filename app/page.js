import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import AboutUs from "@/components/sections/About";
import LandingPage from "@/components/sections/Coffee";
import HeroSection from "@/components/sections/Hero";
import GuestReview from "@/components/sections/Reviews";

export default function Home(){
  return(<>
    <HeroSection/>
    <LandingPage/>
    <AboutUs/>
    <GuestReview/>
  </>) 
}