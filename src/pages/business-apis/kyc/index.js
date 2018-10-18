import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./kyc-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {Footer} from "../../../components/shared/footer/footer";
import {ApiComingSoonComponent} from "../../../components/business-apis/export";

@translate("business-apis")
export default class KycApiPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kyc-api-page">
                <Helmet title={t("apis.kyc.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.kyc.page.title")}
                    paragraphs={[t("apis.kyc.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.kyc.page.how-it-works.title")}>
                    <p>{t("apis.kyc.page.how-it-works.para")}</p>
                </ApiHowItWorksComponent>

                <ApiComingSoonComponent/>

                <Footer social/>
            </div>
        );
    }
}
