import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./use-cases.component.scss";

@translate("business-apis")
export class ApiUseCasesComponent extends Component {

    static propTypes = {
        useCases: PropType.array,
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t, useCases} = this.props;

        return (
            <div className="km-api-use-cases-component">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h2>{t("apis.usecases")}</h2>
                            {useCases.map((useCase, index) => {
                                if (useCase === "#") {
                                    return (
                                        <div className="divider-container" key={index}>
                                            <div className="divider"/>
                                        </div>
                                    );
                                } else {
                                    if (typeof useCase === "string") {
                                        return (
                                            <p key={index} className="use-case">
                                                {useCase}
                                            </p>
                                        );
                                    } else {
                                        return (
                                            <div key={index} className="use-case">
                                                {useCase}
                                            </div>
                                        );
                                    }
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
