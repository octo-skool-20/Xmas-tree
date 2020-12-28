import React from "react";
import star from "../assets/star.svg"
import Reward from 'react-rewards';
import miwe from './../assets/photos/miwe.png';

export default class Star extends React.Component {

    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
        this.state = {
            toDisplay: star
        }
      }
    clickMe() {
    this.reward.rewardMe();
    }

    render() {
        return (
            <div id="aStarIsBorn" style={{ cursor: 'pointer' }}>
                <Reward
                    ref={(ref) => { this.reward = ref }}
                    type='confetti'
                    config={{
                        lifetime: 400,
                        spread: 100,
                        springAnimation: true,
                        elementCount: 70,
                        elementSize: 16,
                      }}
                >
                        <img src={this.state.toDisplay} alt="star svg" id="img_star"
                             onClick={
                                 () => {this.clickMe();
                                 this.props.clickMeBis();}
                             }
                             onMouseOver={() => this.setState({toDisplay: miwe})}
                             onMouseOut={() => this.setState({toDisplay: star})}
                        />
                </Reward>
            </div>

        )
    }
}
