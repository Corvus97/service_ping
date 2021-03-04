import Controller from "./controller";

export default class ChargeController extends Controller {

    static routes = [
        {
            name: 'charge_card',
            url: 'https://api.flutterwave.com/v3/charges?type=card',
            method: 'POST'
        },
        {
            name: 'charge_nigerian_bank_account',
            url: 'https://api.flutterwave.com/v3/charges?type=debit_ng_account',
            method: 'POST'
        },
        {
            name: 'charge_via_ach_payment',
            url: 'https://api.flutterwave.com/v3/charges?type=ach_payment',
            method: 'POST'
        },
        {
            name: 'charge_uk_bank_accounts',
            url: 'https://api.flutterwave.com/v3/charges?type=debit_uk_account',
            method: 'POST'
        },
        {
            name: 'charge_via_bank_transfer',
            url: 'https://api.flutterwave.com/v3/charges?type=bank_transfer',
            method: 'POST'
        },
        {
            name: 'charge_via_ghana_mobile_money',
            url: 'https://api.flutterwave.com/v3/charges?type=mobile_money_ghana',
            method: 'POST'
        },
        {
            name: 'charge_via_rwanda_mobile_money',
            url: 'https://api.flutterwave.com/v3/charges?type=mobile_money_rwanda',
            method: 'POST'
        },
        {
            name: 'charge_via_uganda_mobile_money',
            url: 'https://api.flutterwave.com/v3/charges?type=mobile_money_uganda',
            method: 'POST'
        },
        {
            name: 'charge_via_zambia_mobile_money',
            url: 'https://api.flutterwave.com/v3/charges?type=mobile_money_zambia',
            method: 'POST'
        },
        {
            name: 'charge_via_ussd',
            url: 'https://api.flutterwave.com/v3/charges?type=ussd',
            method: 'POST'
        },
        {
            name: 'charge_via_mpesa',
            url: 'https://api.flutterwave.com/v3/charges?type=mpesa',
            method: 'POST'
        },
        {
            name: 'charge_via_voucher_payment',
            url: 'https://api.flutterwave.com/v3/charges?type=voucher_payment',
            method: 'POST'
        },
        {
            name: 'charge_via_francophone_mobile_money',
            url: 'https://api.flutterwave.com/v3/charges?type=mobile_money_franco',
            method: 'POST'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Charge',  ChargeController.routes)
    }

}
