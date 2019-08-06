import React from 'react'
import websiteIcon from '../assets/images/website-icon.png'

class Skills extends React.Component{
    render(){
        return(
            <section className="section-skills">
                <div className="inner">
                    <header className="major">
                        <h2>Massa libero</h2>
                    </header>
                    <div className="icon-and-text-wrapper">
                        <div className="icon-and-text">
                            <a href="/">
                                <img src={`${websiteIcon}`} alt=''/>
                                <h5>Iteration</h5>
                                <p>Add as many items here as you wish and Gatsby Portfolio Template will iterate through them all.</p>
                            </a>
                        </div>
                        <div className="icon-and-text">
                            <a href="/">
                                <img src={`${websiteIcon}`} alt=''/>
                                <h5>Iteration</h5>
                                <p>Add as many items here as you wish and Gatsby Portfolio Template will iterate through them all.</p>
                            </a>
                        </div>
                        <div className="icon-and-text">
                            <a href="/">
                                <img src={`${websiteIcon}`} alt=''/>
                                <h5>Iteration</h5>
                                <p>Add as many items here as you wish and Gatsby Portfolio Template will iterate through them all.</p>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Skills