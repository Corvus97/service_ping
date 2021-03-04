import Controller from "./controller";

export default class TransactionsController extends Controller {

    static routes = [
        {
            name: 'get_all_transactions',
            url: 'https://api.flutterwave.com/v3/transactions',
            method: 'GET'
        },
        {
            name: 'get_transaction_fee',
            url: 'https://api.flutterwave.com/v3/transactions/fee',
            method: 'GET'
        },
        {
            name: 'resend_transaction_webhook',
            url: 'https://api.flutterwave.com/v3/transactions/5708/resend-hook',
            method: 'POST'
        },
        {
            name: 'transaction_refund',
            url: 'https://api.flutterwave.com/v3/transactions/5708/refund',
            method: 'POST'
        },
        {
            name: 'verify_transaction',
            url: 'https://api.flutterwave.com/v3/transactions/id/verify',
            method: 'GET'
        },
        {
            name: 'view_transaction_timeline',
            url: 'https://api.flutterwave.com/v3/transactions/957764/events',
            method: 'GET'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Transactions',  TransactionsController.routes)
    }

}
