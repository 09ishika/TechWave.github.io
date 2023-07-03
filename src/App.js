import './App.css';
import PreNavbar from './components/Prenavbar';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes } from "react-router-dom";
import { Route} from "react-router-dom";
import Slider from './components/Slider';
import Offers from './components/Offers.js';
import data from './data/Data.json';
import Heading from './components/Heading.js';
import StartProducts from './components/StartProducts.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories.js';
import ProductReview from './components/ProductReview.js'
import Video from './components/Video.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js'
function App() {
  return (
    <Router>
     <PreNavbar/>
     <Navbar/>
     <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

     <Slider start={ data.banner.start} /> 
     <Offers offer = {data.offer} />
     <Heading text={"START PRODUCT"}/>
     <StartProducts starProduct = {data.starProduct} />
     <Heading text={"HOT ACCESSORIES"}/>
     <HotAccessoriesMenu/>
     <Routes>
     <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
      </Route>
      </Routes>
      <Routes>
     <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}>
      </Route>
       </Routes>
       <Routes>
     <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
      </Route>
       </Routes>
       <Routes>
     <Route exact path="/lifeStyles" element={<HotAccessories lifeStyles={data.hotAccessories.lifeStyle} lifeStylesCover={data.hotAccessoriesCover.lifeStyle}  />}>
      </Route>
       </Routes>
       <Routes>
     <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
      </Route>
       </Routes>
      <Heading text={"Product Reviews"}/> 
    <ProductReview productReviews={data.productReviews} />  
    <Heading text={"Videos"}/> 
    <Video video = {data.videos}/>
    <Heading text={"IN THE PRESS"}/> 
    <Banner banner= {data.banner}/>
    <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
