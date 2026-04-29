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
      topText: "/DTHRecharge",
      subInforamtion: 'This API is used to perform DTH recharge for a given customer/account number using the specified operator. It requires details such as customer ID, recharge amount, execution mode, and operator API code.',
      notes: ["For Uat Testing:", "For Success, use the DishTv Operator ApiCode with amounts 200", "For Pending, use the TataSky ApiCode", "For Failed, use any remaining ApiCode"],
      title: "DTH Recharges",
      request: "All headers required",



      post: {
        CustomerDetails: "1234567890",
        Amount: "10",
        ClientOrderId: "MERCHANT ORDER ID (should be unique)",
        ExcecutionMode: "1 for Web And 2 for Android",
        ApiCode: "Use operator key",
      },

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Success",
            data: "TOKEN",
            responseData: "{\"Amount\":\"19\",\"VendorRefNumber\":\"111111111-22222222222\",\"TransactionMode\":\"0\",\"ExecutionMode\":\"1\",\"StatusId\":\"1\",\"SPTransactionRef\":null,\"CustomerDetails\":\"1234567890\",\"TransactionName\":\"Recharge\",\"TimeSeconds\":\"23454\"}",
          },
        },
        {
          id: 2,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Pending",
            data: "TOKEN",
            responseData: "{\"Amount\":\"200\",\"VendorRefNumber\":\"22222222222\",\"TransactionMode\":\"0\",\"ExecutionMode\":\"1\",\"StatusId\":\"3\",\"SPTransactionRef\":\"22222222222\",\"CustomerDetails\":\"1234567890\",\"TransactionName\":\"Recharge\",\"TimeSeconds\":\"23454\"}",
          },
        },

        {
          id: 3,
          info: "",
          code: {
            responseCode: 204,
            responseMessage: "Failed",
            data: "TOKEN",
            responseData: "{\"Amount\":\"19\",\"VendorRefNumber\":\"22222222222\",\"TransactionMode\":\"0\",\"ExecutionMode\":\"1\",\"StatusId\":\"0\",\"SPTransactionRef\":\"22222222222\",\"CustomerDetails\":\"1234567890\",\"TransactionName\":\"Recharge\",\"TimeSeconds\":\"23454\"}",
          },
        },

        ],





        error: [{
          id: 1,
          info: "",
          code: {

            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
            signalR: null

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
            signalR: null

          },
        },
        ],
      },

      table: {
        response: {
          title: "DTH Recharge Response",
          tableData: [
            { key: "Amount", description: "Recharge Amount" },
            { key: "VendorRefNumber", description: "UTR / Reference ID" },
            { key: "TransactionMode", description: "Transaction Mode" },
            { key: "ExecutionMode", description: "Execution Mode" },
            { key: "StatusId", description: "1=Success, 0=Failed, 3=Pending" },
            { key: "SPTransactionRef", description: "Unique Transaction Ref" },
            { key: "CustomerDetails", description: "Mobile Number" },
            { key: "TimeSeconds", description: "Transaction Time" },
            { key: "TransactionName", description: "Transaction Name" },
          ],
        },
        operators: {
          title: "DTH Operators",
          tableData: [
            { key: "  1279", description: "Airtel Digital TV" },
            { key: "  1280", description: "Dish TV" },
            { key: "  1281", description: "SunDirect" },
            { key: "  1282", description: "Tata Sky" },
            { key: "  1283", description: "BIG TV" },
            { key: "  1284", description: "Videocon" },
          ],
        },

      },


    },

  ],
};

