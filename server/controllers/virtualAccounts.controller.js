import Controller from "./controller";

export default class VirtualAccountsController extends Controller {

    static routes = [
        {
            name: 'create_a_virtual_account_number',
            url: 'https://api.flutterwave.com/v3/virtual-account-numbers',
            method: 'POST'
        },
        {
            name: 'create_bulk_virtual_account_numbers',
            url: 'https://api.flutterwave.com/v3/bulk-virtual-account-numbers',
            method: 'POST'
        },
        {
            name: 'get_bulk_virtual_account_details',
            url: 'https://api.flutterwave.com/v3/bulk-virtual-account-numbers/RND_2641579516055928',
            method: 'GET'
        },
        {
            name: 'get_a_virtual_account_number',
            url: 'https://api.flutterwave.com/v3/virtual-account-numbers/URF_1579513580629_5981535',
            method: 'GET'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Virtual Accounts',  VirtualAccountsController.routes)
    }

}
