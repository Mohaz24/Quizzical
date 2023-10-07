import React from 'react'
import { Link } from "react-router-dom"
import { BsMusicNote } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdOutlineSportsSoccer } from 'react-icons/md';


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
              src="https://tronixinfo.com/wp-content/uploads/2022/11/pngwing.com_-1024x892.png"
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
              src="https://www.theasknetwork.com/wp-content/uploads/2020/03/contact-us-1.png"
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
              src="https://d37y9b4kfek2hl.cloudfront.net/services/ui-ux-design-services.png"
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
              src="https://cdn.dribbble.com/userupload/5776988/file/original-ebfb65b65da27759fcce8aacb643ae7e.jpeg?resize=400x0"
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
