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
            info: "Hi",
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
              responseMessage: " Success",
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
              responseMessage: "pending",
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
              responseMessage: "Failed",
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
            info: "Add Siome extarc info",
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
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation..",
    },
  ],
};
