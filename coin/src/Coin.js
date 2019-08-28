import React, {Component} from 'react';

class Coin extends Component {
    render() {
        return (
            <div>
                <img src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin;