
import HeroSection from "../../Components/HeroSection/HeroSection"
import Events from '../../Components/events/events';
import Section1 from '../../Components/section1/section1';
import Partenairec from '../../Components/partenairescarousel/partenairec';
import Products from '../../Components/Products/products';
import Crowdfunding from "../../Components/crowdfunding/crowdfunding";
import Popchat from '../ChatPop/Popchat.js'
import Navbarr from "../../Components/Navbar/navbar";
import Shepherd from 'shepherd.js';

function Home(){



return(

<>
<Navbarr />
<HeroSection />
{/* <div align="center" className="eventbackground">
<Events/> </div> */}


     <Section1 />
     <div>
</div>
     <Products/>
     <Crowdfunding />
<br />

     <Partenairec />
     <br />
     </>);
}
export default Home