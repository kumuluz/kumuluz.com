import React, {Component} from "react";
import PropType from "prop-types";

import "./arrow-divider.component.scss";

export class ArrowDividerComponent extends Component {

    static propTypes = {
        /*
            1: top-left
            2: top-right
            3: bottom-left
            4: bottom-right
         */
        corner: PropType.number,
        /*
            blue: $blue-400
            white: $white
         */
        theme: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {corner, theme} = this.props;


        const clazz = `km-arrow-divider-component arrow-${corner} arrow-${corner}-${theme}`;

        return (
            <div className={clazz}/>
        );
    }
}
