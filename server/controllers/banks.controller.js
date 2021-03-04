import Controller from "./controller";

export default class BanksController extends Controller {

    static routes = [
        {
            name: 'get_all_banks',
            url: 'https://api.flutterwave.com/v3/banks/NG',
            method: 'GET'
        },
        {
            name: 'get_all_bank_branches',
            url: 'https://api.flutterwave.com/v3/banks/id/branches',
            method: 'GET'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Banks',  BanksController.routes)
    }

}
