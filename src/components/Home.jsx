import React from 'react';
import vg from "../assets/2.webp";
import { AiOutlineAlert, AiFillCustomerService} from "react-icons/ai"
import { TbActivity } from "react-icons/tb"
import { MdFeedback } from "react-icons/md";


function Home() {
  return (
    <>
        <div className='home' id="home">
        <main>
            <h1>Inspiration</h1>
            <p>Somewhere, something incredible is waiting to be known</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
            “Good design’s not about what medium you’re working in. 
            It’s about thinking hard about what you want to do and what you have to work with before you start.”
            </p>
        </div>
    </div>


    <div className="home3" id="about">
        <div>
            <h1>about</h1>
            <p>
            Hello everyone, my full name is Amit kumar Roy, and I am from Kolkata. 
            I completed my higher studies in Kolkata, where I pursued a B.Tech degree from Meghnad Saha Institute of Technology. 
            I found myself interested in electronics and communication as well, making this disciplines the perfect choice for me. Apart from studies, I would introduce myself as creative, responsible, and attentive web & graphic designer.
            I believe that a skill is mightier than a sword, and that is why I pursued this field to realize my vision of making an impact on society through my skills. A graphic designer ensures that the consumer understands the objective of design effectively. 
            Secondly, as a designer, communication across peers and teams is important so that all stakeholders can provide input in the creation of design and are aware of its development. 
            If I had to describe myself in one word, it would be dynamic as I accept challenges with a positive spirit, and I am always eager to learn.
            </p>
        </div>
    </div>
    <div className="home4" id="strength">
        <div>
            <h1>Strength</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <TbActivity />
                    <p>Activity</p>
                </div>
                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiOutlineAlert />
                    <p>Ideas</p>
                </div>
                <div style={{
                    animationDelay: "0.1s",
                }}>
                    <MdFeedback />
                    <p>Feebdback</p>
                </div>
                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillCustomerService />
                    <p>Customer Service</p>
                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home