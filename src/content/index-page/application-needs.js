import {Needs} from "./schema/needs.class";

export const applicationNeeds = (t) => {
    return {
        row1: [
            new Needs(t("bapis.needs.item-1")),
            new Needs(t("bapis.needs.item-2")),
            new Needs(t("bapis.needs.item-8")),
        ],
        row2: [
            new Needs(t("bapis.needs.item-4")),
            new Needs(t("bapis.needs.item-5")),
            new Needs(t("bapis.needs.item-6")),
        ],
        row3: [
            new Needs(t("bapis.needs.item-3")),
            new Needs(t("bapis.needs.item-9")),
            new Needs(t("bapis.needs.item-10")),
        ],
        row4: [
            new Needs(t("bapis.needs.item-7")),
            new Needs(t("bapis.needs.browse"), true),
        ]
    };
};
