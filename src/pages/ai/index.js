import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { withTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Footer from "../../components/shared/footer/footer";
import { Col, Container, Row } from "reactstrap";
import { ServiceRangeBox } from "../../components/shared/service-range-box/service-range-box";
import { Itemized } from "../../components/shared/itemized/itemized.component";
import { UnorderedListComponent } from "../../components/shared/export.shared.components";
import { ArrowDividerComponent } from "../../components/shared/export.shared.components";
import contactForm from "../../components/shared/contact-form/contact-form";

import rangeReplatforming from "../../assets/images/ai/replatforming.svg";
import rangeTransformation from "../../assets/images/ai/transformation.svg";
import rangeTransProducts from "../../assets/images/ai/trans-products.svg";
import stockAi from "../../assets/images/ai/stock-ai.jpg";
import stockKnowledge from "../../assets/images/ai/stock-knowledge.jpg";
import stockSmartAssistant from "../../assets/images/ai/stock-smart-assistant.jpg";

import "./ai-page.scss";

class AIPage extends Component {
  static propTypes = {
    t: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { t } = this.props;
    return (
      <div className="ai">
        <Helmet title={t("meta.title")} />
        <Container fluid={true} className="header">
          <div>
            <Col xs="12" className="px-0">
              <div className="text-center pt-5 p-3 p-lg p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("title")}</h1>
                    <p>{t("block1")}</p>
                    <p>{t("block2")}</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Container>
        <div className="arrow-header" />

        <Container fluid={true} className="service-range">
          <div>
            <Col xs="12" className="px-0">
              <div className="content text-center pr-3 pl-3 p-lg-0">
                <Row className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <div className="boxes-container">
                      <ServiceRangeBox img={rangeTransformation} text={t("item1")} />
                      <ServiceRangeBox img={rangeTransProducts} text={t("item2")} />
                      <ServiceRangeBox img={rangeReplatforming} text={t("item3")} />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Container>

        <Container fluid={true} className="main-content">
          <div className="index-content-component">
            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center" style={{ marginTop: "60px" }}>
                <Row className="mt-5 content-body">
                  <Col>
                    <img
                      src={stockAi}
                      style={{ width: "100%", minWidth: "300px", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-ai-form"
                    />
                  </Col>
                  <Col>
                    <div className="title">
                      <h2>{t("services.item1.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("services.item1.subtitle")}</h3>
                    <p>{t("services.item1.description")}</p>
                    <div>
                      <Itemized label={t("services.item1.items.item1")} />
                      <Itemized label={t("services.item1.items.item2")} />
                      <Itemized label={t("services.item1.items.item3")} />
                      <Itemized label={t("services.item1.items.item4")} />
                    </div>
                    <Col className="mt-5">
                      <a
                        href="https://sunesis.si/services/ai"
                        className="mt-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="overview-btn">{t("services.learn-more")}</span>
                      </a>
                    </Col>
                  </Col>
                </Row>

                <Row className="space-top content-body">
                  <Col className="mobile-image">
                    <img
                      src={stockKnowledge}
                      style={{ width: "100%", minWidth: "300px", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-architecture"
                    />
                  </Col>

                  <Col>
                    <h3 style={{ marginBottom: 0 }}>{t("services.item2.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2 style={{ margin: 0 }}>{t("services.item2.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("services.item2.description")}</p>
                    <p>{t("services.item2.description2")}</p>
                    <div>
                      <Itemized label={t("services.item2.items.item1")} />
                      <Itemized label={t("services.item2.items.item2")} />
                      <Itemized label={t("services.item2.items.item3")} />
                      <Itemized label={t("services.item2.items.item4")} />
                      <Itemized label={t("services.item2.items.item5")} />
                    </div>
                    <Col className="mt-5">
                      <a
                        href="https://sunesis.si/products/ai-smart-assistant"
                        className="mt-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="overview-btn">{t("services.learn-more")}</span>
                      </a>
                    </Col>
                  </Col>
                  <Col className="mobile-image-hidden">
                    <img
                      src={stockKnowledge}
                      style={{ width: "100%", minWidth: "300px", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-architecture"
                    />
                  </Col>
                </Row>
              </div>
            </div>

            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center">
                <Row className="mt-5 content-body">
                  <Col>
                    <img
                      src={stockSmartAssistant}
                      style={{ width: "100%", minWidth: "300px", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-security"
                    />
                  </Col>
                  <Col>
                    <div className="title">
                      <h2>{t("services.item3.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("services.item3.subtitle")}</h3>
                    <p>{t("services.item3.description")}</p>
                    <p>{t("services.item3.description2")}</p>
                    <div>
                      <Itemized label={t("services.item3.items.item1")} />
                      <Itemized label={t("services.item3.items.item2")} />
                      <Itemized label={t("services.item3.items.item3")} />
                      <Itemized label={t("services.item3.items.item4")} />
                      <Itemized label={t("services.item3.items.item5")} />
                      <Itemized label={t("services.item3.items.item6")} />
                    </div>

                    <Col className="mt-5 mb-5">
                      <a
                        href="https://sunesis.si/products/ai-knowledge-mentor"
                        className="mt-5"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="overview-btn">{t("services.learn-more")}</span>
                      </a>
                    </Col>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>

        <div className="flex-column d-flex align-items-center blue-div">
          <ArrowDividerComponent theme="white" corner={1}/>
          <div className="blue-content container-padding">
            <h2 className="text-center">{t("cta.title")}</h2>
            <p className="mt-5 text-center">{t("cta.subtitle")}</p>
            <UnorderedListComponent rows={2} fontColor={"white"} items={[
              t("cta.table.left.item1"),
              t("cta.table.left.item2"),
              t("cta.table.left.item3"),
              t("cta.table.left.item4"),
              t("cta.table.left.item5"),
              t("cta.table.right.item1"),
              t("cta.table.right.item2"),
              t("cta.table.right.item3"),
              t("cta.table.right.item4"),
              t("cta.table.right.item5"),
            ]} />
          </div>
          <ArrowDividerComponent theme="white" corner={3}/>
        </div>

        <div className="container-fluid benefits-section">
            <div className="row justify-content-center">
                <div className="col-9 col-xl-6">
                    <h2 className="text-center mt-5">{t("cta.benefits.title")}</h2>
                    <p className="text-center mt-5">{t("cta.benefits.summary")}</p>
                </div>
            </div>
        </div>

        <Footer contact/>
      </div>
    );
  }
}


export default withTranslation("ai")(AIPage);