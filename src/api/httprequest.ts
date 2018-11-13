import $ from 'jquery';

const API_BASE = "http://localhost:8080/";

export function request(url: String) : Promise<any> {
    return new Promise((resolve:any, reject:any) => {
        $.ajax({
            url : API_BASE + url,
            success : function(res) {
                resolve(res);
            },
            error: function(err) {
                reject(err);
            }
        });
    });

}
