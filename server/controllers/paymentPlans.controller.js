import Controller from "./controller";

export default class PaymentPlansController extends Controller {

    static routes = [
        {
            name: 'create_payment_plan',
            url: 'https://api.flutterwave.com/v3/payment-plans',
            method: 'POST'
        },
        {
            name: 'get_payment_plans',
            url: 'https://api.flutterwave.com/v3/payment-plans',
            method: 'GET'
        },
        {
            name: 'get_a_payment_plan',
            url: 'https://api.flutterwave.com/v3/payment-plans/id/3807',
            method: 'GET'
        },
        {
            name: 'update_a_payment_plan',
            url: 'https://api.flutterwave.com/v3/payment-plans/3807',
            method: 'PUT'
        },
        {
            name: 'cancel_a_payment_plan',
            url: 'https://api.flutterwave.com/v3/payment-plans/3807/cancel',
            method: 'PUT'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Payment Plans',  PaymentPlansController.routes)
    }

}
