import Controller from "./controller";

export default class MiscController extends Controller {

    static routes = [
        {
            name: 'get_all_wallet_balances',
            url: 'https://api.flutterwave.com/v3/balances',
            method: 'GET'
        },
        {
            name: 'get_balances_per_currency',
            url: 'https://api.flutterwave.com/v3/balances/NGN',
            method: 'GET'
        },
        {
            name: 'resolve_account_details',
            url: 'https://api.flutterwave.com/v3/accounts/resolve',
            method: 'POST'
        },
        {
            name: 'resolve_bvn_details',
            url: 'https://api.flutterwave.com/v3/kyc/bvns/12345678901',
            method: 'GET'
        },
        {
            name: 'resolve_card_bins',
            url: 'https://api.flutterwave.com/v3/card-bins/123456',
            method: 'GET'
        },
        {
            name: 'fx_rates',
            url: 'https://api.flutterwave.com/v3/rates',
            method: 'GET'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Misc',  MiscController.routes)
    }

}
