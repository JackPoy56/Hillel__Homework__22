import React from 'react';
import './MathItem.css';

class MathItem extends React.Component {
    render() {
        return <div onClick={this.props.onClick} className="MathItem">{this.props.operation}</div>
    }
}

export default MathItem;