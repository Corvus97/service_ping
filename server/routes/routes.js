import express from 'express';
import VirtualCardsController from "../controllers/virtualCards.controller";
import VirtualAccountsController from "../controllers/virtualAccounts.controller";
import BanksController from "../controllers/banks.controller";
import BeneficiariesController from "../controllers/beneficiaries.controller";
import BillsController from "../controllers/bills.controller";
import ChargeController from "../controllers/charge.controller";
import ChargebacksController from "../controllers/chargebacks.controller";
import MiscController from "../controllers/misc.controller";
import OtpsController from "../controllers/otps.controller";
import PaymentPlansController from "../controllers/paymentPlans.controller";
import PreauthorizationController from "../controllers/preauthorization.controller";
import RemitaPaymentsController from "../controllers/remitaPayments.controller";
import SettlementsController from "../controllers/settlements.controller";
import SubAccountsController from "../controllers/subAccounts.controller";
import SubscriptionsController from "../controllers/subscriptions.controller";
import TokenizedChargesController from "../controllers/tokenizedCharges.controller";
import TransactionsController from "../controllers/transactions.controller";
import TransfersController from "../controllers/transfers.controller";
import ValidateChargeController from "../controllers/validateCharge.controller";

const router = express.Router();

router.get('/banks', BanksController.ping);
router.get('/beneficiaries', BeneficiariesController.ping);
router.get('/bills', BillsController.ping);
router.get('/charge', ChargeController.ping);
router.get('/chargebacks', ChargebacksController.ping);
router.get('/misc', MiscController.ping);
router.get('/otps', OtpsController.ping);
router.get('/payment-plans', PaymentPlansController.ping);
router.get('/preauthorization', PreauthorizationController.ping);
router.get('/remita-payments', RemitaPaymentsController.ping);
router.get('/settlements', SettlementsController.ping);
router.get('/subaccounts', SubAccountsController.ping);
router.get('/subscriptions', SubscriptionsController.ping);
router.get('/tokenized-charges', TokenizedChargesController.ping);
router.get('/transactions', TransactionsController.ping);
router.get('/transfers', TransfersController.ping);
router.get('/validate-charge', ValidateChargeController.ping);
router.get('/virtual-cards', VirtualCardsController.ping);
router.get('/virtual-accounts', VirtualAccountsController.ping);

export default router;
