import { MainInterface } from "@/app/types/MainPage";

export const MobileDocs: MainInterface = {
  title: "SOLITECK MOBILE REG API | Digital Transformation made easy",

  BaseUrls: {
    link: " https://api-uat.soliteck.in/uat/api/RechargeTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    {
      title: "Generate Token",
      post: "TOKEN",
      topText: "/GenerateUATToken",
      request:
        "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Token Generated Success",
              data: "Generated Token",
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
      post: "TOKEN",
      topText: "/VerifyUATToken",
      request: "All headers required",

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
      id: 4,
      title: "Mobile Recharges",
      intro: ["For Uat Testing:", "For Success, use the Jio Operator ApiCode with amounts 19, 29, or 119", "For Pending, use the Airtel ApiCode", "For Failed, use any remaining ApiCode"],
      topText: "{Recharge Base URL}/MobileRecharge",
      request: "All headers Required",
      post: {
        CustomerDetails: "1234567890",
        Amount: "10",
        ClientOrderId: "MERCHANT ORDER ID (should be unique)",
        ExcecutionMode: "1 for Web And 2 for Android",
        ApiCode: "",
      },

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Recharge Success",
              data: "TOKEN",
              responseData:
                '{"Amount":"19","VendorRefNumber":"111111111-22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"1","SPTransactionRef":null,"CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
              signalR: null,
            },
          },
          {
            id: 2,
            info: "",
            code: {
              responseCode: 201,
              responseMessage: "Recharge pending",
              data: "TOKEN",
              responseData:
                '{"Amount":"19","VendorRefNumber":"22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"3","SPTransactionRef":"22222222222","CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
              signalR: null,
            },
          },
          {
            id: 3,
            info: "",
            code: {
              responseCode: 204,
              responseMessage: "Recharge Failed",
              data: "TOKEN",
              responseData:
                '{"Amount":"19","VendorRefNumber":"22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"0","SPTransactionRef":"22222222222","CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
              signalR: null,
            },
          },
        ],
        error: [
          {
            id: 1,
            info: "",
            code: {
              //401
              responseCode: 401,
              responseMessage: "Token Expired / Invalid, Please login again.",
              data: null,
              responseData: null,
              signalR: null,
              // text: "For Token Expiry",
            },
          },
          {
            id: 2,
            info: "",
            code: {
              //402
              responseCode: 400,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
              // text: "In case of any error1 ",
            },
          },
        ],



      },

      table: {
        responseKeysTable: {
          id: 4,
          title: "Mobile Recharge Response",
          tableData: [
            { key: "Amount", description: "Amount" },
            { key: "VendorRefNumber", description: "UTR / Other Reference ID" },
            { key: "TransactionMode", description: "Transaction Mode" },
            { key: "ExecutionMode", description: "Execution Mode" },
            { key: "StatusId", description: "1 = Success, 0 = Failed, 3 = Pending" },
            { key: "SPTransactionRef", description: "Unique Transaction Ref" },
            { key: "CustomerDetails", description: "Mobile Number" },
            { key: "TimeSeconds", description: "Time of Transaction" },
            { key: "TransactionName", description: "Transaction Name" },
          ],
        },
        operators: {
          title: "Mobile Operators",
          tableData: [
            { key: "  1272", description: "Jio" },
            { key: "  1273", description: "Airel" },
            { key: "  1274", description: "Vodafone" },
            { key: "  1275", description: "MTNL" },
            { key: "  1276", description: "BSNL Top-Up" },
            { key: "  1277", description: "BSNL Special" },
            { key: "  1278", description: "Idea" },
          ],
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation..",
    },
  ],
};
