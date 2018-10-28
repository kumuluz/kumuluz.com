import imageEdvardSimec from "../../assets/images/quotes/edvard_simec.jpg";
import imagePavelSkerlj from "../../assets/images/quotes/pavel_skerlj.jpg";
import imageToneCerne from "../../assets/images/quotes/tone_cerne.png";

import imageArunGupta from "../../assets/images/quotes/arun_gupta.jpg";
import imageMartijnVerburg from "../../assets/images/quotes/martijn_verburg.png";
import imageHarshadOak from "../../assets/images/quotes/harshad_oak.jpg";

export const quotes = t => [
    {
        quote: t("customers.adriatic.text"),
        photo: imageEdvardSimec,
        name: "Edvard Šimec",
        company: t("customers.adriatic.title")
    },
    {
        quote: t("customers.petrol.text"),
        photo: imagePavelSkerlj,
        name: "Pavel Škerlj",
        company: t("customers.petrol.title")
    },
    {
        quote: t("customers.apl.text"),
        photo: imageToneCerne,
        name: "Tone Černe",
        company: t("customers.apl.title")
    },

    {
        quote: t("customers.couchbase.text"),
        photo: imageArunGupta,
        name: "Arun Gupta",
        company: t("customers.couchbase.title")
    },
    {
        quote: t("customers.jclarity.text"),
        photo: imageMartijnVerburg,
        name: "Martijn Verburg",
        company: t("customers.jclarity.title")
    },
    {
        quote: t("customers.rightrix.text"),
        photo: imageHarshadOak,
        name: "Harshad Oak",
        company: t("customers.rightrix.title")
    }
];
