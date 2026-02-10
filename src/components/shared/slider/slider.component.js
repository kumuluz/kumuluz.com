import React, {Component} from "react";
import { withTranslation } from "react-i18next";
import PropType from "prop-types";
import anime from "animejs";
import {Row, Col} from "reactstrap";

import "./slider.component.scss";
import {determineScreenWidth, MOBILE_MEDIA} from "../../layout/common";

class SliderComponent extends Component {

    static propTypes = {
        i18n: PropType.object,
        benefits: PropType.array
    };

    constructor(props) {
        super(props);
        const benefits = props.benefits || [];
        this.state = {
            lang: props.i18n.language,
            benefits: benefits.length > 0 ? [
                benefits[benefits.length - 1],
                ...benefits.slice(),
                ...benefits.slice(0, benefits.length - 1)
            ] : []
        };
        this.animating = false;
    }

    // eslint-disable-next-line no-unused-vars
    UNSAFE_componentWillReceiveProps(nextProps, nextCtx) {
        if (nextProps.i18n.language !== this.state.lang) {
            const benefits = nextProps.benefits || [];
            this.setState(() => {
                return {
                    lang: nextProps.i18n.language,
                    benefits: benefits.length > 0 ? [
                        benefits[benefits.length - 1],
                        ...benefits.slice(),
                        ...benefits.slice(0, benefits.length - 1)
                    ] : []
                };
            });
        }
    }

    returnShiftFor() {
        const screenSize = determineScreenWidth();
        if (screenSize <= MOBILE_MEDIA) {
            return screenSize;
        }
        return 420;
    }

    moveLeft() {
        if (typeof window === "undefined" || typeof anime === "undefined" || !anime) return;
        
        const benefitsElement = document.querySelector(".benefits");
        if (!benefitsElement) return;
        
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        
        try {
            const moveLeftAnimation = anime({
                targets: ".benefits",
                translateX: `-=${shiftFor}`,
                duration: 250,
                easing: "linear"
            });
            
            if (moveLeftAnimation && moveLeftAnimation.finished) {
                moveLeftAnimation.finished.then(() => {
                    this.setState(state => {
                        const {benefits} = state;

                        let modifiedBenefits = [...benefits.slice(1), benefits[0]];

                        if (typeof window !== "undefined" && typeof anime !== "undefined" && anime) {
                            try {
                                anime({
                                    targets: ".benefits",
                                    translateX: 0,
                                    duration: 0
                                });
                            } catch (e) {
                                console.error("Anime reset error:", e);
                            }
                        }

                        this.animating = false;
                        return {
                            ...state,
                            benefits: modifiedBenefits
                        };
                    });
                }).catch(() => {
                    this.animating = false;
                });
            } else {
                this.animating = false;
            }
        } catch (error) {
            console.error("Anime error:", error);
            this.animating = false;
        }
    }

    moveRight() {
        if (typeof window === "undefined" || typeof anime === "undefined" || !anime) return;
        
        const benefitsElement = document.querySelector(".benefits");
        if (!benefitsElement) return;
        
        const shiftFor = `${this.returnShiftFor()}`;
        if (this.animating) return;
        this.animating = true;
        
        try {
            const moveLeftAnimation = anime({
                targets: ".benefits",
                translateX: `+=${shiftFor}`,
                duration: 250,
                easing: "linear"
            });
            
            if (moveLeftAnimation && moveLeftAnimation.finished) {
                moveLeftAnimation.finished.then(() => {
                    this.setState(state => {
                        const {benefits} = state;

                        let modifiedBenefits = [benefits[benefits.length - 1], ...benefits.slice(0, benefits.length - 1)];

                        if (typeof window !== "undefined" && typeof anime !== "undefined" && anime) {
                            try {
                                anime({
                                    targets: ".benefits",
                                    translateX: 0,
                                    duration: 0
                                });
                            } catch (e) {
                                console.error("Anime reset error:", e);
                            }
                        }

                        this.animating = false;
                        return {
                            ...state,
                            benefits: modifiedBenefits
                        };
                    });
                }).catch(() => {
                    this.animating = false;
                });
            } else {
                this.animating = false;
            }
        } catch (error) {
            console.error("Anime error:", error);
            this.animating = false;
        }
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

        if (!benefits || benefits.length === 0) {
            return null;
        }

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
                    <Col xs="9 my-5" style={{overflow: "hidden"}} className="scroller-content">
                        <div className="benefits" style={this.returnBenefitsStyle()}>
                            {benefits.map((benefit, i) => this.renderBenefit(benefit, i))}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default withTranslation()(SliderComponent);