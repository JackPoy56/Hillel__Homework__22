import React from 'react';
import './Numbers.css';

class Numbers extends React.Component {
    render() {
        return <div onClick={this.props.onClick} className="Numbers">{this.props.num}</div>;
    }
}

export default Numbers;