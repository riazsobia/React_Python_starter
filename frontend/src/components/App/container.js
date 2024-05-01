import React, { Component } from 'react';
import App from "./presenter";

// const Container = props => <App {...props} />;
class Container extends Component {
    render(){
        return (
            <App />
        )
    }
}

export default Container
