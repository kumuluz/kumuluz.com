import React, {Component} from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import {Helmet} from "react-helmet";
import {Footer} from "../../components/shared/footer/footer";
import {Col, Container, Row} from "reactstrap";
import Link, {push} from "gatsby-link";

import "./thanks-page.scss";

@translate("index")
export default class ThanksPage extends Component {

    static propTypes = {
        t: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            push("/");
        }, 3000);
    }

    render() {
        const {t} = this.props;
        return (
            <div className="km-thanks-page">
                <Helmet title={t("meta.title")}/>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <h1 className="text-center">{t("thanks.title")}</h1>
                            <p  className="text-center">{t("thanks.text")} <Link to="/">{t("thanks.link")}</Link>.</p>
                        </Col>
                    </Row>
                </Container>
                <Footer social/>
            </div>
        );
    }
}
