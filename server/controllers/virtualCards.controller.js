import Controller from "./controller";

export default class VirtualCardsController extends Controller {

    static routes = [
        {
            name: 'create_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards',
            method: 'POST'
        },
        {
            name: 'get_all_virtual_cards',
            url: 'https://api.flutterwave.com/v3/virtual-cards',
            method: 'GET'
        },
        {
            name: 'get_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085',
            method: 'GET'
        },
        {
            name: 'fund_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085/fund',
            method: 'POST'
        },
        {
            name: 'terminate_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085/terminate',
            method: 'PUT'
        },
        {
            name: 'get_virtual_card_transactions',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085/transactions',
            method: 'GET'
        },
        {
            name: 'withdraw_from_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085/withdraw',
            method: 'POST'
        },
        {
            name: 'fund_a_virtual_card',
            url: 'https://api.flutterwave.com/v3/virtual-cards/7dc7b98c-7f6d-48f3-9b31-859a145c8085/status/block',
            method: 'PUT'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Virtual Cards',  VirtualCardsController.routes)
    }

}
