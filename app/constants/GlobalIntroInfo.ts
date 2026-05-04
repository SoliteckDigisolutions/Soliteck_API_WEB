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
  subTitle?: string;
  subTitleContent?: string;
  subContent?: SubContent[];
}

type GlobalnotesInfo = Record<string, InfoType>;

export const IntroInfo: GlobalnotesInfo = {
 
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

      // {
      //   title: "API Testing",
      //   content:
      //     "For testing purposes, specific operator codes and recharge amounts can be used to simulate different transaction responses.",
      //   data: [
      //     {
      //       title: "Success Response (200)",
      //       content:
      //         "Use the Jio Operator ApiCode - 1272 with recharge amounts like 19, 29, or 119 to simulate a successful recharge.",
      //     },
      //     {
      //       title: "Pending Response (201)",
      //       content:
      //         "Use the Airtel Operator ApiCode - 1273 with any recharge amount to simulate a pending transaction.",
      //     },
      //     {
      //       title: "Failed Response (204)",
      //       content:
      //         "Use any remaining Operator ApiCode - 1274 with any recharge amount to simulate a failed transaction.",
      //     },
      //   ],
      // },
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
  ccbpapi: {
    mainHeading: "SOLITECK CC Bill Pay API | Digital Transformation made easy",

    subTitle: "CC Bill Pay API Documentation",

    subTitleContent:
      "The CC Bill Pay API enables businesses and developers to securely process credit card bill payments through a seamless and automated system. This API simplifies payment operations by providing endpoints for authentication, operator retrieval, and transaction processing. With this API, you can generate and verify tokens, fetch available card networks, initiate bill payments, and track transaction status in real time. It ensures a reliable and scalable way to integrate credit card payment services into your applications.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing any CC Bill Pay service, you must authenticate your application.",
        data: [
          {
            title: "GenerateToken",
            content:
              "Create a secure access token required to call CC Bill Pay APIs.",
          },
          {
            title: "VerifyToken",
            content:
              "Validate the generated token before performing operations.",
          },
        ],
      },

      {
        title: "Operator Management",
        content:
          "Retrieve available credit card networks required for bill payment transactions.",
        data: [
          {
            title: "GetOperators",
            content:
              "Fetch the list of supported card networks such as VISA, Mastercard, AMEX, and RUPAY along with their API codes.",
          },
        ],
      },

      {
        title: "Transaction Processing",
        content: "Execute and manage credit card bill payment transactions.",
        data: [
          {
            title: "CCBillPay",
            content:
              "Initiate a credit card bill payment by providing card details, amount, and operator information.",
          },
          {
            title: "TransactionStatus",
            content:
              "Track the status of transactions using response codes and API responses (Success, Pending, Failed).",
          },
        ],
      },

      {
        title: "API Testing",
        content:
          "Use predefined card numbers to simulate different transaction scenarios during testing.",
        data: [
          {
            title: "Success Transaction",
            content:
              "Use Card Number 1111111111111111 to simulate a successful transaction.",
          },
          {
            title: "Pending Transaction",
            content:
              "Use Card Number 2222222222222222 to simulate a pending transaction.",
          },
          {
            title: "Failed Transaction",
            content:
              "Use Card Number 3333333333333333 to simulate a failed transaction.",
          },
        ],
      },


    ],
  },
  bbpsapionline: {
    mainHeading: "SOLITECK BBPS Online Transaction API | Digital Transformation made easy",

    subTitle: "BBPS Online Transaction API Documentation",

    subTitleContent:
      "The BBPS Online Transaction API enables businesses and developers to integrate bill payment services across multiple categories such as electricity, DTH, education, and loans. This API provides a seamless flow for fetching services, retrieving billers, validating bills, and completing payments. With this API, you can authenticate your system, fetch bill details, and process bill payments efficiently while tracking transaction statuses in real time.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing any BBPS services, you must authenticate your application.",
        data: [
          {
            title: "GenerateToken",
            content:
              "Create a secure access token required to call BBPS APIs.",
          },
          {
            title: "VerifyToken",
            content:
              "Validate the generated token before performing operations.",
          },
        ],
      },

      {
        title: "Service Management",
        content:
          "Retrieve available bill payment service categories.",
        data: [
          {
            title: "GetServices",
            content:
              "Fetch the list of supported services such as EDUCATION, LOAN, ELECTRICITY, and DTH along with their IDs.",
          },
        ],
      },

      {
        title: "Biller Management",
        content:
          "Retrieve billers based on selected service category.",
        data: [
          {
            title: "GetBillers",
            content:
              "Fetch the list of billers using serviceId obtained from GetServices API.",
          },
        ],
      },

      {
        title: "Bill Validation",
        content:
          "Validate and fetch bill details before making payment.",
        data: [
          {
            title: "BillFetch",
            content:
              "Retrieve customer bill details such as amount due, customer name, and reference ID required for payment.",
          },
        ],
      },

      {
        title: "Transaction Processing",
        content:
          "Execute and monitor bill payment transactions.",
        data: [
          {
            title: "BillPay",
            content:
              "Initiate bill payment using biller details, amount, and reference ID.",
          },
          {
            title: "TransactionStatus",
            content:
              "Track transaction status using response codes such as SUCCESS, PENDING, or FAILED.",
          },
        ],
      },

      {
        title: "Response Handling",
        content:
          "Understand API responses for proper transaction tracking and system integration.",
        data: [
          {
            title: "Success Response",
            content:
              "200 indicates a successful bill payment with transaction details.",
          },
          {
            title: "Pending Response",
            content:
              "201 indicates the transaction is in pending state.",
          },
          {
            title: "Failed Response",
            content:
              "204 indicates the transaction has failed.",
          },
        ],
      },
    ],
  },
  pgapi: {
    mainHeading: "SOLITECK PG API | Digital Transformation made easy",

    subTitle: "PG API Documentation",

    subTitleContent:
      "The ulk Pay API enables businesses and developers to process PG and card-based fund collections seamlessly. This API provides endpoints for authentication, sender management, card registration, beneficiary management, and transaction processing. Using this API, you can register senders, add card details, create beneficiaries, generate collection URLs, and manage PG transactions efficiently.",

    subContent: [
      {
        title: "Authentication",
        content:
          "Before accessing any PG services, you must authenticate your application.",
        data: [
          {
            title: "GenerateToken",
            content:
              "Create a secure access token required to call PG APIs.",
          },
          {
            title: "VerifyToken",
            content:
              "ValiBdate the generated token before performing operations.",
          },
        ],
      },

      {
        title: "Sender Management",
        content:
          "Manage sender details for initiating PG transactions.",
        data: [
          {
            title: "SenderLogin",
            content:
              "Authenticate sender using mobile number and retrieve sender details including cards and beneficiaries.",
          },
          {
            title: "CreateSender",
            content:
              "Register a new sender with PAN, Aadhaar, and mobile number to enable PG services.",
          },
        ],
      },

      {
        title: "Card Management",
        content:
          "Manage card details linked with sender for transaction processing.",
        data: [
          {
            title: "AddCardDetails",
            content:
              "Add and register a card under a sender including card number, CVV, and expiry details.",
          },
        ],
      },

      {
        title: "Beneficiary Management",
        content:
          "Manage beneficiary accounts for payout transactions.",
        data: [
          {
            title: "CreateBeneficiary",
            content:
              "Add a beneficiary bank account using account number and IFSC linked to sender.",
          },
        ],
      },

      {
        title: "Transaction Processing",
        content:
          "Execute and manage PG transactions.",
        data: [
          {
            title: "CardCollectionUrl",
            content:
              "Generate a collection URL for processing transactions and distributing payouts to beneficiaries.",
          },
        ],
      },

      {
        title: "Validation Rules",
        content:
          "Ensure valid transaction amounts before processing.",
        data: [
          {
            title: "Minimum Amount",
            content: "Amount should be greater than or equal to 500.",
          },
          {
            title: "Maximum Amount",
            content: "Amount should not exceed 14,000.",
          },
        ],
      },

      {
        title: "Response Handling",
        content:
          "Understand API responses for proper transaction tracking and integration.",
        data: [
          {
            title: "Success",
            content: "200 indicates successful operation.",
          },
          {
            title: "Pending/Validation",
            content:
              "204 indicates validation issues like amount limits.",
          },
          {
            title: "Client Errors",
            content:
              "400 indicates issues like duplicate entries or invalid data.",
          },
          {
            title: "Authentication Error",
            content:
              "401 indicates token expired or invalid.",
          },
          {
            title: "Server Error",
            content:
              "500 indicates internal server error.",
          },
        ],
      },


    ],
  },
  webhook: {
    mainHeading: "Soliteck Webhook",
    subTitleContent : "A webhook is a real-time callback mechanism that allows our system to notify your server when a transaction status changes (e.g., success, failure, pending). Instead of repeatedly calling the status API, your system will automatically receive updates.",
    subContent: [
      {
        title: "Webhook URL Setup",
        content:
          "You must provide a public HTTPS endpoint (POST API) to receive webhook notifications.",
        data: [
          {
            title: "Ensure",
            content:
              "Endpoint is accessible over the internet | Supports POST method | Accepts JSON payload",
          },
          {
            title: "Url:",
            content:
              "https://yourdomain.com/api/webhook/transaction-status",
          }
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
    ]

  },
   aepsapi: {
    mainHeading: "SOLITECK PayOut API | Digital Transformation made easy",
    subTitleContent : "AEPS API allows Aadhaar-based banking services like cash withdrawal, balance inquiry, and mini statements using biometric authentication. It provides secure, real-time transaction processing and enables seamless integration of assisted banking services into your platform.",
    subTitle: "AEPS API Documentation",


  },
  cts: {
    mainHeading: "Check Transaction Status",
    
    subTitleContent: "Transaction status can be checked only in the production environment using the API provided below. This API is intended for production use only.",
    subContent: [
      {
        title: "Transaction Status",
        content:
          "Check the real-time status of a payout transaction using a unique reference number or transaction ID",
        data: [
          {
            title: "Status API",
            content:
              "Use this API to fetch the current status of a transaction such as success, pending, or failed. This helps in tracking payment progress and updating your system records accordingly. It is especially useful when webhook responses are delayed or missed.",
          },
          {
            title: "Use Case",
            content:
              "Ideal for verifying transaction outcomes, handling customer queries, reconciling payments, and ensuring accurate financial reporting in your system.",
          },
          {
            title: "Response Details",
            content:
              "The API response typically includes transaction status, amount, beneficiary details, reference ID, and failure reason (if any), allowing you to take appropriate action based on the result.",
          },
        ],
      },
    ],
  },
   dmt: {
    mainHeading: "SOLITECK DMT API | Digital Transformation made easy",
    subTitle: "DMT API Documentation",
    subTitleContent: "DMT API allows users to send money to bank accounts using mobile numbers. It provides seamless, real-time transaction processing and enables instant fund transfers with secure, reliable integration.",
   
  }
};
