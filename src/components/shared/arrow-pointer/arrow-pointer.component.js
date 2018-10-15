import React, {Component} from "react";
import PropType from "prop-types";

import "./arrow-pointer.component.scss";

export class ArrowPointerComponent extends Component {

    static propTypes = {
        direction: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {direction} = this.props;
        const clazz = direction === "down" ? "down-arrow" : "arrow-up";

        return (
            <div className={clazz}/>
        );
    }
}
