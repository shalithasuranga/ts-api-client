import * as HTTPRequest from "../httprequest";

export class InvoiceProvider {
    public static get() {
        return HTTPRequest.request("invoices");
    }
}