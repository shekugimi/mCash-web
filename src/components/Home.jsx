import React from 'react'
import "./Home.css"
import { Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import img1 from "./assets/challange.png"
import img2 from "./assets/reward.png"
import img3 from "./assets/spin.png"

import { BsListCheck, BsLightningFill, BsFillAwardFill, BsGift } from 'react-icons/bs'



const Home = () => {
  return (
    <>
      <Box pt="80px">
        <MyCarousel />
      </Box>
      <div className="card-container">
        <div className="card-design">
          <div>
            <p className='card-head'>Task Offers</p>
            <p className='card-para'>Complete tasks to get coins!</p>
          </div>
          <div>
            <BsListCheck className='card-sym' />
          </div>
        </div>

        <div className="card-design">
          <div>
            <p className='card-head'>Buzz Offers</p>
            <p className='card-para'>Complete buzz offers to get coins!</p>
          </div>
          <div>
            <BsLightningFill className='card-sym' />
          </div>
        </div>


        <div className="card-design">
          <div>
            <p className='card-head'>Limited Offer</p>
            <p className='card-para'>Complete offers to get coins!</p>
          </div>
          <div>
            <BsListCheck className='card-sym' />
          </div>
        </div>

        <div className="card-design">
          <div>
            <p className='card-head'>Adscend Offer</p>
            <p className='card-para'>Check Adscend offer to get more coins!</p>
          </div>
          <div>
            <BsGift className='card-sym' />
          </div>
        </div>

        <div className="card-design">
          <div>
            <p className='card-head'>Adgate Offer</p>
            <p className='card-para'>Check Adgate offer to get more coins!</p>
          </div>
          <div>
            <BsFillAwardFill className='card-sym' />
          </div>
        </div>



      </div>

    </>
  )
}


const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <div className="carousel-slide">
      <div className="carousel-slide-wrap">
        <div className="left">
          <p className='head2'>Daily Rewards</p>
          <p className='carousel-para'>Log in daily to claim free coins!</p>
          <Button colorScheme={"blue"}>
            <Link to={'/rewards'}>Claim Prize</Link>
          </Button>
        </div>
        <div className="right">
          <img src={img2} alt="reward" />
        </div>
      </div>
    </div>
    <div className="carousel-slide">
      <div className="carousel-slide-wrap">
        <div className="left">
          <p className='head2'>Spin and Win</p>
          <p className='carousel-para'>Spin the wheel of rewards and win big!</p>
          <Button colorScheme={"blue"} >
            <Link to={'/rewards'}>Spin The Wheel</Link>
          </Button>
        </div>
        <div className="right">
          <img src={img3} alt="spin" />
        </div>
      </div>
    </div>
    <div className="carousel-slide">
      <div className="carousel-slide-wrap">
        <div className="left">
          <p className='head2'>Challenges</p>
          <p className='carousel-para'>Complete challenges to earn extra rewards!</p>
          <Button colorScheme={"blue"}>
            <Link to={'/rewards'}>see challenges</Link>
          </Button>
        </div>
        <div className="right">
          <img src={img1} alt="challange" />
        </div>
      </div>
    </div>

  </Carousel>
)



export default Home
