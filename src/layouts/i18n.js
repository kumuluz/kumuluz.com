import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import Cache from "i18next-localstorage-cache";
import LanguageDetector from "i18next-browser-languagedetector";

import enShared from "../../static/locales/en/shared.json";
import enIndex from "../../static/locales/en/index.json";
import enBusinessAPIs from "../../static/locales/en/business-apis.json";
import enDigitalPlatform from "../../static/locales/en/digital-platform.json";
import enEPoslovanje from "../../static/locales/en/e-poslovanje.json";
import enPartners from "../../static/locales/en/partners.json";
import enLanguage from "../../static/locales/en/language.json";

import slShared from "../../static/locales/sl/shared.json";
import slIndex from "../../static/locales/sl/index.json";
import slBusinessAPIs from "../../static/locales/sl/business-apis.json";
import slDigitalPlatform from "../../static/locales/sl/digital-platform.json";
import slEPoslovanje from "../../static/locales/sl/e-poslovanje.json";
import slPartners from "../../static/locales/sl/partners.json";
import slLanguage from "../../static/locales/sl/language.json";

import deShared from "../../static/locales/de/shared.json";
import deIndex from "../../static/locales/de/index.json";
import deBusinessAPIs from "../../static/locales/de/business-apis.json";
import deDigitalPlatform from "../../static/locales/de/digital-platform.json";
import deEPoslovanje from "../../static/locales/de/e-poslovanje.json";
import dePartners from "../../static/locales/de/partners.json";
import deLanguage from "../../static/locales/de/language.json";


import {reactI18nextModule} from "react-i18next";

i18n
    .use(Backend)
    .use(Cache)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        load: "languageOnly",
        preload: ["en"],
        fallbackLng: "en",
        ns: ["shared"],
        defaultNS: "shared",
        debug: true, // <--------- change to debug in console
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: false,
            bindI18n: "languageChanged loaded"
        }
    });

i18n.addResourceBundle("en", "shared", enShared);
i18n.addResourceBundle("en", "index", enIndex);
i18n.addResourceBundle("en", "business-apis", enBusinessAPIs);
i18n.addResourceBundle("en", "digital-platform", enDigitalPlatform);
i18n.addResourceBundle("en", "e-poslovanje", enEPoslovanje);
i18n.addResourceBundle("en", "partners", enPartners);
i18n.addResourceBundle("en", "language", enLanguage);

i18n.addResourceBundle("sl", "shared", slShared);
i18n.addResourceBundle("sl", "index", slIndex);
i18n.addResourceBundle("sl", "business-apis", slBusinessAPIs);
i18n.addResourceBundle("sl", "digital-platform", slDigitalPlatform);
i18n.addResourceBundle("sl", "e-poslovanje", slEPoslovanje);
i18n.addResourceBundle("sl", "partners", slPartners);
i18n.addResourceBundle("sl", "language", slLanguage);

i18n.addResourceBundle("de", "shared", deShared);
i18n.addResourceBundle("de", "index", deIndex);
i18n.addResourceBundle("de", "business-apis", deBusinessAPIs);
i18n.addResourceBundle("de", "digital-platform", deDigitalPlatform);
i18n.addResourceBundle("de", "e-poslovanje", deEPoslovanje);
i18n.addResourceBundle("de", "partners", dePartners);
i18n.addResourceBundle("de", "language", deLanguage);

export default i18n;
