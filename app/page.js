import Image from "next/image";
import Hero from "@/components/Hero";
import Whychoose from "@/components/Whychoose"
import Clinetele from "@/components/Clinetele";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Cta from "@/components/Cta"
import About from "@/components/About";
import Stickybutton from "@/components/Stickybutton";
import Faq from "@/components/Faq";
import Cta2 from "@/components/Cta2";
import GrowthPopup from "@/components/Popup";
import Topbar from "@/components/Topbar";
import Social from "@/components/Social";
import ScrollToTop from "@/components/Scrolltop";
import Whatsapp from "@/components/Whatsapp";
export default function Home() {
  return (
 <>

<Topbar></Topbar>
<Social></Social>
<ScrollToTop></ScrollToTop>
<Whatsapp></Whatsapp>
 <GrowthPopup></GrowthPopup>
 <Stickybutton />
<Hero></Hero>
<Whychoose></Whychoose>
{/* <Clinetele></Clinetele> */}
<Services></Services>

<Process></Process>
<Cta2></Cta2>
<About></About>
<Cta></Cta>
<Faq></Faq>

 </>
  );
}
