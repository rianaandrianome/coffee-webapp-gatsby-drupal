import React from "react"

class CoffeeDetail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(window.location);
        return(
            <div>
                <p>Coffee detail</p>
                <p></p>
            </div>
        );
    }
}

export default CoffeeDetail