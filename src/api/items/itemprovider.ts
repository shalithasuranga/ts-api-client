import * as HTTPRequest from "../httprequest";

export class ItemProvider {
    public static get() : Promise<any> {
        return HTTPRequest.request("items");
    }
}