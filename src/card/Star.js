import React from "react";
import star from "../assets/star.svg"
import Reward from 'react-rewards';

export default class Star extends React.Component {

    constructor(props) {
        super(props);
        this.clickMe = this.clickMe.bind(this);
      }
    clickMe() {
    this.reward.rewardMe();
    }

    render() {
        return (
            <div id="aStarIsBorn">
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
                        <img src={star} alt="star svg" id="img_star" onClick={() => this.clickMe()}/>
                </Reward>
            </div>

        )
    }
}
