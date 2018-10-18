/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { Component } from "react";
import PropType from "prop-types";
import ReactDOM from "react-dom";
import { translate } from "react-i18next";
import scriptLoader from "react-async-script-loader";
import "./payment.component.scss";

import { CountryDropdown } from "react-country-region-selector";

import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import fire from "./firebase-config";

@translate("business-apis")
class PaymentComponent extends Component {

    static propTypes = {
        t: PropType.func,
        isScriptLoaded: PropType.boolean,
        isScriptLoadSucceed: PropType.boolean,
        onCloseModal: PropType.func,
        showModal: PropType.func,
        price: PropType.string,
        desc: PropType.string
    };

    constructor(props) {
        super(props);

        this.state = {
            showButton: false,
            isDataSaved: false,
            isPaid: false,
            buyerFirstName: "",
            buyerLastName: "",
            buyerEmail: "",
            buyerCompany: "",
            buyerCountry: "",
            buyerPhone: ""
        };



        this.addBuyer = this.addBuyer.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setIsDataSaved = this.setIsDataSaved.bind(this);

        this.loadCountries();
    }

    loadCountries() {

    }

    componentDidMount() {
        const {
            isScriptLoaded,
            isScriptLoadSucceed
        } = this.props;

        if (window !== "undefined") {
            window.React = React;
            window.ReactDOM = ReactDOM;
        }

        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true });
        }
    }

    componentWillReceiveProps(nextProps) {

        const {
            isScriptLoaded,
            isScriptLoadSucceed,
        } = nextProps;

        const isLoadedButWasntLoadedBefore =
            !this.state.showButton &&
            !this.props.isScriptLoaded &&
            isScriptLoaded;

        if (isLoadedButWasntLoadedBefore) {
            if (isScriptLoadSucceed) {
                this.setState({ showButton: true });
            }
        }

    }

    addBuyer(event) {
        event.preventDefault();
        this.setState({ disabled: true });

        var buyersRef = fire.database().ref().child("customers");

        var tempThis = this;
        var buyerId = buyersRef.push({
            firstname: this.state.buyerFirstName,
            lastname: this.state.buyerLastName,
            company: this.state.buyerCompany,
            country: this.state.buyerCountry,
            email: this.state.buyerEmail,
            phone: this.state.buyerPhone
        }, function (error) {
            if (error) {

                tempThis.setState({ disabled: false });
                return;
            }
            tempThis.setIsDataSaved(true);


        }).getKey();

        this.setState({ buyerId: buyerId });

    }

    updateBuyer(buyerId, payerID, paymentID) {
        var buyerRef = fire.database().ref().child("customers").child(buyerId);

        const data = { payerID: payerID, paymentID: paymentID };

        buyerRef.update(data, function (error) {
            if (error) {
                //console.error(error)
                return;
            }


        });

    }


    setIsDataSaved(isSaved) {
        this.setState({ isDataSaved : isSaved });
    }

    closeModal() {
        this.props.onCloseModal();
    }

    handleInputChange(propertyName, event) {
        if (!event.target)
            this.setState({ [propertyName]: event });
        else
            this.setState({[propertyName] : event.target.value });
    }

    render() {
        const {t} = this.props;

        if (!this.props.showModal) {
            return null;
        }

        const { price, desc } = this.props;
        const { showButton, isDataSaved, isPaid } = this.state;

        const ENV = process.env.NODE_ENV === "production"
            ? "production"
            : "sandbox";

        const CLIENT = {
            sandbox: "ARpQMl9o8DutFGsj9yoZuF5M0P5OGdfV-ipg3oIdksQuQWF7fYF805w9DSTFmaBqHb9VWl3lyWhEQafY",
            production: "ART3xDg1OxYJ9yj_QPfxOGfZk953LZwmSOgUW5P4Gzvx1jlW_b-H5zv83mCAc_5QSq-aJg9qt6EK5kuE",
        };

        const payment = () =>
            paypal.rest.payment.create(ENV, CLIENT, {
                transactions: [
                    {
                        amount: {
                            total: Math.round(price*100)/100,
                            currency: "EUR"
                        },
                        description: desc
                    }
                ],
            });

        const onAuthorize = (data, actions) =>
            actions.payment.execute()
                .then(() => {

                    const payment = {
                        paid: true,
                        cancelled: false,
                        payerID: data.payerID,
                        paymentID: data.paymentID,
                        paymentToken: data.paymentToken,
                        returnUrl: data.returnUrl,

                    };

                    if (payment.paid) {
                        this.updateBuyer(this.state.buyerId, data.payerID, data.paymentID);
                        this.setState({ isPaid: true });
                    }
                });



        // eslint-disable-next-line no-unused-vars
        const onError = (error) =>
            console.log();
        // eslint-disable-next-line no-unused-vars
        const onCancel = (data) =>
            console.log();

        return (
            <div className="payment-component">
                <Modal isOpen={true} toggle={this.closeModal}>
                    <ModalHeader toggle={this.closeModal}>{t("payment.purchase-of")} {desc}</ModalHeader>
                    <ModalBody>
                        {!isPaid ?
                            <div>
                                {!isDataSaved ?
                                    <div>
                                        <p>{t("payment.thanks")} {desc}. {t("payment.fill-form")}</p>

                                        <form onSubmit={this.addBuyer}>

                                            <div className="form-group row">

                                                <div className="col">
                                                    <label className="col-form-label" >{t("payment.first-name")}:</label>
                                                    <input type="text" required className="form-control" onChange={this.handleInputChange.bind(this, "buyerFirstName")} value={this.state.buyerFirstName}/>
                                                </div>
                                                <div className="col">
                                                    <label className="col-form-label" >{t("payment.last-name")}:</label>
                                                    <input type="text" required className="form-control" onChange={this.handleInputChange.bind(this, "buyerLastName")} value={this.state.buyerLastName}/>
                                                </div>

                                            </div>

                                            <div className="form-group row">
                                                <label className="col-6 col-form-label" >{t("payment.company")}:</label>
                                                <div className="col-10">
                                                    <input className="form-control" required type="text" onChange={this.handleInputChange.bind(this, "buyerCompany")} value={this.state.buyerCompany} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-6 col-form-label" >{t("payment.country")}:</label>
                                                <div className="col-10">
                                                    <CountryDropdown required className="form-control" onChange={this.handleInputChange.bind(this, "buyerCountry")} value={this.state.buyerCountry} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-6 col-form-label" >{t("payment.email")}:</label>
                                                <div className="col-10">
                                                    <input className="form-control" required type="email"  onChange={this.handleInputChange.bind(this, "buyerEmail")} value={this.state.buyerEmail} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label">{t("payment.phone")}:</label>
                                                <div className="col-10">
                                                    <input className="form-control" required type="text" onChange={this.handleInputChange.bind(this, "buyerPhone")} value={this.state.buyerPhone} />
                                                </div>
                                            </div>
                                            <Button color="primary" className="float-right" id="save-data" disabled={this.state.disabled} >
                                                {t("payment.checkout")}
                                            </Button>

                                        </form>
                                    </div>
                                    :
                                    <div className="text-center mb-2">
                                        <p>{t("payment.provided-info")}</p>
                                        <h3>{price}&#160;&euro;</h3>

                                        {showButton && isDataSaved &&
                                    <paypal.Button.react
                                        env={ENV}
                                        client={CLIENT}
                                        payment={payment}
                                        commit={true}
                                        onAuthorize={onAuthorize}
                                        onCancel={onCancel}
                                        onError={onError}

                                    />}
                                    </div>
                                }
                            </div>
                            :
                            <div>
                                <p>{t("payment.completed")}</p>
                                <Button color="primary" className="float-right" onClick={this.closeModal} id="save-data">
                                    {t("payment.close")}
                                </Button>
                            </div>
                        }

                    </ModalBody>

                </Modal>

            </div>

        );

    }

}

export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(PaymentComponent);

