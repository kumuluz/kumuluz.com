import React, {Component} from "react";
import PropType from "prop-types";
import { withTranslation } from "react-i18next";
import "./api-coming-soon.component.scss";

class ApiComingSoonComponent extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;
        return (
            <div className="km-api-coming-soon-component">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h2>{t("apis.coming-soon")}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withTranslation("business-apis")(ApiComingSoonComponent);