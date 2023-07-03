import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

const Slider = ({start}) => {
  return (
   <Carousel fade>
    {     // use karni hai javascript

    start.map((item )=>(      // har element ko iterate karega jisse slider dikh rha hai 
        <Carousel.Item>           
        <img className='d-block w-100'
         src={item}
         alt='First-slide'
         />
    </Carousel.Item>
    ))
    }
   </Carousel>
  );
}

export default Slider;

//1. use () bracktes for returning the map function value maine { } ye brackets use kar liye the to return nhi kar paa rha tha 
//2. data.json file me se import nhi kar rha tha to maine variable bna diya logoinfo naam ka or jha use karna par rha tha wha pe logoinfo.logo ki tarah kara toh error solve ho gyi 
