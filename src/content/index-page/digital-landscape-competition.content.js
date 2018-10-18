import {Competition} from "./schema/competition.class";

import competitiveAdv from "../../assets/images/competitiveAdv.svg";
import efficiency from "../../assets/images/efficiency.svg";
import financialAdv from "../../assets/images/financialAdv.svg";
import productivityIncreas from "../../assets/images/productivityIncreas.svg";
import strategicAdv from "../../assets/images/strategicAdv.svg";
import fullSupport from "../../assets/images/fullSupport.svg";
import forWho from "../../assets/images/forWho.svg";
import transitionCloud from "../../assets/images/transitionCloud.svg";
import lockIn from "../../assets/images/lockIn.svg";

export const digitalLandscapeCompetition = (t) => [
    new Competition(productivityIncreas, t("digitalLandscapeCompetition.item-1.title"), t("digitalLandscapeCompetition.item-1.content")),
    new Competition(lockIn, t("digitalLandscapeCompetition.item-2.title"), t("digitalLandscapeCompetition.item-2.content")),
    new Competition(efficiency, t("digitalLandscapeCompetition.item-3.title"), t("digitalLandscapeCompetition.item-3.content")),
    new Competition(competitiveAdv, t("digitalLandscapeCompetition.item-4.title"), t("digitalLandscapeCompetition.item-4.content")),
    new Competition(strategicAdv, t("digitalLandscapeCompetition.item-5.title"), t("digitalLandscapeCompetition.item-5.content")),
    new Competition(fullSupport, t("digitalLandscapeCompetition.item-6.title"), t("digitalLandscapeCompetition.item-6.content")),
    new Competition(transitionCloud, t("digitalLandscapeCompetition.item-7.title"), t("digitalLandscapeCompetition.item-7.content")),
    new Competition(forWho, t("digitalLandscapeCompetition.item-8.title"), t("digitalLandscapeCompetition.item-8.content")),
    new Competition(financialAdv, t("digitalLandscapeCompetition.item-9.title"), t("digitalLandscapeCompetition.item-9.content")),
    //new Competition(market, t("digitalLandscapeCompetition.item-10.title"), t("digitalLandscapeCompetition.item-10.content"))
];
