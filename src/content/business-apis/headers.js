import whatIsImage from "../../assets/images/whatIs.svg";
import whatCostImage from "../../assets/images/whatCost.svg";
import forWhoImage from "../../assets/images/forWho.svg";

class HeaderItem {
    constructor(image, title, desc) {
        this.image = image;
        this.title = title;
        this.desc = desc;
    }
}

export const headersList = t => [
    new HeaderItem(whatIsImage, t("header.items.what-are.title"), t("header.items.what-are.desc")),
    new HeaderItem(forWhoImage, t("header.items.who-are.title"), t("header.items.who-are.desc")),
    new HeaderItem(whatCostImage, t("header.items.what-cost.title"), t("header.items.what-cost.desc"))
];
