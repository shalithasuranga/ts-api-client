import * as HTTPRequest from "../httprequest";

export class InvoiceProvider {
    public static get() : Promise<any> {
        return HTTPRequest.request("invoices");
    }
}