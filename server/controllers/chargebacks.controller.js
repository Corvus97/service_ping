import Controller from "./controller";

export default class ChargebacksController extends Controller {

    static routes = [
        {
            name: 'list_all_chargebacks',
            url: 'https://api.flutterwave.com/v3/chargebacks',
            method: 'GET'
        },
        {
            name: 'accept_decline_chargeback',
            url: 'https://api.flutterwave.com/v3/chargebacks/143',
            method: 'GET'
        },
        {
            name: 'list_a_chargeback',
            url: 'https://api.flutterwave.com/v3/chargebacks?flw_ref=Flutterwave-refernce-value',
            method: 'GET'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Chargebacks',  ChargebacksController.routes)
    }

}
