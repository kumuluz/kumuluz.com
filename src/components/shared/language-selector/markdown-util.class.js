import {push} from "gatsby-link";

export class MarkdownUtil {

    static isMarkdownPage(url) {
        return url.startsWith("/digital-components");
    }

    static changePathOfMarkdownPage(newLang) {
        const url = typeof window !== "undefined" ? window.location.pathname : "";
        if (MarkdownUtil.isMarkdownPage(url)) {
            const urlPaths = url.substring(1).split("/");
            const newUrl = `/${urlPaths[0]}/${newLang}/${urlPaths[2]}`;
            push(newUrl);
        }
    }
}
