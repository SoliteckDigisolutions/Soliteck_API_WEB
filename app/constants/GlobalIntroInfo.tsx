interface DataItem {
  title: string;
  content: string;
}

interface SubContent {
  title: string;
  content: string;
  data: DataItem[];
}

interface InfoType {
  mainHeading: string;
  subTitle: string;
  subTitleContent: string;
  subContent: SubContent[];
}

type GlobalIntroInfo = Record<string, InfoType>;

export const IntroInfo: GlobalIntroInfo = {
  payoutapi: {
    mainHeading: "SOLITECK PayOut API | Digital Transformation made easy",
    subTitle: "Payout API Documentation",
    subTitleContent:
      "The Payout API enables businesses and developers to securely transfer funds to bank accounts through a seamless and automated system. This API is designed to simplify payout operations by providing endpoints for authentication, remitter management, beneficiary management, and transaction processing With this API, you can register remitters, manage beneficiaries, initiate payouts, and track transaction status in real time. It ensures a reliable and scalable way to integrate payout services into your applications.",
    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing any payout service, you must authenticate your application.",
        data: [
          {
            title: "GenerateToken",
            content:
              "Create a secure access token required to call payout APIs",
          },
          {
            title: "Verify  Token",
            content:
              "Validate the generated token before performing operations.",
          },
        ],
      },
      {
        title: "Bank & IFSC Information",
        content: "Retrieve banking information required for successful payouts",
        data: [
          {
            title: "GetBanksForPayout",
            content:
              "Fetch the list of supported banks available for payout transactions",
          },
          {
            title: "GetMasterIFSCForPayout",
            content:
              "Retrieve IFSC details required for bank verification and payout routing",
          },
        ],
      },
      {
        title: "Remitter Management",
        content: "A Remitter is the user who initiates payout transactions",
        data: [
          {
            title: "RemitterLogin",
            content:
              "Authenticate an existing remitter before performing transactions",
          },
          {
            title: "RemitterRegistration",
            content: "Register a new remitter to enable payout services",
          },
        ],
      },
      {
        title: "Beneficiary Management",
        content: "A Beneficiary is the recipient of the payout amount",
        data: [
          {
            title: "AddBeneficiary",
            content: "Add a new beneficiary bank account under a remitter",
          },
          {
            title: "DeleteBeneficiary",
            content: "Remove an existing beneficiary",
          },
          {
            title: "VerifyBeneficiary",
            content:
              "Validate beneficiary bank account details before initiating a payout",
          },
        ],
      },
      {
        title: "Transaction Processing",
        content: "Execute and monitor payout transactions",
        data: [
          {
            title: "PayoutTransfer",
            content: "Initiate a payout to a beneficiary bank account",
          },
          {
            title: "CheckTransactionStatus",
            content: "Track the status of payout transactions in real time",
          },
        ],
      },
      {
        title: "Webhook Notifications",
        content:
          "Receive real-time notifications for payout transaction updates",
        data: [
          {
            title: "Webhook",
            content:
              "Receive real-time notifications for payout transaction updates such as success, pending, or failed status. This allows your system to automatically update transaction records without repeatedly polling the API",
          },
        ],
      },
    ],
  },
  bbpsapi: {
    mainHeading: "SOLITECK BBPS API Offline | Digital Transformation made easy",

    subTitle: "BBPS Offline API Documentation",

    subTitleContent:
      "The BBPS Offline API enables businesses and developers to integrate Bharat Bill Payment System (BBPS) services into their applications for seamless bill payment processing. This API allows developers to retrieve biller services, validate bill details, fetch billing information, and process bill payments securely. It also supports webhook notifications for real-time updates on transaction statuses such as success, pending, or failed.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing BBPS services, your application must authenticate with the API.",
        data: [
          {
            title: "GenerateToken",
            content: "Create a secure access token required to call BBPS APIs",
          },
          {
            title: "VerifyToken",
            content:
              "Validate the generated token before performing bill-related operations",
          },
        ],
      },

      {
        title: "Bill Validation",
        content:
          "Validate required biller parameters before initiating bill payments.",
        data: [
          {
            title: "GetBBPSBillValidations",
            content:
              "Fetch the required validation parameters for a selected biller before initiating bill payments.",
          },
        ],
      },

      {
        title: "Bill Information",
        content: "Retrieve billing information before making a payment.",
        data: [
          {
            title: "BillFetch",
            content:
              "Retrieve bill details such as bill amount, due date, and customer information before making a payment.",
          },
        ],
      },

      {
        title: "Bill Payment",
        content: "Process BBPS bill payment transactions.",
        data: [
          {
            title: "BillPay",
            content:
              "Initiate a bill payment transaction through the BBPS system.",
          },
        ],
      },

      {
        title: "Webhook Notifications",
        content:
          "Receive real-time notifications about bill payment transaction updates.",
        data: [
          {
            title: "Webhook",
            content:
              "Receive real-time notifications about bill payment transaction updates, including success, pending, or failed statuses. This allows your system to automatically update transaction records without repeatedly polling the API.",
          },
        ],
      },
    ],
  },
  mobileapi: {
    mainHeading:
      "SOLITECK Mobile Recharge API | Digital Transformation made easy",

    subTitle: "Mobile Recharge API Documentation",

    subTitleContent:
      "The Mobile Recharge API allows businesses and developers to integrate mobile recharge services directly into their applications. This API provides a secure and reliable way to perform prepaid mobile recharges across multiple telecom operators. Using this API, developers can authenticate their application, initiate recharge transactions, and receive responses indicating whether the recharge was successful, pending, or failed.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before making any recharge requests, your system must authenticate with the API.",
        data: [
          {
            title: "GenerateToken",
            content:
              "Create an access token required to authorize API requests",
          },
          {
            title: "VerifyToken",
            content:
              "Validate the generated token before performing recharge operations",
          },
        ],
      },

      {
        title: "Recharge Service",
        content:
          "The Mobile Recharge endpoint allows you to initiate prepaid recharge transactions for supported telecom operators.",
        data: [
          {
            title: "MobileRecharge",
            content:
              "Initiate a prepaid recharge transaction for supported telecom operators.",
          },
        ],
      },

      {
        title: "API Testing",
        content:
          "For testing purposes, specific operator codes and recharge amounts can be used to simulate different transaction responses.",
        data: [
          {
            title: "Success Response (200)",
            content:
              "Use the Jio Operator ApiCode - 1272 with recharge amounts like 19, 29, or 119 to simulate a successful recharge.",
          },
          {
            title: "Pending Response (201)",
            content:
              "Use the Airtel Operator ApiCode - 1273 with any recharge amount to simulate a pending transaction.",
          },
          {
            title: "Failed Response (204)",
            content:
              "Use any remaining Operator ApiCode - 1274 with any recharge amount to simulate a failed transaction.",
          },
        ],
      },
    ],

    //   keyFeatures: [
    //     "Secure token-based authentication",
    //     "Fast and reliable mobile recharge processing",
    //     "Multiple operator support",
    //     "Easy testing with predefined response scenarios",
    //     "Simple integration for web and mobile applications",
    //   ],
  },
  dthRecharge: {
    mainHeading: "SOLITECK DTH API | Digital Transformation made easy",

    subTitle: "DTH Recharge API Documentation",

    subTitleContent:
      "The DTH Recharge API enables businesses and developers to integrate Direct-To-Home (DTH) recharge services into their applications quickly and securely. This API allows you to perform recharge transactions for multiple DTH service providers through a simple and reliable interface. Using this API, developers can authenticate their system, initiate DTH recharge requests, and receive real-time responses indicating whether the recharge transaction was successful, pending, or failed.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing DTH recharge services, your application must authenticate with the API.",
        data: [
          {
            title: "GenerateToken",
            content: "Generate a secure access token required to call the API",
          },
          {
            title: "VerifyToken",
            content:
              "Validate the generated token before making recharge requests.",
          },
        ],
      },

      {
        title: "DTH Recharge Service",
        content:
          "The DTH Recharges endpoint allows you to perform recharge transactions for supported DTH operators.",
        data: [
          {
            title: "DTHRecharge",
            content: "Initiate DTH recharge transactions.",
          },
          {
            title: "Multiple Providers",
            content: "Support for multiple DTH service providers.",
          },
          {
            title: "Instant Response",
            content: "Receive instant transaction responses.",
          },
          {
            title: "Track Recharge Status",
            content: "Track recharge status directly within your application.",
          },
        ],
      },
    ],

    //   keyFeatures: [
    //     "Secure token-based authentication",
    //     "Fast and reliable DTH recharge processing",
    //     "Support for multiple DTH operators",
    //     "Easy integration with web and mobile platforms",
    //     "Clear success, pending, and failed transaction responses",
    //   ],
  },
};
