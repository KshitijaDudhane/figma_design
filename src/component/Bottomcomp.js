import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Bottomcomp = () => {
    const data = [
        "“Amazing product and company” Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec, pellentesque"  
    , 
    "“Amazing product and company” Lorem ipsum dolor sit amet,all consectetuer adipiscing elit allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis,ultricies nec, pellentesque." 
    , 
    "“Amazing product and company” Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. for a Donec quam felis, ultricies nec,pellentesque."
]
    
    const responsive = {
        
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    
      };
  return (
            <div>
              <h1 className='bh1'>Customer Feedback</h1>
              <div className='Bottom'>
            <Carousel responsive={responsive}>
            {
                data.map((singleItem)=>{
                    return <div className='card'>{singleItem}</div>
                })
            }
            <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
            </Carousel>
            </div>
            </div>
        
  )
}

export default Bottomcomp
