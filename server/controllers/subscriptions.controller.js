import Controller from "./controller";

export default class SubscriptionsController extends Controller {

    static routes = [
        {
            name: 'get_all_subscriptions',
            url: 'https://api.flutterwave.com/v3/subscriptions',
            method: 'GET'
        },
        {
            name: 'cancel_a_subscription',
            url: 'https://api.flutterwave.com/v3/subscriptions/4147/cancel',
            method: 'PUT'
        },
        {
            name: 'activate_a_subscription',
            url: 'https://api.flutterwave.com/v3/subscriptions/4147/activate',
            method: 'PUT'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Subscriptions',  SubscriptionsController.routes)
    }

}
