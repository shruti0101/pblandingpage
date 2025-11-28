
import Hero from "@/components/Hero";
import Whychoose from "@/components/Whychoose"

import Services from "@/components/Services";
import Process from "@/components/Process";
import Cta from "@/components/Cta"
import About from "@/components/About";
// import Stickybutton from "@/components/Stickybutton";
import Faq from "@/components/Faq";
import Cta2 from "@/components/Cta2";
// import GrowthPopup from "@/components/Popup";
import Topbar from "@/components/Topbar";
import Social from "@/components/Social";
// import ScrollToTop from "@/components/Scrolltop";
import Whatsapp from "@/components/Whatsapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Socialmedia from "@/components/Socialmedia";
import Market from "@/components/Market";
import Clientele from "@/components/Clientele";

export default function Home() {
  return (
 <>


<Social></Social>

{/* <ScrollToTop></ScrollToTop> */}

<Whatsapp></Whatsapp>


 {/* <GrowthPopup></GrowthPopup> */}
 {/* <Stickybutton /> */}
 
<Hero></Hero>
<Whychoose></Whychoose>

<Services></Services>
<Process></Process>
<Project></Project>
<Socialmedia></Socialmedia>
<Cta2></Cta2>
<About></About>
<Clientele></Clientele>
<Market></Market>
<Cta></Cta>
<Faq></Faq>


 </>
  );
}
