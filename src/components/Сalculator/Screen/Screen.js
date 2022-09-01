import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    render() {
        return <div className="Screen">{this.props.value.length === 0 ? 0 : this.props.value}</div>;
    }
}

export default Screen;