import React, {Component} from "react";
import PropType from "prop-types";

import "./unordered-list.component.scss";
import checkMark from "../../../assets/images/check-mark.svg";

export class UnorderedListComponent extends Component {

    static propTypes = {
        items: PropType.array,
        fontColor: PropType.string,
        rows: PropType.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {items, fontColor, rows} = this.props;

        const colorClass = fontColor !== undefined ? "color-" + fontColor : "color-black";
        const rowsClass = rows !== undefined ? "list-row-" + rows : "list-row-1";

        return (
            <div className={"km-unordered-list-component " + rowsClass}>
                {items.map((item, index) => (
                    <div className="list-row" key={index}>
                        <span className="list-bullet">
                            <img src={checkMark}/>
                        </span>
                        <span className={"list-content " + colorClass}>{item}</span>
                    </div>
                ))}
            </div>
        );
    }
}
