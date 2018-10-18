import React from "react";
import {DigitalPlatformProduct} from "./schema/digital-platform.class";

export const digitalPlatformProducts = (t) => [
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-ee">EE</span></span>, "/digital-components/ee", t("digital-platform.items.ee"), "color-ee"),
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-api">API</span></span>, "/digital-components/api", t("digital-platform.items.api"), "color-api"),
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-integration">Integration</span></span>, "/digital-components/integration", t("digital-platform.items.integration"), "color-integration"),
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-ux">Ux</span></span>, "/digital-components/ux", t("digital-platform.items.ux"), "color-ux"),
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-marketplace">Marketplace</span></span>, "/digital-components/marketplace", t("digital-platform.items.marketplace"), "color-marketplace"),
    new DigitalPlatformProduct(<span>kumuluz<span className="colored color-crowdsensing">Crowdsensing</span></span>, "/digital-components/crowdsensing", t("digital-platform.items.crowdsensing"), "color-crowdsensing"),
];
