import Controller from "./controller";

export default class SubAccountsController extends Controller {

    static routes = [
        {
            name: 'create_a_subaccount',
            url: 'https://api.flutterwave.com/v3/subaccounts',
            method: 'POST'
        },
        {
            name: 'fetch_all_subaccounts',
            url: 'https://api.flutterwave.com/v3/subaccounts',
            method: 'GET'
        },
        {
            name: 'fetch_a_subaccount',
            url: 'https://api.flutterwave.com/v3/subaccounts/2181',
            method: 'GET'
        },
        {
            name: 'update_a_subaccount',
            url: 'https://api.flutterwave.com/v3/subaccounts/3256',
            method: 'PUT'
        },
        {
            name: 'delete_a_subaccount',
            url: 'https://api.flutterwave.com/v3/subaccounts/2165',
            method: 'DELETE'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'SubAccounts',  SubAccountsController.routes)
    }

}
