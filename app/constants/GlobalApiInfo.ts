import { Infointerface } from "../types/MainPage";


export const Globalintroinfo: Infointerface = {
  payoutapi: {
    id: 1,
    title: "SOLITECK PayOut API | Digital Transformation made easy",

    intro: {
      title: "Payout API Documentation",
      content:
        "The Payout API enables businesses and developers to securely transfer funds to bank accounts through a seamless and automated system. This API is designed to simplify payout operations by providing endpoints for authentication, remitter management, beneficiary management, and transaction processing With this API, you can register remitters, manage beneficiaries, initiate payouts, and track transaction status in real time. It ensures a reliable and scalable way to integrate payout services into your applications.",
    },

    Authentication: {
      title: "Authentication",
      content:
        "Before accessing any payout service, you must authenticate your application.",
      GenerateToken:
        "Create a secure access token required to call payout APIs",
      VerifyToken: "Validate the generated token before performing operations.",
    },

    BankandifscInfo: {
      title: "Bank & IFSC Information",
      content: "Retrieve banking information required for successful payouts",
      GetBanksForPayout:
        "GetBanksForPayout : Fetch the list of supported banks available for payout transactions",
      GetMasterIFSCForPayout:
        "GetMasterIFSCForPayout : Retrieve IFSC details required for bank verification and payout routing",
    },
    RemitterManagement: {
      title: "Remitter Management",
      content: "A Remitter is the user who initiates payout transactions",
      remitterlogin:
        "remitterlogin : Authenticate an existing remitter before performing transactions",
      RemitterRegistration: "RemitterRegistration : Register a new remitter to enable payout services",
    },
    BenificiaryManagement: {
      title: "Beneficiary Management",
      content: "A Beneficiary is the recipient of the payout amount",
      AddBeneficiary: "AddBeneficiary : Add a new beneficiary bank account under a remitter",
      DeleteBeneficiary: " DeleteBeneficiary : Remove an existing beneficiary",
      VerifyBeneficiary:
        " VerifyBeneficiary : Validate beneficiary bank account details before initiating a payout",
    },
    TransactionProcessing: {
      title: "TransactionProcessing",
      content: "Execute and monitor payout transactions",
      PayoutTransfer: "PayoutTransfer : Initiate a payout to a beneficiary bank account",
      CheckTransactionStatus:
        " CheckTransactionStatus : Track the status of payout transactions in real time.",
    },
    WebhookNotifications: {
      title: "Webhook Notifications",
      Webhook:
        "Receive real-time notifications for payout transaction updates such as success, pending, or failed status. This allows your system to automatically update transaction records without repeatedly polling the API",
    },

    keyBenifits: [
      "Secure token-based authentication",
      "Real-time transaction tracking",
      "Easy beneficiary and remitter management",
      "Reliable webhook notifications for instant updates",
      "Scalable payout infrastructure for business applications",
    ],
  },

  BBPSAPI: {
    // id: 2,
    title: "SOLITECK BBPS API Offline | Digital Transformation made easy",

    intro: {
      title: "BBPS Offline API Documentation",
      content:
        "The BBPS Offline API enables businesses and developers to integrate Bharat Bill Payment System (BBPS) services into their applications for seamless bill payment processing.This API allows developers to retrieve biller services, validate bill details, fetch billing information, and process bill payments securely. It also supports webhook notifications for real-time updates on transaction statuses such as success, pending, or failed",
    },
    Authentication: {
      title: "Authentication",
      content:
        "Before accessing BBPS services, your application must authenticate with the API",
      GenerateToken: "Create a secure access token required to call BBPS APIs",
      VerifyToken:
        "Validate the generated token before performing bill-related operations",
    },

    BillValidation: {
      GetBBPSBillValidations:
        "Fetch the required validation parameters for a selected biller before initiating bill payments.",
    },

    BillInfornmation: {
      BillFetch:
        "Retrieve bill details such as bill amount, due date, and customer information before making a payment",
    },

    BillPayment: {
      Billpay: "Initiate a bill payment transaction through the BBPS system",
    },
    WebhookNotifications: {
      Webhook:
        "Receive real-time notifications about bill payment transaction updates, including success, pending, or failed statuses.his allows your system to automatically update transaction records without repeatedly polling the API",
    },
    KeyFeatures: [
      "Secure token-based authentication",
      "Simple bill validation and bill fetching process",
      "Reliable BBPS bill payment transactions",
      "Support for multiple biller services",
      "Real-time webhook notifications for transaction updates",
    ],
  },

  MobileRechargeAPI: {
    title: "SOLITECK Mobile Recharge API | Digital Transformation made easy",
    intro: {
      title: "Mobile Recharge API Documentation",
      content:
        "The Mobile Recharge API allows businesses and developers to integrate mobile recharge services directly into their applications. This API provides a secure and reliable way to perform prepaid mobile recharges across multiple telecom operators.Using this API, developers can authenticate their application, initiate recharge transactions, and receive responses indicating whether the recharge was successful, pending, or failed",
    },
    Authentication: {
      title: "Authentication",
      content:
        "Before making any recharge requests, your system must authenticate with the API.",
      GenerateToken:
        "Create an access token required to authorize API requests",
      VerifyToken:
        "Validate the generated token before performing recharge operations",
    },
    RechargeService: {
      title: "RechargeService",

      content:
        "The Mobile Recharges endpoint allows you to initiate prepaid recharge transactions for supported telecom operators",
    },

    Apitesting: {
      title: "ApiTesting",
      content:
        "For testing purposes, specific operator codes and recharge amounts can be used to simulate different transaction responses",
      successresponse: {
        title: "successresponse",
        content:
          "Use the Jio Operator ApiCode with any of the following recharge amounts:",
        amounts: [19, 29, 119],
      },
    },
    pendingresponse: {
      title: "Pending response",
      content: "Use the Airtel Operator ApiCode with any recharge amount",
    },
    FailedResponse: {
      title: "FailedResponse",
      content:
        "Use any remaining Operator ApiCode with any recharge amount to simulate a failed transaction",
    },
    keyfeatures: [
      "Secure token-based authentication",
      "Fast and reliable mobile recharge processing",
      "Multiple operator support",
      "Easy testing with predefined response scenarios",
      "Simple integration for web and mobile applications",
    ],
  },

  DTHAPI: {
    title: "SOLITECK DTH API | Digital Transformation made easy",
    intro: {
      title: "DTH Recharge API Documentation",
      content:
        "The DTH Recharge API enables businesses and developers to integrate Direct-To-Home (DTH) recharge services into their applications quickly and securely. This API allows you to perform recharge transactions for multiple DTH service providers through a simple and reliable interface.Using this API, developers can authenticate their system, initiate DTH recharge requests, and receive real-time responses indicating whether the recharge transaction was successful, pending, or failed.",
    },
    Authentication: {
      title: "Authentication",
      content:
        "Before accessing DTH recharge services, your application must authenticate with the API.",
      GenerateToken: "Generate a secure access token required to call the API",
      VerifyToken:
        "Validate the generated token before making recharge requests.",
    },
    DTHRechargeService: {
      title: "DTH Recharge Service",
      content:
        "The DTH Recharges endpoint allows you to perform recharge transactions for supported DTH operators ",
      contentoptions: [
        "Initiate DTH recharge transactions",
        "Support multiple DTH providers",
        "Receive instant transaction responses",
        "Track recharge status within your application",
      ],
    },
    keyfeatures: [
      "Secure token-based authentication",
      "Fast and reliable DTH recharge processing",
      "Support for multiple DTH operators",
      "Easy integration with web and mobile platforms",
      "Clear success, pending, and failed transaction responses",
    ],
  },
  bbpsonline: {
    title: "SOLITECK BBPS API Online | Digital Transformation made easy",

  }
};
