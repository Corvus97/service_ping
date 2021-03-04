import Controller from "./controller";

export default class TokenizedChargesController extends Controller {

    static routes = [
        {
            name: 'charge_with_token',
            url: 'https://api.flutterwave.com/v3/tokenized-charges',
            method: 'POST'
        },
        {
            name: 'update_token_details',
            url: 'https://api.flutterwave.com/v3/tokens/flw-t1nf-f9b3bf384cd30d6fca42b6df9d27bd2f-xxxx',
            method: 'PUT'
        },
        {
            name: 'create_bulk_tokenized_charge',
            url: 'https://api.flutterwave.com/v3/bulk-tokenized-charges',
            method: 'POST'
        },
        {
            name: 'get_a_bulk_tokenized_charge_status',
            url: 'https://api.flutterwave.com/v3/bulk-tokenized-charges/131',
            method: 'GET'
        },
        {
            name: 'get_a_bulk_tokenized_charge_transactions',
            url: 'https://api.flutterwave.com/v3/bulk-tokenized-charges/152/transactions',
            method: 'GET'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Tokenized Charge',  TokenizedChargesController.routes)
    }

}
