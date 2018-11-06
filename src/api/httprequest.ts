let req = require("request");

const API_BASE = "http://localhost:8080/";

export function request(url: String) : Promise<any> {
    return new Promise((resolve:any, reject:any) => {
        req(API_BASE + url, (error: any, resp: any, body: any) => {
            if(error) reject(error);
            resolve(body);
        });
    });

}
