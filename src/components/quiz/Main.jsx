import React from 'react'
import { Link } from "react-router-dom"
import { BsMusicNote } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import general from '../../assets/general.png'
import music from '../../assets/music.png'
import entertainment from '../../assets/entertainment.png'
import sports from '../../assets/sports.png'


export default function Main() {
  return (
    <div className="cards">
      <div className="cards-img">
        <Link 
        to="/general"
        >
          <h2> General Knowledge <CgNotes className="icons" /></h2>
          <div className="card-top">
            <img
              src={general}
              alt="general knowlege"
              width="250px" />
          </div>
          <div className="card-bottom">
            <p>Category: <span>General Knowledge</span></p>
            <p>Type: <span>Multiple</span> </p>
            <p>Difficulty: <span>Easy</span></p>
          </div>
        </Link>
      </div>
      <div className="cards-img">
        <Link to="/music">
          <h2> Music <BsMusicNote className="icons" /></h2>
          <div className="card-top">
            <img
              src={music}
              alt="music"
              width="295px" />
          </div>
          <div className="card-bottom">
            <p>Category:  <span>Music</span></p>
            <p>Type: <span>Multiple</span> </p>
            <p>Difficulty: <span>Medium</span></p>
          </div>
        </Link>
      </div>

      <div className="cards-img">
        <Link to="/entertainment">
          <h2> Entertainments  <IoShareSocialOutline className="icons" /></h2>
          <div className="card-top">
            <img
              src={entertainment}
              alt="entertainment"
              width="280px" />
          </div>
          <div className="card-bottom">
            <p>Category:  <span>Entertainments</span></p>
            <p>Type: <span>True & False</span> </p>
            <p>Difficulty: <span>Hard</span></p>
          </div>
        </Link>
      </div>

      <div className="cards-img">
        <Link to="/sport">
          <h2> Sports <MdOutlineSportsSoccer className="icons" /> </h2>
          <div className="card-top">
            <img
              src={sports}
              alt="sports"
              width="250px" />
          </div>
          <div className="card-bottom">
            <p>Category: <span>Sports</span></p>
            <p>Type: <span>Multiple</span> </p>
            <p>Difficulty: <span>Hard</span></p>
          </div>
        </Link>
      </div>
    </div>
  )
}
