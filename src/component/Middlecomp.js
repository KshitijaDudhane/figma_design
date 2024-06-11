
import React from 'react'
import Card from './Card1';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'

const Middlecomp = () => {
  return (
      <div className='Middlecomp'>
        <h1 className='mh1'>Our Key Value</h1>
        <div className='card1'>
              <Card
            imageurl = {logo1}
            title  = 'Get noticed by right costomers'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa.  "
          />
          <Card
            imageurl = {logo2}
            title = 'Get noticed by right costomers'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa.  "
          />
          <Card
            imageurl = {logo3}
            title = 'Increase chances of deal closure'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. "
          />
      </div>
      <div className='card1'>
              <Card
            imageurl = {logo4}
            title = 'Profile visitor analytics'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. "
          />
          <Card
            imageurl = {logo5}
            title = 'Technology trends of industry'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. "
          />
          <Card
            imageurl = {logo6}
            title = 'Search analytics'
            body = "Lorem ipsum dolor sit amet, all consectetuer adipiscing elit. allAenean commodo ligula eget dolor. Aenean massa. "
          />
      </div>
    </div>
    
    
  )
}

export default Middlecomp
