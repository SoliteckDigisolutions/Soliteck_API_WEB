import { MainInterface } from "@/app/types/MainPage";

export const BbpsApiD: MainInterface = {
  title: "SOLITECK PAYOUTS(BBPS)| Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/BBPSOfflineTxn",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",



  Endpoints: [
    {
      title: "Generate Token",
      topText: "/GenerateUATToken",
      post: "TOKEN",
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


        error: [{
          id: 1,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Client_Id is not present",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
      },
      note: "The Token is valid for 20 mins after creation. To check Token validity always hit refresh token API",
    },

    {
      title: "Verify Token",
      post: "TOKEN",
      topText: "/VerifyUATToken",
      request: "All headers required",

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Token Is Valid",
            data: "Token",
            responseData: null,
            signalR: null,
          },
        },],

        error: [{
          id: 1,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Token Expired, Re-Generate Token",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
      },
      note: "-",
    },

    {
      id: 3,
      title: "Get Service/Operator",
      subInforamtion : "This API fetches the list of available offline services based on the provided flag and service name. It returns service categories such as mobile, electricity, DTH, and others.",
      extraInfo: {
        flag1: {
          name: "Flag 1: Services",
          desc: "Use this request to get the list of services available in BBPS Offline API.",
          code: "{\"Flag\":1, serviceName: \"\"}",

        },
        flag2: {
          name: "Flag 2: Operators",
          desc: "Use this request to get the list of operators available in BBPS Offline API.",
          code: "{\"Flag\":2, serviceName: \"Electricity\"}",
        },
        note: "In request body, use Flag 1 to get list of services and use Flag 2 along with service name to get list of operators for that service.",
      },
      topText: "{BBPS Base URL} /GetOfflineServices",
      post: {
        Flag: 2,
        serviceName: "Electricity",
      },

      request: "ALL HEADERS MENTIONED ABOVE",

      response: {
        // flag1: "Flag 1: Services",
        // flag2: "Flag 2: Operators",

        success: [
          {
            id: 0,
            info: "Flag 1: Services - responseData will contain list of services.",
            code: {
              responseCode: 200,
              responseMessage: "Request Success",
              responseData:
                '[{"ServiceName":"MOBILE"},{"ServiceName":"ELECTRICITY"},{"ServiceName":"DTH"},{"ServiceName":"DATACARD"},{"ServiceName":"POSTPAID"},{"ServiceName":"TELEPHONE"},{"ServiceName":"WATER"},{"ServiceName":"LANDLINE"},{"ServiceName":"LPG GAS"},{"ServiceName":"FASTAG"},{"ServiceName":"Broadband"},{"ServiceName":"LOAN PAYMENT"}]',
            },
          },

          {

            id: 1,
            info: "Flag 2: Operators - responseData will contain list of operators for the requested service.",
            code: {
              responseCode: 200,
              responseMessage: "Request Success",

              responseData:
                '{"OPId":22979,"OperatorName":"APIUser MSEDCL-Mahavitran","ProviderCode":"ELECTRICITY-70"},{"OPId":23012,"OperatorName":"APIUser BSES Yamuna DELHI","ProviderCode":"ELECTRICITY-42"}]',
            },
          },],

        error: [{
          id: 1,
          info: "",
          code: {
            //401
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
            //400
            responseCode: 400,
            responseMessage: "Error Message.",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
        ],
      },

      note: "You need to parse the responseData at your end. ",
    },
    {
      id: 4,
      title: "Get BBPS Bill Validations",
      subInforamtion: "This API validates biller details for offline services using the provided mobile number and provider code. It checks whether the biller is valid and returns required input parameters and supported payment modes.  ",
      topText: " {BBPS Base URL}/OFBillValidation ",
      post: {
        MobileNumber: "87X57X48X7",
        providerCode: "70",
      },
      notes: ["ProviderCode must be taken from the GetOfflineServices response.", `Split the ProviderCode string by -, take the last element (e.g., "ELECTRICITY-70" → "70"), and use that as the value here.`],

      request: "All headers reqiured",

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Biller Validation Success",
            data: "Token",
            responseData:
              '{"status":"success","is_validation":0,"params":[{"name":"optional1","placeholder":"Number"}],"biller_payment_modes":[{"mode":"Wallet"}]}',
          },
        }],
        error: [{
          id: 1,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Biller Validation Failed",
            data: "Token",
            responseData: null,
          },
        },
        {
          id: 2,
          info: "",
          code: {
            //401
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
            signalR: null,
          },
        },


        ]
      },
      note: "You need to parse the responseData at your end. ",
    },
    {
      id: 5,
      title: "Bill Fetch",
      topText: "{BBPS Base URL} /OFBillVerification",
      subInforamtion: "This API verifies bill details for a given provider and customer number using required parameters. It fetches bill information such as customer name, bill amount, due date, and provider details. ",
      notes: ["For Uat Testing:", "Use provider code 70 for success"],
      request: "All headers required",

      post: {
        ProviderCode: "70",
        CustomerNumber: "1111111111",
        params: {
          optional1: "187X4X6X1964",
        },
      },

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Biller Verification Success",
            data: "",
            responseData:
              '{"status":"success","provider_name":"MSEDC MAHARASHTRA","number":"123456789123","amount":"160.00","name":"username","duedate":"2026-04-06","provider_id":"70","optional1":"123456789123","optional2":null,"optional3":null,"optional4":""}',
          },
        },],
        error: [{
          id: 1,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Biller Verification Failed",
            data: "Token",
            responseData:
              '{"status":"failure","provider_name":null,"number":null,"amount":null,"name":null,"duedate":null,"provider_id":null,"optional1":null,"optional2":null,"optional3":null,"optional4":null}',
          },
        },]
      },
    },
    {
      id: 9,
      title: "Bill Pay",
      subInforamtion: "This API is used to initiate offline bill payment for a given provider using validated customer details. It requires amount, payment mode, client order ID, and necessary parameters.",
      notes: ["For UAT Testing", "Success:", "• ProviderCode: 70", "• Amount: 100", "• ClientOrderId: HNUZ3YA86SJFWK1ZITYF2B57479", " Failed:", "• ProviderCode: 50", "• Amount: 299", "• ClientOrderId: HNUZ3YA86SJFWK1ZITYF2B57479", "Pending:", "• ProviderCode: 40", "• Amount: 250", "• ClientOrderId: HNUZ3YA86SJFWK1ZITYF2B57479"],
      topText: "{BBPS Base URL}/OFBillPay",
      request: "All headers required",

      post: {
        ProviderCode: "70",
        Amount: 100, // 100 for success, 299 for Failed , 250 for Pending
        Mode: "Wallet",
        ClientOrderId: "HNUZ3YA86SJFWK1ZITYF2B57479", // should be unique transaction "CustomerMobile": "1111111111",
        Params: {
          optional1: "1873X4X31964",
        },
      },

      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Bill Payment Pending",
            data: "",
            responseData:
              '{"MobileNumber":"9467XXXX71","Amount":"250","ProductId":null,"OperatorId":null,"VendorRefNumber":"123456789123456"',
            TransactionMode:
              '"Wallet","ExecutionMode":"1","StatusId":"3","SPTransactionRef":"HNUZ3YA86SJFWK1ZITYF2B57479","CustomerDetails":"-|1111111111|-|187000001964|-","TransactionName":"BillPayments-OFF","TimeSeconds":"345456","TPin":"NA","Reason":"","VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}',
          },
        },
        {
          id: 2,
          info: "",
          code: {
            responseCode: 204,
            responseMessage: "Bill Payment Failed",
            data: "",
            responseData:
              '{"MobileNumber":"90XX89XX98","Amount":"299","ProductId":null,"OperatorId":null,"VendorRefNumber":"123456789123456","TransactionMode":"Wallet","ExecutionMode":"1","StatusId":"0","SPTransactionRef":"HNUZ3YA86SJFWK1ZITYF2B57479","CustomerDetails":"-|9152396448|-|9372879094|-","TransactionName":"BillPayments-OFF","TimeSeconds":"345456","TPin":"NA","Reason":"","VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}',
          },
        }, {
          id: 3,
          info: "Use Soliteck Unique Transaction ID",
          code: {
            responseCode: 200,
            responseMessage: "Bill Payment Success",
            data: "",
            responseData:
              '{"MobileNumber":"90XX89XX98","Amount":"100","ProductId":null,"OperatorId":null,"VendorRefNumber":"123456789123456","TransactionMode":"Wallet","ExecutionMode":"1","StatusId":"1","SPTransactionRef":"HNUZ3YA86SJFWK1ZITYF2B57479","CustomerDetails":"-|9152396448|-|9372879094|-","TransactionName":"BillPayments-OFF","TimeSeconds":"345456","TPin":"NA","Reason":"","VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}',
          },
        },],


        error: [{
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
        },]



      },

      table: {
        responses: {
          id: 3,
          title: "Bill Pay Transaction Response",
          tableData: [
            {
              "key": "Amount",
              "description": "Amount"
            },
            {
              "key": "VendorRefNumber",
              "description": "UTR / Other reference ID"
            },
            {
              "key": "TransactionMode",
              "description": "Transaction Mode"
            },
            {
              "key": "ExecutionMode",
              "description": "Execution Mode"
            },
            {
              "key": "StatusId",
              "description": "Status (1 = Success, 0 = Failed, 3 = Pending)"
            },
            {
              "key": "SPTransactionRef",
              "description": "Soliteck Transaction Reference"
            },
            {
              "key": "CustomerDetails",
              "description": "Customer Mobile Numbers (Primary and Secondary)"
            },
            {
              "key": "TimeSeconds",
              "description": "Time of Transaction (in seconds)"
            },
            {
              "key": "TransactionName",
              "description": "Transaction Name"
            },
            {
              "key": "MobileNumber",
              "description": "Mobile Number"
            },
            {
              "key": "ProductId",
              "description": "Product Identifier (if applicable)"
            },
            {
              "key": "OperatorId",
              "description": "Operator Identifier (if applicable)"
            },
            {
              "key": "TPin",
              "description": "Transaction PIN or security flag"
            },
            {
              "key": "Reason",
              "description": "Failure or status reason"
            },
            {
              "key": "VendorId",
              "description": "Vendor Identifier"
            },
            {
              "key": "ClientOrderId",
              "description": "Client Order Reference"
            },
            {
              "key": "Process",
              "description": "Processing Status"
            },
            {
              "key": "VendorCharges",
              "description": "Charges applied by vendor"
            },
            {
              "key": "VendorGST",
              "description": "GST applied by vendor"
            }
          ],
        },

      },
    },
    {
      id: 11,
      title: "Webhook",


      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Transaction Success",
            data: "Client Order Id",
            responseData: "UTR",
            signalR: null,
          },
        },
        {
          id: 2,
          info: "",
          code: {
            responseCode: 204,
            responseMessage: "Transaction Failed",
            data: "Client Order Id",
            responseData: "UTR",
            signalR: null,
          },
        },]

      },
    },
  ],
};
