import React from 'react'
import './rightside.css'
import sivani from '../assets/sivani.jpeg'
import Elina  from '../assets/Elina.jpg'
import babusan  from '../assets/babusan.jpg'
import aliabhatt  from '../assets/aliabhatt.jpeg'
import archita  from '../assets/archita.jpeg'

const Rightside = () => {
  return (
    <div className="rightsidehome">
      <div className="toprofilrrightside">
        <div className="leftrightprofile">
          <div className="imagerightside">
            <img className='imgrightsideprofile' src={sivani} alt="sivani" />
          </div>
          <div className="usernameblock">
            <div className="usernamerightside">_sivani@03_</div>
            <div className="userfullname">Sivani Sarangi</div>
          </div>
        </div>
        <div className="switchbtn">
          Switch
        </div>
      </div>
      <div className="bottomrightside">
        <div className="suggestedblock">
          <div className="suggestedforu">Suggested for you</div>
          <div className="seeall">See All</div>
        </div>
        <div className="followblock">
        <div className="toprofilrrightsidebottomprofile">
        <div className="leftrightprofile">
          <div className="imagerightside">
            <img className='imgrightsideprofile' src={aliabhatt} alt="aliabhatt" />
          </div>
          <div className="usernameblock">
            <div className="usernamerightside">_aliabhaat_</div>
            <div className="userfullname">New to instagram</div>
          </div>
        </div>
        <div className="switchbtn">
          Follow
        </div>
      </div>
      <div className="toprofilrrightsidebottomprofile">
        <div className="leftrightprofile">
          <div className="imagerightside">
            <img className='imgrightsideprofile' src={archita} alt="archita" />
          </div>
          <div className="usernameblock">
            <div className="usernamerightside">architadas@1</div>
            <div className="userfullname">Archita RoutRay</div>
          </div>
        </div>
        <div className="switchbtn">
          Follow
        </div>
      </div>
      <div className="toprofilrrightsidebottomprofile">
        <div className="leftrightprofile">
          <div className="imagerightside">
            <img className='imgrightsideprofile' src={Elina} alt="elina" />
          </div>
          <div className="usernameblock">
            <div className="usernamerightside">@3elina_12samt</div>
            <div className="userfullname">Elina Samantaray</div>
          </div>
        </div>
        <div className="switchbtn">
          Follow
        </div>
      </div>
      <div className="toprofilrrightsidebottomprofile">
        <div className="leftrightprofile">
          <div className="imagerightside">
            <img className='imgrightsideprofile' src={babusan} alt="babusan" />
          </div>
          <div className="usernameblock">
            <div className="usernamerightside">babumohanty</div>
            <div className="userfullname">Babusan Mohanty</div>
          </div>
        </div>
        <div className="switchbtn">
          Follow
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Rightside