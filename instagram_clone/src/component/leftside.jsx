import './leftside.css';
import React from 'react'
import instagramlogo from '../assets/instagramlogo.png'
import home from '../assets/home.png'
import search from '../assets/search.png'
import explore from '../assets/explore.png'
import reels from '../assets/reels.png'
import messagers from '../assets/messagers.png'
import notification from '../assets/notification.png'
import create from '../assets/create.png'
import profile from '../assets/profile.png'
import thread from '../assets/thread.png'
import more from '../assets/more.png'

const Leftside = () => {
  return (
    <div className="leftsidepart">
      <div className="logopart">
        <img className='logoimg'src={instagramlogo} alt='instagram' />
      </div>
      <div className="navlinkpart">
        <div className="navlink">
           <img className='homelogo' src={home} alt='home'/>
           <div className="navname">Home</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}}>
        <div className="navlink" >
           <img className='homelogo' src={search} alt='search' />
           <div className="navname" >search</div>
        </div>
      </div>
      <div className="navlinkpart"style={{marginTop:'0px',paddingTop:'25px'}} >
        <div className="navlink" >
           <img className='homelogo' src={explore} alt='explore' />
           <div className="navname">explore</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}} >
        <div className="navlink" >
           <img className='homelogo' src={reels} alt='reels' />
           <div className="navname">Reels</div>
        </div>
      </div>
      <div className="navlinkpart"style={{marginTop:'0px',paddingTop:'25px'}} >
        <div className="navlink" >
           <img className='homelogo' src={messagers} alt='messagers'  />
           <div className="navname">Messagers</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}}>
        <div className="navlink" >
           <img className='homelogo' src={notification} alt='notification'  />
           <div className="navname">Notification</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}} >
        <div className="navlink" >
           <img className='homelogo' src={create} alt='create'   />
           <div className="navname">Create</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}}>
        <div className="navlink" >
           <img className='homelogo' src={profile} alt='profile'  />
           <div className="navname">Profile</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'55px'}}>
        <div className="navlink" >
           <img className='homelogo' src={thread} alt='thread'    ></img>
           <div className="navname">Thread</div>
        </div>
      </div>
      <div className="navlinkpart" style={{marginTop:'0px',paddingTop:'25px'}}>
        <div className="navlink" >
           <img className='homelogo' src={more} alt='more'  />
           <div className="navname">More</div>
        </div>
      </div>
    </div>
  )
}

export default Leftside