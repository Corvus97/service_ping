import Controller from "./controller";

export default class RemitaPaymentsController extends Controller {

    static routes = [
        {
            name: 'get_bill_payment_agencies',
            url: 'https://api.flutterwave.com/v3/billers',
            method: 'GET'
        },
        {
            name: 'get_products_under_an_agency',
            url: 'https://api.flutterwave.com/v3/billers/BIL136/products',
            method: 'GET'
        },
        {
            name: 'get_amount_to_be_paid_for_a_product',
            url: 'https://api.flutterwave.com/v3/billers/BIL136/products/OT150',
            method: 'GET'
        },
        {
            name: 'create_order_using_biller_code_and_product_code',
            url: 'https://api.flutterwave.com/v3/billers/BIL136/products/OT150/orders',
            method: 'POST'
        },
        {
            name: 'update_bills_order',
            url: 'https://api.flutterwave.com/v3/product-orders/be9c8abf-4611-46e9-85e7-5a2e8c5d7ab3',
            method: 'PUT'
        },
        {
            name: 'get_bill_payments',
            url: 'https://api.flutterwave.com/v3/bill',
            method: 'GET'
        },
    ];

    static ping(request, response) {
        super.doPing(response, 'Remita Payments',  RemitaPaymentsController.routes)
    }

}
