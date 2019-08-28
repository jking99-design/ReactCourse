import React, {Component} from 'react';
import Coin from './Coin';
import {choice} from './helpers';

class Flips extends Component {

    static defaultProps = {
        coins: [
            {side: 'heads', url: 'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', url: 'https://tinyurl.com/react-coin-tails-jpg'}
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            heads: 0,
            tails: 0,
            coin: null
        }
        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                flips: st.flips + 1,
                heads: st.heads + (newCoin.side === 'heads' ? 1 : 0),
                tails: st.tails + (newCoin.side === 'tails' ? 1 : 0),
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>FLIP ME!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} and {this.state.tails}</p>
            </div>
        )
    }
}

export default Flips;