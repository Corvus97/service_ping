import Controller from "./controller";

export default class ValidateChargeController extends Controller {

    static routes = [
        {
            name: 'validate_a_charge',
            url: 'https://api.flutterwave.com/v3/validate-charge',
            method: 'POST'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Validate Charge',  ValidateChargeController.routes)
    }

}
