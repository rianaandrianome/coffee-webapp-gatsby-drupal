import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


class Menu extends React.Component{
    static propType={
        onToggleMenu: PropTypes.func
    }

    constructor(props){
        super(props)
    }
    render(){
        return(
            <nav id="menu">
                <div className="inner">
                    <ul className="links">
                        <li><Link onClick={this.props.onToggleMenu} to="/">Home</Link></li>
                        <li><Link onClick={this.props.onToggleMenu} to="/landing">Landing</Link></li>
                        <li><Link onClick={this.props.onToggleMenu} to="/generic">Generic</Link></li>
                        <li><Link onClick={this.props.onToggleMenu} to="/elements">Elements</Link></li>
                    </ul>
                    <ul className="actions vertical">
                        <li><a href="/" className="button special fit">Get Started</a></li>
                        <li><a href="/" className="button fit">Log In</a></li>
                    </ul>
                </div>
                <a className="close" onClick={this.props.onToggleMenu} href="javascript:;">Close</a>
            </nav>
        );
    }
}

export default Menu

