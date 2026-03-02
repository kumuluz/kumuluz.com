import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enShared from "../static/locales/en/shared.json";
import enIndex from "../static/locales/en/index.json";
import enBusinessAPIs from "../static/locales/en/business-apis.json";
import enDigitalPlatform from "../static/locales/en/digital-platform.json";
import enEPoslovanje from "../static/locales/en/e-poslovanje.json";
import enPartners from "../static/locales/en/partners.json";
import enLanguage from "../static/locales/en/language.json";
import enAi from "../static/locales/en/ai.json";

import slShared from "../static/locales/sl/shared.json";
import slIndex from "../static/locales/sl/index.json";
import slBusinessAPIs from "../static/locales/sl/business-apis.json";
import slDigitalPlatform from "../static/locales/sl/digital-platform.json";
import slEPoslovanje from "../static/locales/sl/e-poslovanje.json";
import slPartners from "../static/locales/sl/partners.json";
import slLanguage from "../static/locales/sl/language.json";
import slAi from "../static/locales/sl/ai.json";

import deShared from "../static/locales/de/shared.json";
import deIndex from "../static/locales/de/index.json";
import deBusinessAPIs from "../static/locales/de/business-apis.json";
import deDigitalPlatform from "../static/locales/de/digital-platform.json";
import deEPoslovanje from "../static/locales/de/e-poslovanje.json";
import dePartners from "../static/locales/de/partners.json";
import deLanguage from "../static/locales/de/language.json";
import deAi from "../static/locales/de/ai.json";

const resources = {
  en: {
    shared: enShared,
    index: enIndex,
    "business-apis": enBusinessAPIs,
    "digital-platform": enDigitalPlatform,
    "e-poslovanje": enEPoslovanje,
    partners: enPartners,
    language: enLanguage,
    ai: enAi,
  },
  sl: {
    shared: slShared,
    index: slIndex,
    "business-apis": slBusinessAPIs,
    "digital-platform": slDigitalPlatform,
    "e-poslovanje": slEPoslovanje,
    partners: slPartners,
    language: slLanguage,
    ai: slAi,
  },
  de: {
    shared: deShared,
    index: deIndex,
    "business-apis": deBusinessAPIs,
    "digital-platform": deDigitalPlatform,
    "e-poslovanje": deEPoslovanje,
    partners: dePartners,
    language: deLanguage,
    ai: deAi,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    load: "languageOnly",
    fallbackLng: "en",
    ns: ["shared"],
    defaultNS: "shared",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
