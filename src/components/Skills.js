import React from 'react'
import SkillsProgressBar from './SkillsProgressBar';

class Skills extends React.Component{
    render(){
        return(
            <section id="section-skills">
                <div className="inner">
                    <header className="major">
                        <h2>Massa libero</h2>
                    </header>
                    <div className="icon-and-text-wrapper">
                        <div className="icon-and-text">
                            <span className="icon fa-bug"></span>
                                <h5>small title</h5>
                                <p>Small description</p>
                        </div>
                        <div className="icon-and-text">
                            <span className="icon fa-code"></span>
                                <h5>small title</h5>
                                <p>Small description</p>
                        </div>
                        <div className="icon-and-text">
                            <span className="icon fa-shield"></span>
                                <h5>small title</h5>
                                <p>Small description</p>
                        </div>
                    </div>
                    
                    <SkillsProgressBar/>
                    
                </div>
            </section>
        );
    }
}

export default Skills