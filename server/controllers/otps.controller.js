import Controller from "./controller";

export default class OtpsController extends Controller {

    static routes = [
        {
            name: 'create_otp',
            url: 'https://api.flutterwave.com/v3/otps',
            method: 'POST'
        },
        {
            name: 'validate_otp',
            url: 'https://api.flutterwave.com/v3/otps/CF-BARTER-20190420022611377491/validate',
            method: 'POST'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'OTPS',  OtpsController.routes)
    }

}
