import React from 'react'
import { Link } from 'gatsby'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'


class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projectsList:[
                {
                    title:'Project 1',
                    description: 'Description of project 1',
                    image: pic01
                },
                {
                    title:'Project 2',
                    description: 'Description of project 2',
                    image: pic02
                },
                {
                    title:'Project 3',
                    description: 'Description of project 3',
                    image: pic03
                },
                {
                    title:'Project 4',
                    description: 'Description of project 4',
                    image: pic04
                },
                {
                    title:'Project 5',
                    description: 'Description of project 5',
                    image: pic05
                },
                {
                    title:'Project 6',
                    description: 'Description of project 6',
                    image: pic06
                },
                {
                    title:'Project 7',
                    description: 'Description of project 7',
                    image: pic01
                },
                {
                    title:'Project 8',
                    description: 'Description of project 8',
                    image: pic01
                }
            ]
        }
    }
    render(){
        const projects = this.state.projectsList.map(
            (project, key) => 
            <article key={key} style={{backgroundImage: `url(${project.image})`}}>
                <header className="major">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </header>
                <Link to="/landing" className="link primary"></Link>
            </article>
        ); 
        //console.log(this.state.projectsList);
        return(
            <section id="section-projects">
                <div className="inner">
                    
                    <header className="major">
                        <h2>Massa libero</h2>
                    </header>
                    <div className="tiles">
                        {projects}
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Projects