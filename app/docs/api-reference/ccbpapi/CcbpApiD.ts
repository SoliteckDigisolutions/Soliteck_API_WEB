import { MainInterface } from "../../../types/MainPage";

export const CcBpApiD: MainInterface = {
  title: "SOLITECK CC BILL PAY API | Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/NGGCCBillPayUat",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    {
      title: "Generate Token",
      topText: "/GenerateUATToken",
      request: "All headers required",

      post: "TOKEN",

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Token Generated Success",
              data: "Generated TOKEN",
              responseData: null,
              signalR: null,
            },
          },
        ],
        error: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 400,
              responseMessage: "Client_Id is not present",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },
    },

    {
      title: "Verify Token",
      topText: "/VerifyUATToken",
      request: "All headers required",

      post: "TOKEN",

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Token Is Valid",
              data: "Token",
              responseData: null,
              signalR: null,
            },
          },
        ],
        error: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 400,
              responseMessage: "Token Expired, Re-Generate Token",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },
    },

    {
      title: "Get Operators",
      topText: "/NGG_CCBillPayGetOperators",
      subInforamtion: "This API fetches the list of available credit card operators using the provided token. It returns operator IDs and names (e.g., VISA, Mastercard, AMEX, RuPay).",
      request: "All headers required",

      post: "TOKEN",

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Operators Found",
              data: "Token",
              responseData:
                '[{"Id":22953,"OperatorName":"APIUser_GEN_CC_VISA"},{"Id":22954,"OperatorName":"APIUser_GEN_CC_Mastercard"},{"Id":22955,"OperatorName":"APIUser_GEN_CC_AMEX"},{"Id":22956,"OperatorName":"APIUser_GEN_CC_RUPAY"}]',
              signalR: null,
            },
          },
        ],
        error: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 401,
              responseMessage: "Token Expired / Invalid, Please login again.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
          {
            id: 2,
            info: "",
            code: {
              responseCode: 400,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },

      table: {
        operatorsTable: {
          id: 1,
          tableData: [
            { key: 22953, description: "APIUser_GEN_CC_VISA" },
            { key: 22954, description: "APIUser_GEN_CC_Mastercard" },
            { key: 22955, description: "APIUser_GEN_CC_AMEX" },
            { key: 22956, description: "APIUser_GEN_CC_RUPAY" },
          ],
        },
      },

      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation.",
    },

    {
      title: "CC Bill Pay",
      subInforamtion: "This API is used to perform credit card bill payment using card and operator details. It requires card information, amount, network type, operator ID, and a unique client order ID.",
      notes: [
        "For Failed, use the Card Number = '3333333333333333'",
        "For Success, use the Card Number = '1111111111111111'",
        "For Pending, use the Card Number = '2222222222222222'"
      ],
      topText: "/NGG_CCBillPay",
      request: "All headers required",

      post: {
        Name: "Card Holder Name",
        CardNumber: "Card Number",
        Amount: "Amount to be paid",
        Network: "VISA|Mastercard|AMEX|RUPAY",
        PayeeName: "Payee Name",
        ApiCode: "Operator Id",
        ClientOrderId: "Unique ID",
      },

      response: {
        success: [
          {
            id: 1,
            info: "Success",
            code: {
              responseCode: 200,
              responseMessage:
                "Transaction Successful. Payment done to card |VISA",
              data: "Token",
              responseData:
                '{"MobileNumber":"9920601290","Amount":"11","ProductId":"SP_GenBill","OperatorId":"GEN_CC_VISA","VendorRefNumber":"177636364578070011","TransactionMode":"WALLET","ExecutionMode":"1","SPTransactionRef":"1638992332529576","CardNumber":"XXXX-XXXX-XXXX-9297","PayeeName":"ADARSH","TransactionName":"CCBillPay","TimeSeconds":"41185853"}',
              signalR: null,
            },
          },
          {
            id: 2,
            info: "Pending",
            code: {
              responseCode: 201,
              responseMessage: "Transaction Pending",
              data: "Token",
              responseData:
                '{"MobileNumber":"9920601290","Amount":"11","ProductId":"SP_GenBill","OperatorId":"GEN_CC_VISA","VendorRefNumber":"177636364578070011","TransactionMode":"WALLET","ExecutionMode":"1","SPTransactionRef":"1638992332529576","CardNumber":"XXXX-XXXX-XXXX-9297","PayeeName":"ADARSH","TransactionName":"CCBillPay","TimeSeconds":"41185853"}',
              signalR: null,
            },
          },
          {
            id: 3,
            info: "Failed",
            code: {
              responseCode: 204,
              responseMessage: "Transaction Failed",
              data: "Token",
              responseData:
                '{"MobileNumber":"9920601290","Amount":"11","ProductId":"SP_GenBill","OperatorId":"GEN_CC_VISA","VendorRefNumber":"177636364578070011","TransactionMode":"WALLET","ExecutionMode":"1","SPTransactionRef":"1638992332529576","CardNumber":"XXXX-XXXX-XXXX-9297","PayeeName":"ADARSH","TransactionName":"CCBillPay","TimeSeconds":"41185853"}',
              signalR: null,
            },
          },
        ],

        error: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 401,
              responseMessage: "Token Expired / Invalid, Please login again.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
          {
            id: 2,
            info: "",
            code: {
              responseCode: 400,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },

      table: {
        responseKeys: {
          id: 1,
          title: `RESPONSE PARAMETERS IN responseData

`,

          tableData: [
            { key: "MobileNumber", description: "API User Mobile Number" },
            { key: "Amount", description: "Amount to be paid" },
            { key: "ProductId", description: "Product Name" },
            { key: "OperatorId", description: "Operator Name" },
            { key: "VendorRefNumber", description: "Vendor Reference Number" },
            {
              key: "TransactionMode",
              description: "Transaction Mode (Wallet)",
            },
            { key: "ExecutionMode", description: "1 – Web / 2 – Android" },
            {
              key: "SPTransactionRef",
              description: "Soliteck Transaction Ref",
            },
            { key: "CardNumber", description: "Masked Card Number" },
            { key: "PayeeName", description: "Payee Name" },
            { key: "TransactionName", description: "Transaction Name" },
            { key: "TimeSeconds", description: "Transaction Time in Seconds" },
          ],
        },
      },

      note: "Parse responseData to get transaction details",
    },
  ],
};
