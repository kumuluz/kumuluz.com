
import transitionImage from "../../assets/images/transitionCloud.svg";
import lockinImage from "../../assets/images/lockIn.svg";
import dataCenterImage from "../../assets/images/deployDatacenter.svg";
import knowledgeImage from "../../assets/images/knowledge.svg";
import mininvestmentImage from "../../assets/images/minInvestment.svg";
import fullsupportImage from "../../assets/images/fullSupport.svg";


export const highlightsList = (t) => [
    {
        image: transitionImage,
        content: t("highlights.item-1")
    },
    {
        image: lockinImage,
        content: t("highlights.item-2")
    },
    {
        image: dataCenterImage,
        content: t("highlights.item-3")
    },
    {
        image: knowledgeImage,
        content: t("highlights.item-4")
    },
    {
        image: mininvestmentImage,
        content: t("highlights.item-5")
    },
    {
        image: fullsupportImage,
        content: t("highlights.item-6")
    },

];
