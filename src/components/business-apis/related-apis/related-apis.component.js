import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./related-apis.component.scss";
import Link from "gatsby-link";
import arrowIcon from "../../../assets/images/arrow-blue-200.svg";
import arrowIconGrey from "../../../assets/images/arrow-grey.svg";
import {UncontrolledTooltip} from "reactstrap";

@translate("business-apis")
export class ApiRelatedApisComponent extends Component {

    static propTypes = {
        t: PropType.func,
        apis: PropType.array
    };

    constructor(props) {
        super(props);
    }

    renderDocumentationLink(api) {
        const {t} = this.props;

        if (!api.notReleased) {
            /*When documentation is ready replace return with following code:
                return (
                    <Link to={api.docsUrl} className="docs-btn-link">
                        <span className="docs-btn">
                            {t("apis.docs")}
                            <img src={arrowIcon} />
                        </span>
                    </Link>
                );*/
            return (
                <span className="docs-btn">
                    {t("apis.docs")}
                    <img src={arrowIcon} />
                </span>
            );
        } else {
            return (
                <span className="docs-btn disabled-docs" id={"docs-btn-" + api.id}>
                    {t("apis.docs")}
                    <img src={arrowIconGrey} />
                    <UncontrolledTooltip target={"docs-btn-" + api.id} placement={"top"}>
                        {t("apis.not-available")}
                    </UncontrolledTooltip>
                </span>
            );
        }
    }

    render() {
        const {apis, t} = this.props;

        if (apis.length === 0) {
            return (<div/>);
        }

        return (
            <div className="container-fluid km-related-apis-component mb-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6">
                        <h2 className="text-center">{t("apis.related")}</h2>
                        <div className="apis-grid">
                            {apis.map((api, index) => (
                                <div className="api-item" key={index}>
                                    <div className="tag">
                                        {api.tag}
                                    </div>
                                    <div className="api-name">
                                        {api.title}
                                    </div>
                                    <div className="api-desc">
                                        {api.shortDesc}
                                    </div>
                                    <div className="buttons">
                                        <Link to={api.url}>
                                            <span className="overview-btn">{t("apis.overview")}</span>
                                        </Link>
                                        {this.renderDocumentationLink(api)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
