
export class BApi {

    constructor(id, title, shortDesc, url, docsUrl, tag, notReleased) {
        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.url = url;
        this.docsUrl = docsUrl;
        this.tag = tag;
        this.notReleased = notReleased !== undefined ? notReleased : false;
    }

}
