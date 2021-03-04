import Controller from "./controller";

export default class BillsController extends Controller {

    static routes = [
        {
            name: 'get_bill_categories',
            url: 'https://api.flutterwave.com/v3/bill-categories',
            method: 'GET'
        },
        {
            name: 'validate_a_bill_service',
            url: 'https://api.flutterwave.com/v3/bill-items/AT099/validate',
            method: 'GET'
        },
        {
            name: 'create_a_bill_payment',
            url: 'https://api.flutterwave.com/v3/bills',
            method: 'POST'
        },
        {
            name: 'create_bulk_bills',
            url: 'https://api.flutterwave.com/v3/bulk-bills',
            method: 'GET'
        },
        {
            name: 'get_status_of_a_bill',
            url: 'https://api.flutterwave.com/v3/bills/9300049404444',
            method: 'GET'
        },
        {
            name: 'get_bill_payments',
            url: 'https://api.flutterwave.com/v3/bill',
            method: 'GET'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Bills',  BillsController.routes)
    }

}
