import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n"; // Initializes i18n instance

import "./layout.scss";
// Corrected import paths based on deeper nesting (src/components/layout/ instead of src/layouts/)
import NavbarComponent from "../shared/navbar/navbar.component"; // ../shared is sibling of layout? No. ../shared -> src/components/shared. Correct.
// Wait, src/components/layout -> ../ is src/components. ../shared works.
import favicon from "./kumuluz-iconx32.svg";
import { CookiesComponent } from "../shared/export.shared.components"; // ../shared works.

const Layout = ({ children }) => {
  const { i18n } = useTranslation();

  return (
    <div className="km-page-layout">
        <NavbarComponent/>
        <Helmet>
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <link rel="icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <div className="km-layout-content">
            {children}
        </div>
        <CookiesComponent/>
    </div>
  );
};

export default Layout;
