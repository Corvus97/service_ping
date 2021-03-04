import Controller from "./controller";

export default class TransfersController extends Controller {

    static routes = [
        {
            name: 'create_a_transfer',
            url: 'https://api.flutterwave.com/v3/transfers',
            method: 'POST'
        },
        {
            name: 'transfer_retry',
            url: 'https://api.flutterwave.com/v3/transfers/26251/retries',
            method: 'POST'
        },
        {
            name: 'create_bulk_transfer',
            url: 'https://api.flutterwave.com/v3/bulk-transfers',
            method: 'POST'
        },
        {
            name: 'get_transfer_fee',
            url: 'https://api.flutterwave.com/v3/transfers/fee',
            method: 'GET'
        },
        {
            name: 'get_all_transfers',
            url: 'https://api.flutterwave.com/v3/transfers',
            method: 'GET'
        },
        {
            name: 'get_a_transfer',
            url: 'https://api.flutterwave.com/v3/transfers/26251',
            method: 'GET'
        },
        {
            name: 'get_a_transfer_retry',
            url: 'https://api.flutterwave.com/v3/transfers/26251/retries',
            method: 'GET'
        },
        {
            name: 'get_a_bulk_transfer',
            url: 'https://api.flutterwave.com/v3/transfers?batch_id=26251',
            method: 'GET'
        },
        {
            name: 'check_transfer_rates',
            url: 'https://api.flutterwave.com/v3/transfers/rates',
            method: 'GET'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Transfers',  TransfersController.routes)
    }

}
