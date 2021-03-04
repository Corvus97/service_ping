import Controller from "./controller";

export default class BeneficiariesController extends Controller {

    static routes = [
        {
            name: 'create_a_beneficiary',
            url: 'https://api.flutterwave.com/v3/beneficiaries',
            method: 'POST'
        },
        {
            name: 'list_all_beneficiaries',
            url: 'https://api.flutterwave.com/v3/beneficiaries',
            method: 'GET'
        },
        {
            name: 'fetch_a_beneficiary',
            url: 'https://api.flutterwave.com/v3/beneficiaries/3644',
            method: 'PUT'
        },
        {
            name: 'delete_a_beneficiary',
            url: 'https://api.flutterwave.com/v3/beneficiaries/3103',
            method: 'DELETE'
        }
    ];

    static ping(request, response) {
        super.doPing(response, 'Beneficiaries',  BeneficiariesController.routes)
    }

}
