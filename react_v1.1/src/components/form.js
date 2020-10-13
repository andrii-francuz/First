import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getMethod}>
                <input type="text" name="city" placeholder="Your city"/>
                <button>Go!</button>
                <p>All in console</p>
            </form>
        );
    }
}

export default Form;