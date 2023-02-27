import React from 'react'
import './styles/about.css'
import './styles/mediaqueries.css'


function About() {



    return (
        <section className="about" id="about">
            <div className="about-content">

                <h2 className="heading">Introducing Myself : <span>A Brief Overview </span></h2>
                <div className="skills">
                    <p>At the end of 2022, I began establishing my online presence to showcase my self-taught skills in web development and design.</p>
                    <p>I am proficient in HTML, CSS, and JavaScript, with daily expanding experience in building web applications using <span>React, Redux, Next.js, Bootstrap.</span></p>
                    <p>I have familiarity with server-side web development using <span>Node.js</span> and <span>Firebase</span>, with an understanding of REST APIs and HTTP requests using <span>Postman.</span></p>
                    <p>I am also great in using <span>GitHub</span> for version control and documentation.</p>
                    <p>I have a solid foundation in web design tools such as <span>Figma</span>, <span>Adobe Xd</span>, <span>Lightroom</span> and <span>Photoshop</span>.</p>
                </div>
                <div className="about-img">
                    <img src={require('../assets/images/profile.png')} alt="" />
                </div>
                {/* <div className="myself">
                    <p> I am a person of many interests and hobbies.
                        When I'm not busy coding or gaming, you can often find me enjoying the great outdoors.
                        Whether it's practicing archery, hiking, camping, or kayaking,
                        I love spending time in nature and enjoying the beauty of our world.</p>
                    <p> Last but not least, I cannot forget to mention my furry companion,
                        a beautiful white golden retriever.
                        Together, we explore the great outdoors, enjoying the fresh air and each other's company.
                        He's is my loyal companion and my best friend.</p>
                </div> */}

            </div>
        </section >
    )
}

export default About