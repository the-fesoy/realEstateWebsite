import React from 'react';
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
const Hero = () => {

    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">
                <div className="flexColStart hero-left">
                    <div className='hero-title'>
                        <div className="orange-circle"/>
                        <h1>
                            Discover <br/>Most Suitable<br/> Property
                        </h1>

                    </div>
                    <div className="flexColStart hero-des">
                        <span className='SecondaryText'>
                            Find a variety of properties that suit you very easily
                        </span>
                        <span className='SecondaryText'>
                            Forget all difficulties in finding a residence for you
                        </span>
                        <div className="flexCenter search-bar">
                            <HiLocationMarker color="var(--blue)" size={25}/>
                            <input type='text'/>
                            <button className="button">Search</button>
                        </div>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='SecondaryText'>
                                Premium Products 
                            </span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='SecondaryText'>
                                :) customers
                            </span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='SecondaryText'>
                                awards Easy
                            </span>
                        </div>
                    </div>
                </div>
                <div className='hero-right flexCenter'>
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero;