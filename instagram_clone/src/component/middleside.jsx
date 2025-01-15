import React from 'react'
import './middleside.css'
import sarukhan  from '../assets/sarukhan.jpg'
import aliabhatt  from '../assets/aliabhatt.jpeg'
import sradha  from '../assets/sradha.jpg'
import babusan  from '../assets/babusan.jpg'
import Elina  from '../assets/Elina.jpg'
import archita  from '../assets/archita.jpeg'
import dipika  from '../assets/dipika.jpeg'
import sivani from '../assets/sivani.jpeg'
import bhoomika from '../assets/bhoomika.jpeg'
import like from '../assets/like.jpg'
import comment from '../assets/comment.png'
import share from '../assets/share.png'
import saved from '../assets/saved.png'
import instagramlogo from '../assets/instagramlogo.png'

const Middleside = () => {
  return (
    <div className="middlehomeside">
       <div className="middlelogo">
        <div className="instalogo">
          <img src={instagramlogo} alt="instalogo" style={{height:'80px',width:'120px'}}/>
        </div>
      </div> 
      <div className="story">

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={sarukhan} alt="sarukhan" />
          </div>
          <div className="storyprofilename">Sharu_khann</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={sradha} alt="sradha" />
          </div>
          <div className="storyprofilename">Sradhakappor</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={aliabhatt} alt="aliabhatt" />
          </div>
          <div className="storyprofilename">03alia_bhat</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={babusan} alt="babusan" />
          </div>
          <div className="storyprofilename">@0babusan</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={Elina} alt="Elina" />
          </div>
          <div className="storyprofilename">Elinasamantaray</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={archita} alt="archita" />
          </div>
          <div className="storyprofilename">architamohanty</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={dipika} alt="dipika" />
          </div>
          <div className="storyprofilename">@1_03dipika</div>
        </div>
        <div className="storyparticular">
          <div className="storyimg">
            <img  className='statusimg'  src={sivani} alt="sivani" />
          </div>
          <div className="storyprofilename">Sivanisarangi</div>
        </div>

        <div className="storyparticular">
          <div className="storyimg">
          <img  className='statusimg'  src={bhoomika} alt="bhoomika" /></div>
          <div className="storyprofilename">i_ambhoomika</div>
        </div>
      </div>

{/* post section */ }
        <div className="postsection">
          <div className="post">
            <div className="postinfo">
              <img className='postinfoimg' src={bhoomika} alt="bhoomika" />
              <div className="postinfousername">i_ambhoomika</div>
              <div className="timing">.36min</div>
            </div>
            <div className="postimg">
              <img  className='postimg'src={bhoomika} alt="bhoomika" />
            </div>
            <div className="iconsblock">
              <div className="lefticon">
              <img src={like} alt="like" style={{height:'30px', width:'30px'}} />
              <img src={comment} alt="comment" style={{height:'30px', width:'30px'}} />
              <img src={share} alt="share" style={{height:'25px', width:'30px',marginTop:'5px'}} />
              </div>
              <div>
              <img src={saved} alt="saved" style={{height:'35px', width:'33px'}} />
              </div>
            </div>
            <div className="likesection">
              <div className="imageslike">
              <img  className='likeimg'src={sradha} alt="sradha" />
              <img  className='likeimg2'src={archita} alt="archita" />
              </div>
              <div className="nooflikes">112,321,67 likes</div>
            </div>
            <div className="postabout">
              <div className="postaboutname">i_ambhoomika</div>
              <div className="infocomment">Happy birthday to u....more</div>
            </div>
            <div className="noofcomments">view all 467 comments </div>
            <div className="addcomment">Add a comment....</div>
          </div>


          <div className="post">
            <div className="postinfo">
              <img className='postinfoimg' src={babusan} alt="babusan" />
              <div className="postinfousername">babusanmohanty</div>
              <div className="timing">.36min</div>
            </div>
            <div className="postimg">
              <img  className='postimg'src={babusan} alt="babusan" />
            </div>
            <div className="iconsblock">
              <div className="lefticon">
              <img src={like} alt="like" style={{height:'30px', width:'30px'}} />
              <img src={comment} alt="comment" style={{height:'30px', width:'30px'}} />
              <img src={share} alt="share" style={{height:'25px', width:'30px',marginTop:'5px'}} />
              </div>
              <div>
              <img src={saved} alt="saved" style={{height:'35px', width:'33px'}} />
              </div>
            </div>
            <div className="likesection">
              <div className="imageslike">
              <img  className='likeimg'src={sradha} alt="sradha" />
              <img  className='likeimg2'src={archita} alt="archita" />
              </div>
              <div className="nooflikes">112,321,67 likes</div>
            </div>
            <div className="postabout">
              <div className="postaboutname">babusanmohanty</div>
              <div className="infocomment">new movie released 2023....more</div>
            </div>
            <div className="noofcomments">view all 467 comments </div>
            <div className="addcomment">Add a comment....</div>
          </div>


          <div className="post">
            <div className="postinfo">
              <img className='postinfoimg' src={dipika} alt="dipika" />
              <div className="postinfousername">@03dipika</div>
              <div className="timing">.12min</div>
            </div>
            <div className="postimg">
              <img  className='postimg'src={dipika} alt="dipika" />
            </div>
            <div className="iconsblock">
              <div className="lefticon">
              <img src={like} alt="like" style={{height:'30px', width:'30px'}} />
              <img src={comment} alt="comment" style={{height:'30px', width:'30px'}} />
              <img src={share} alt="share" style={{height:'25px', width:'30px',marginTop:'5px'}} />
              </div>
              <div>
              <img src={saved} alt="saved" style={{height:'35px', width:'33px'}} />
              </div>
            </div>
            <div className="likesection">
              <div className="imageslike">
              <img  className='likeimg'src={sradha} alt="sradha" />
              <img  className='likeimg2'src={archita} alt="archita" />
              </div>
              <div className="nooflikes">112,321,67 likes</div>
            </div>
            <div className="postabout">
              <div className="postaboutname">@3dipika</div>
              <div className="infocomment">Life is more beautiful....more</div>
            </div>
            <div className="noofcomments">view all 467 comments </div>
            <div className="addcomment">Add a comment....</div>
          </div>
        </div>
    </div>
  )
}

export default Middleside