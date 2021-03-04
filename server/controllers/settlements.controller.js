import Controller from "./controller";

export default class SettlementsController extends Controller {

    static routes = [
        {
            name: 'get_all_settlements',
            url: 'https://api.flutterwave.com/v3/settlements',
            method: 'GET'
        },
        {
            name: 'get_a_settlement',
            url: 'https://api.flutterwave.com/v3/settlements/41497',
            method: 'GET'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Settlements',  SettlementsController.routes)
    }

}
