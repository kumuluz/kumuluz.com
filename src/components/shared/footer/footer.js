import React, {Component} from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import {Container, Row, Col} from "reactstrap";
import Link from "gatsby-link";

import {LanguageSelector} from "../language-selector/language-selector";
import {ContactForm} from "../contact-form/contact-form";

import {products as kumuluzDigitalProducts} from "../../../content/footer/products";
import {footerLinks, socialLinks} from "../../../content/footer/links";

import "./footer.scss";
import email from "../../../assets/images/email.png";

@translate("shared")
export class Footer extends Component {
    static propTypes = {
        t: PropTypes.func,
        social: PropTypes.any,
        contact: PropTypes.any,
        grey: PropTypes.any
    };

    constructor(props) {
        super(props);
        this.sendEmail = this.sendEmail.bind(this);
    }

    renderLink(link, index) {
        if (link.href.startsWith("/")) {
            return (
                <div key={index}>
                    <Link to={link.href}>
                        {link.title}
                    </Link>
                </div>
            );
        } else {
            return (
                <div key={index}>
                    <a href={link.href} target="_blank" rel="noreferrer noopener">
                        {link.title}
                    </a>
                </div>
            );
        }
    }

    sendEmail() {
        if (typeof window !== "undefined") {
            window.location = "mailto:info@sunesis.si";
        }
    }

    render() {
        const {t, social, contact, grey} = this.props;

        return (
            <div id="footer" className="footer">
                <div className={`arrow ${grey && "grey"}`}/>
                <div className="darkSection">
                    {social && (
                        <div className="social">
                            <h4 className="position-relative text-center">{t("footer.social.title")}</h4>
                            <div className="social-icons">
                                {socialLinks.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" rel="noreferrer noopener">
                                        <img src={link.img}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {contact && (
                        <div className="contact pb-5" id="contact-us">
                            <Container>
                                <Row>
                                    <Col xs="10" xl="7">
                                        <ContactForm/>
                                    </Col>
                                    <Col xs="10" xl="3" className="mt-5 text-center text-xl-left">
                                        <h4 className="blue">{t("footer.contact.contact.title")}</h4>
                                        <h4>{t("footer.contact.contact.company")}</h4>
                                        <p dangerouslySetInnerHTML={{__html: t("footer.contact.contact.address")}}/>
                                        <p className="mt-4">
                                            <img style={{cursor: "pointer"}} src={email} onClick={this.sendEmail}/>
                                        </p>
                                        {/*<p>{t('footer.contact.contact.phone')}</p>*/}

                                        <h4 className="blue">{t("footer.social.title")}</h4>
                                        <div className="social-icons text-center text-xl-left">
                                            {socialLinks.map((link, i) => (
                                                <a key={i} href={link.href} target="_blank" rel="noreferrer noopener">
                                                    <img src={link.img}/>
                                                </a>
                                            ))}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
                </div>
                <div className="reverse-arrow"/>
                <div className="content">
                    <Container>
                        <Row>
                            <Col>
                                <LanguageSelector/>
                            </Col>
                        </Row>

                        <Row className="links">
                            <Col xs="5" md="4" lg="auto">
                                <div className="title">{t("footer.products.title")}</div>
                                {kumuluzDigitalProducts(t).map((prod, i) => {
                                    if (prod.external) {
                                        return (
                                            <a key={i} href={prod.href} target="_blank" rel="noreferrer noopener">
                                                {prod.name}
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <Link key={i} to={prod.href}>
                                                {prod.name}
                                            </Link>
                                        );
                                    }
                                })}
                            </Col>
                            {footerLinks(t).map((fl, i) => (
                                <Col key={i} xs="5" md="4" lg="auto">
                                    <div className="title">{fl.title}</div>
                                    {fl.links.map(
                                        (link, ind) => {
                                            if (link.href) {
                                                return this.renderLink(link, ind);
                                            } else {
                                                return (<div key={ind}>{link.title}</div>);
                                            }
                                        })
                                    }
                                </Col>
                            ))}
                        </Row>

                        <Row>
                            <Col>
                                <div className="line"/>
                                <p className="copyright" dangerouslySetInnerHTML={{__html: t("footer.copyright")}}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
