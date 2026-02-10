export const MOBILE_MENU_VISIBLE_BELOW = 993;
export const MOBILE_MEDIA = 790;

export const determineScreenWidth = () => {
    if (typeof window !== "undefined") {
        if (typeof window.visualViewport !== "undefined") {
            return window.visualViewport.width;
        } else {
            return window.innerWidth;
        }
    }
    return 0;
};
