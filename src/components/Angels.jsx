import React from 'react'
import Ellipse from "../assets/Ellipse 36.svg";
import Angel from "../assets/angels.svg";
import Icon from "../assets/Icon.svg";
import Union from "../assets/Union.svg";
import Union1 from "../assets/Union1.svg";
import Subtract from "../assets/Subtract.svg";
import Subtract1 from "../assets/Subtract1.svg";
import Subtract2 from "../assets/Subtract2.svg";
import Subtract3 from "../assets/Subtract3.svg";
import Vector from "../assets/Vector.svg";
import Rectangle from "../assets/Rectangle.svg";

export default function Angels() {
  return (
        <div className="profile-details">
            
            <div className="profile-img">
                <img src={Ellipse} alt="" />
            </div>

            {/* details below */}
            <div className="abt-me">

                <div className="name-flex">
                    <h2>Theresa Ubong</h2>
                    <img src={Angel} alt="" />
                </div>
                <p>Live is to be lived now; not yesterday, not tomorrow but today! Let’s help others make this a reality, please.</p>
                <div className="location-date">
                    <div>
                        <img src={Union} alt="" /> Lagos, Nigeria
                    </div>
                    <div>
                        <img src={Union1} alt="" /> Joined May, 2023
                    </div>
                </div>

                {/* social icons */}
                <div className="social-icons">
                    <a href=""><img src={Subtract} alt="" /></a>
                    <a href=""><img src={Subtract1} alt="" /></a>
                    <a href=""><img src={Subtract2} alt="" /></a>
                    <a href=""><img src={Subtract3} alt="" /></a>
                </div>

                {/* Accomplishments */}
                <div className="accomplishments">
                    <div>
                        <span>10k</span>
                        <p>Views</p>
                    </div>
                    <div>
                        <span>11+</span>
                        <p>Projects</p>
                    </div>
                    <div>
                        <span>0</span>
                        <p>Proposed Projects</p>
                    </div>
                </div>
            </div>
            

            {/* Suspend, Delete and Messages */}
            <div className="operators">
                <div className="operations">Suspend</div>
                <div className="operations">Delete</div>
                <div className="operations">
                    <img src={Vector} alt="" />
                    <span>Message</span>
                </div>
            </div>

            {/* Uploads */}
            <div className="uploads">
                <img src={Rectangle} alt="" />
            </div>
        </div>
  )
}
