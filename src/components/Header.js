import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import MenuLinks from './MenuLinks'

class Header extends React.Component{
    static propTypes ={
        onToggleMenu: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {
            scrollPositionY: 0,
            scroll: "nav_transparent"
        }
        
    }
    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
    }
    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
    }
    handleScroll = () => {
        // + is unary operator, same as Number(window.scrollY)
        const scrollPositionY = +window.scrollY
        this.setState({ scrollPositionY })
        
        
        let scrollPosition = this.state.scrollPositionY; 
        if(scrollPosition === 0){
            this.setState({ scroll:"nav-transparent" })
        }else{
            this.setState({ scroll:"nav-colored" })
        }
    }
    render(){
        
        return(
            <header id="header" className={"alt " +this.state.scroll}>
                
                <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
                <nav className="nav-desktop">
                    <MenuLinks/>
                    <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;"></a>
                </nav>
            </header>
            
        )
    }
}

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
}
  

export default Header
