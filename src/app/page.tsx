import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Audit from "@/pages/audit/page";
import Benifits from "@/pages/benifits/page";
import Handle from "@/pages/handle";
import Hero from "@/pages/hero";
import Experience from "@/pages/experience/page";
import Plans from "@/pages/plans/page";
import Image from "next/image";



export default function Home() {
  return (
<div>
  <Navbar/>  
  <Hero/>
  <Handle/>
  <Benifits/>
  {/* <Audit/> */}
  <Experience/>
  <Plans/>
  <Footer/>
</div>
  );
}
