import React from 'react'
import { Link } from 'gatsby'

class About extends React.Component{
    render(){
        return(
            <section id="section-about">
                <div className="inner">
                    <header className="major">
                        <h2>Massa libero</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                    <ul className="actions">
                        <li><Link to="/landing" className="button next">Get Started</Link></li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About