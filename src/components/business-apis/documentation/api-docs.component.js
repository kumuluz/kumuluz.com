import React, {Component} from "react";
import PropType from "prop-types";

import "./api-docs.component.scss"

export class ApiDocsComponent extends Component {

    static propTypes = {
        headerSection: PropType.object,
        bodySection: PropType.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {headerSection, bodySection} = this.props;

        return (
            <div className="km-api-docs-component">
                <div className="container-fluid">
                    <div className="row flex-column align-items-center">
                        <div className="col-9 col-lg-8 col-xl-6 justify-content-center">
                            {headerSection}
                        </div>
                        <div className="col-9 col-lg-8 col-xl-6 justify-content-center">
                            {bodySection}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
