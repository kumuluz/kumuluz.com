import imageEdvardSimec from "../../assets/images/quotes/edvard_simec.jpg";
import imagePavelSkerlj from "../../assets/images/quotes/pavel_skerlj.jpg";
import imageToneCerne from "../../assets/images/quotes/tone_cerne.png";

import imageArunGupta from "../../assets/images/quotes/arun_gupta.jpg";
import imageMartijnVerburg from "../../assets/images/quotes/martijn_verburg.png";
import imageHarshadOak from "../../assets/images/quotes/harshad_oak.jpg";
import imageRezaRahman from "../../assets/images/quotes/reza_rahman.jpg";

const unusedQuote = {
  quote: "KumuluzEE is a great community effort to power Java EE API based microservices, especially on the cloud.",
  photo: imageRezaRahman,
  name: "Reza Rahman",
  company: "Senior Java Technologist, Author, Speaker"
};

export const quotes = t => [
  {
    quote: t("customers.adriatic"),
    photo: imageEdvardSimec,
    name: "Edvard Šimec",
    company: "CIO at Adriatic Slovenica"
  },
  {
    quote: t("customers.petrol"),
    photo: imagePavelSkerlj,
    name: "Pavel Škerlj",
    company: "CIO at Petrol"
  },
  {
    quote: t("customers.apl"),
    photo: imageToneCerne,
    name: "Tone Černe",
    company: "CEO at APL"
  },

  {
    quote: t("customers.couchbase"),
    photo: imageArunGupta,
    name: "Arun Gupta",
    company: "Vice President, Developer Relations at Couchbase"
  },
  {
    quote: t("customers.jclarity"),
    photo: imageMartijnVerburg,
    name: "Martijn Verburg",
    company: "Java Champion and CEO of jClarity"
  },
  {
    quote: t("customers.rightrix"),
    photo: imageHarshadOak,
    name: "Harshad Oak",
    company: "Java Champion and Founder of Rightrix Solutions and IndicThreads"
  }
];
