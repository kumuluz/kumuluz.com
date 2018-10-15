import React, {Component} from "react";
import PropType from "prop-types";
import anime from "animejs";
import {Row, Col} from 'reactstrap';

import "./slider.component.scss";
import {determineScreenWidth, MOBILE_MEDIA} from "../../../layouts/common";

export class SliderComponent extends Component {

    static propTypes = {
      benefits: PropType.array
    };

    constructor(props) {
        super(props);
        this.state = {
            benefits: [
                props.benefits[props.benefits.length - 1],
                ...props.benefits.slice(),
                ...props.benefits.slice(0, props.benefits.length - 1)
            ]
        };
        this.animating = false;
    }

    returnShiftFor() {
        const screenSize = determineScreenWidth();
        if (screenSize <= MOBILE_MEDIA) {
            return screenSize;
        }
        return 420;
    }

    moveLeft() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `-=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {benefits} = state;

                let modifiedBenefits = [...benefits.slice(1), ...benefits[0]];

                anime({
                    targets: '.benefits',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });

                this.animating = false;
                return {
                    ...state,
                    benefits: modifiedBenefits
                };
            });
        });
    }

    moveRight() {
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        const moveLeftAnimation = anime({
            targets: '.benefits',
            translateX: `+=${shiftFor}`,
            duration: 250,
            elasticity: 0,
            easing: 'easeInQuad'
        });
        moveLeftAnimation.finished.then(() => {
            this.setState(state => {
                const {benefits} = state;

                let modifiedBenefits = [...benefits[benefits.length - 1], ...benefits.slice(0, benefits.length - 1)];

                anime({
                    targets: '.benefits',
                    translateX: 0,
                    easing: 'none',
                    duration: 0
                });

                this.animating = false;
                return {
                    ...state,
                    benefits: modifiedBenefits
                };
            });
        });
    }

    renderBenefit(benefit, i) {
        return (
            (benefit.content && <div key={i}>{benefit.content}</div>) || (
                <div key={i} className="benefit">
                    <img src={benefit.icon}/>
                    <h4>{benefit.title}</h4>
                    <p className="p-small" dangerouslySetInnerHTML={{__html: benefit.description}}/>
                </div>
            )
        );
    }

    returnBenefitsStyle() {
        return {
            marginLeft: `-${this.returnShiftFor()}px`
        };
    }

    render() {
        const {benefits} = this.state;

        return (
            <div className="km-slider-component">
                <Row className="scroller-container">
                    <Col xs="1 my-5" className="scroller-buttons">
                        <div className="nav-buttons">
                            <button onClick={() => this.moveLeft()}>
                                <p>&#60;</p>
                            </button>
                            <br/>
                            <button onClick={() => this.moveRight()}>
                                <p>&#62;</p>
                            </button>
                        </div>
                    </Col>
                    <Col xs="9 my-5" style={{overflow: 'hidden'}} className="scroller-content">
                        <div className="benefits" style={this.returnBenefitsStyle()}>
                            {benefits.map((benefit, i) => this.renderBenefit(benefit, i))}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
