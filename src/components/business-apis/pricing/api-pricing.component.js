import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./api-pricing.component.scss";
import { ArrowDividerComponent } from "../../shared/arrow-divider/arrow-divider.component";
import PaymentComponent from "../payment/payment.component";

@translate("business-apis")
export class ApiPricingComponent extends Component {

    static propTypes = {
        t: PropType.func,
        price: PropType.string,
        pricePer: PropType.string,
        desc: PropType.string,
        itemDesc: PropType.string
    };


    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {

        this.setState({ showModal: false });
    }

    render() {
        const { t, price, pricePer, desc, itemDesc } = this.props;

        return (
            <div className="km-api-pricing-component">
                <div className="container-fluid dark-blue-section">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"white"} corner={1}/>
                        </div>
                        <div className="col-9 col-xl-6 mt-5">
                            <h2>{t("ways.title")}</h2>
                            <div className="ways-list">
                                <div className="left-way way">
                                    <div>
                                        <h3>{t("ways.left-way.title")}</h3>
                                        <p>{t("ways.left-way.para")}</p>
                                    </div>
                                    <div>
                                        <span>{t("ways.left-way.button")}</span>
                                    </div>
                                </div>
                                <div className="way center-way">
                                    <div>
                                        <h3 className="center-way-title">{price}&#160;€</h3>
                                        <p>{pricePer}</p>
                                        <p>{desc}</p>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary center-way-button" onClick={() => this.setState({ showModal: true })}>{t("ways.center-way.button-buy")}</button>
                                    </div>
                                </div>
                                <div className="right-way way">
                                    <div>
                                        <h3>{t("ways.right-way.title")}</h3>
                                        <p>{t("ways.right-way.para1")}</p>
                                        <p>{t("ways.right-way.para2")}</p>
                                    </div>
                                    <div>
                                        <span>{t("ways.right-way.button")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-9 col-xl-6 text-center mt-5 learn-more-link">*/}
                        {/*<Link to={"/"}>*/}
                        {/*{t("ways.learn-more.link")}*/}
                        {/*</Link>*/}
                        {/*&#160;{t("ways.learn-more.text")}*/}
                        {/*</div>*/}
                        <div className="col-10 p-0 mt-5">
                            <ArrowDividerComponent theme={"white"} corner={3}/>
                        </div>
                    </div>
                </div>


                <PaymentComponent
                    showModal={this.state.showModal}
                    onCloseModal={this.closeModal}
                    price={price}
                    desc={itemDesc}
                />

            </div>
        );
    }
}
