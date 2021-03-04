import Controller from "./controller";

export default class PreauthorizationController extends Controller {

    static routes = [
        {
            name: 'capture_preauth_charge',
            url: 'https://api.flutterwave.com/v3/charges/FLW001296992/capture',
            method: 'POST'
        },
        {
            name: 'void_preauth_charge',
            url: 'https://api.flutterwave.com/v3/charges/FLW-TYR67844/void',
            method: 'POST'
        },
        {
            name: 'refund_preauth_charge',
            url: 'https://api.flutterwave.com/v3/charges/FLW001296992/refund',
            method: 'POST'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Preauthorization',  PreauthorizationController.routes)
    }

}
