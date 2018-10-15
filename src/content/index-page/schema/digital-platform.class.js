export class DigitalPlatformProduct {
    constructor(title, url, description, colorClazz, external) {
        this.title = title;
        this.url = url;
        this.description = description;
        this.colorClazz = colorClazz;
        this.external = external === undefined ? false : external;
    }
}
