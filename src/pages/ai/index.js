import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { Helmet } from "react-helmet";
import { Footer } from "../../components/shared/footer/footer";
import { Col, Container, Row } from "reactstrap";
import { ServiceRangeBox } from "../../components/shared/service-range-box/service-range-box";
import { Itemized } from "../../components/shared/itemized/itemized.component";

import rangeReplatforming from "../../assets/images/ai/replatforming.svg";
import rangeTransformation from "../../assets/images/ai/transformation.svg";
import rangeTransProducts from "../../assets/images/ai/trans-products.svg";
import stockAi from "../../assets/images/ai/stock-ai.jpg";
import stockKnowledge from "../../assets/images/ai/stock-knowledge.jpg";
import stockSmartAssistant from "../../assets/images/ai/stock-smart-assistant.jpg";

import "./ai-page.scss";

@translate("ai")
export default class ThanksPage extends Component {
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
                <div className="justify-content-center">
                  <Col xs="12" lg="10" xl="8">
                    <h1>{t("title")}</h1>
                    <p>{t("block1")}</p>
                    <p>{t("block2")}</p>
                  </Col>
                </div>
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
                <div className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockAi}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-ai-form"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("services.item1.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("services.item1.subtitle")}</h3>
                    <p>{t("services.item1.description")}</p>
                    <div>
                      <Col ms={12}>
                        <div className="d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item1.items.item1")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item1.items.item2")} />
                          </Col>
                        </div>
                        <div className="items-margin-top d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item1.items.item3")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item1.items.item4")} />
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </Col>
                </div>
                <div className="space-top content-body">
                  <Col md={6} className="mobile-image">
                    <img
                      src={stockKnowledge}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-architecture"
                    />
                  </Col>

                  <Col md={6}>
                    <h3 style={{ marginBottom: 0 }}>{t("services.item2.above-title")}</h3>
                    <div className="title" style={{ marginBottom: "30px" }}>
                      <h2>{t("services.item2.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <p>{t("services.item2.description")}</p>
                    <p>{t("services.item2.description2")}</p>
                    <div>
                      <Col ms={12}>
                        <div className="d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item2.items.item1")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item2.items.item2")} />
                          </Col>
                        </div>
                        <div className="items-margin-top d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item2.items.item3")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item2.items.item4")} />
                          </Col>
                        </div>
                        <div className="items-margin-top d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item2.items.item5")} />
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </Col>
                  <Col md={6} className="mobile-image-hidden">
                    <img
                      src={stockKnowledge}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-architecture"
                    />
                  </Col>
                </div>
              </div>
            </div>

            <div className="flex-column d-flex align-items-center">
              <div className="flex-column d-flex align-items-center">
                <div className="mt-5 content-body">
                  <Col md={6}>
                    <img
                      src={stockSmartAssistant}
                      style={{ width: "100%", borderRadius: "16px", border: "8px solid #DCDCDC" }}
                      alt="stock-security"
                    />
                  </Col>
                  <Col md={6}>
                    <div className="title">
                      <h2>{t("services.item3.title")}</h2>
                      <div className="title-underline" />
                    </div>
                    <h3>{t("services.item3.subtitle")}</h3>
                    <p>{t("services.item3.description")}</p>
                    <p>{t("services.item3.description2")}</p>
                    <div>
                      <Col ms={12}>
                        <div className="d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item1")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item2")} />
                          </Col>
                        </div>
                        <div className="items-margin-top d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item3")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item4")} />
                          </Col>
                        </div>
                        <div className="items-margin-top d-flex">
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item5")} />
                          </Col>
                          <Col md="6">
                            <Itemized label={t("services.item3.items.item6")} />
                          </Col>
                        </div>
                      </Col>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <div className="flex-column d-flex align-items-center beige-div">
          <div className="beige-arrow-reversed" />
          <div className="beige-content container-padding text-center">
            <h2>{t("cta.title")}</h2>
            <p className="mt-5">{t("cta.subtitle")}</p>
            <div className="table-wrapper">
              <div className="use-case-table">
                <ul className="content">
                  <li>{t("cta.table.left.item1")}</li>
                  <li>{t("cta.table.left.item2")}</li>
                  <li>{t("cta.table.left.item3")}</li>
                  <li>{t("cta.table.left.item4")}</li>
                  <li>{t("cta.table.left.item5")}</li>
                </ul>
                <div className="table-separator" />
                <ul className="content">
                  <li>{t("cta.table.right.item1")}</li>
                  <li>{t("cta.table.right.item2")}</li>
                  <li>{t("cta.table.right.item3")}</li>
                  <li>{t("cta.table.right.item4")}</li>
                  <li>{t("cta.table.right.item5")}</li>
                </ul>
              </div>
              <p className="table-end">{t("cta.table.end")}</p>
            </div>
          </div>
          <div className="beige-arrow" />
        </div>

        <Footer social />
      </div>
    );
  }
}
