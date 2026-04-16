import { MainInterface } from "@/app/types/MainPage";

export const dthApiD: MainInterface = {
  title: "SOLITECK DTH API | Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/RechargeTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    {
      id: 4,
      topText: "/DTHRecharge",
      title: "DTH Recharges",
      request: "All headers required",



      post: {
        CustomerDetails: "1234567890",
        Amount: "10",
        ClientOrderId: "MERCHANT ORDER ID (should be unique)",
        ExcecutionMode: "1 for Web And 2 for Android",
        key: "Use operator key",
      },

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Success",
            data: "TOKEN",
            responseData: {
              Amount: "19",
              VendorRefNumber: "111111111-22222222222",
              TransactionMode: "0",
              ExecutionMode: "1",
              StatusId: "1",
              SPTransactionRef: null,
              CustomerDetails: "1234567890",
              TransactionName: "Recharge",
              TimeSeconds: "23454",
            },
          },
        },
        {
          id: 2,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Pending",
            data: "TOKEN",
            responseData: {
              Amount: "200",
              VendorRefNumber: "22222222222",
              TransactionMode: "0",
              ExecutionMode: "1",
              StatusId: "3",
              SPTransactionRef: "22222222222",
              CustomerDetails: "1234567890",
              TransactionName: "Recharge",
              TimeSeconds: "23454",
            },
          },
        },

        {
          id: 3,
          info: "",
          code: {
            responseCode: 204,
            responseMessage: "Failed",
            data: "TOKEN",
            responseData: {
              Amount: "19",
              VendorRefNumber: "22222222222",
              TransactionMode: "0",
              ExecutionMode: "1",
              StatusId: "0",
              SPTransactionRef: "22222222222",
              CustomerDetails: "1234567890",
              TransactionName: "Recharge",
              TimeSeconds: "23454",
            },
          },
        },

        ],





        error: [{
          id: 1,
          info: "",
          code: {
            responseCode: 401,
            responseMessage: "Token Expired / Invalid",
          },
        },

        {
          id: 2,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Error Message",
          },
        },
        ],
      },

      table: {
        response: {
          title: "ResponseData Keys Explanation",
          tableData: [
            { key: "Amount", description: "Recharge Amount" },
            { key: "VendorRefNumber", desc: "UTR / Reference ID" },
            { key: "TransactionMode", desc: "Transaction Mode" },
            { key: "ExecutionMode", desc: "Execution Mode" },
            { key: "StatusId", desc: "1=Success, 0=Failed, 3=Pending" },
            { key: "SPTransactionRef", desc: "Soliteck Transaction Ref" },
            { key: "CustomerDetails", desc: "Mobile Number" },
            { key: "TimeSeconds", desc: "Transaction Time" },
            { key: "TransactionName", desc: "Transaction Name" },
          ],
        },
        operators: {
          title: "DTH Operators",
          tableData: [
            { key: "ApiCode : 1279", description: "Airtel Digital TV" },
            { key: "ApiCode : 1280", description: "Dish TV" },
            { key: "ApiCode : 1281", description: "SunDirect" },
            { key: "ApiCode : 1282", description: "Tata Sky" },
            { key: "ApiCode : 1283", description: "BIG TV" },
            { key: "ApiCode : 1284", description: "Videocon" },
          ],
        },

      },


    },

  ],
};

