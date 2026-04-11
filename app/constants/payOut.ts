import { MainInterface } from "@/app/types/MainPage";

export const payoutDocs: MainInterface = {
  title: "SOLITECK PAYOUTS API'S | Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/PayoutTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
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
        success: 
          [ {
            id : 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Token Generated Success",
            data: "“Generated TOKEN e.g edgfuedieodjieojfweifiuejeijfief",
            responseData: null,
            signalR: null,
          }}],

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
        ]
      },
      note: " The Token is valid for 20 mins after creation. To check Token validity always hit refresh token API.",
    },

    {
      title: "Verify Token",
      topText: "/VerifyUATToken",
      post: "TOKEN",
      request: "All headers required",

      response: {
        success: [
          {
            id: 1,
          info: "Add the othe info  if needed",
          code: {
            responseCode: 200,
            responseMessage: "Token Is Valid",
            data: "Token",
            responseData: null,
            signalR: null,
          },
        }
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
          }
        }
        ]
      },
      note: "NA",
    },

    {
      id: 4,
      title: "Get Banks For Payout",
      post: "TOKEN",
      topText: "/GetAPIBanks",
      request: "All headers required",

      response: {
        success: [
           {
            id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Bank Details Fetched Success",
            data: "TOKEN",
            responseData: `[{\"id\":\"1\",\"AccountVerificationAllowed\":\"yes\",\"BankCode\":\"BCBL\"
,\"BankName\":\"Bijnor Urban Co-Op 
Bank\",\"ImpsAllowed\":\"yes\",\"NeftAllowed\":\"yes\",\"IsActive\":\"1\",\" 
IsDeleted\":\"0\"},{\"id\":\"2\",\"AccountVerificationAllowed\":\"yes\",\"Ba 
nkCode\":\"MODE\",\"BankName\":\"Model Co Op Bank 
Ltd\",\"ImpsAllowed\":\"yes\",\"NeftAllowed\":\"yes\",\"IsActive\":\"1\",\"I 
sDeleted\":\"0\"}]`,
            signalR: null,
          },
        }
        ],

        error: [
          {
          id: 1,
          info: "",
          code: {
            responseCode: 401,
            // text : "For Token Expiry or Invalid Token",
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
            // text : "In case of any error other than token expiry",
            responseMessage: "Error Message.",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
        ]
    
      },
      note: "You need to parse the responseData at your end.",
    },

    {
      title: "Get Master IFSC For Payout",
      post: "BCBL",
      topText: "/MasterIfscByBankCode",
      request: "All headers requirede",

      response: {
        success: [
          {
            id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Ifsc Fetched Success",
            data: "TOKEN",
            responseData: "HDFC0CBUCBL",
            signalR: null,
          },
        }
        ],

        error: [
          {
            id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Ifsc Fetched Success",
            data: "TOKEN",
            responseData: "HDFC0CBUCBL",
            signalR: null,
          },
        },
         {
          id: 2,
          info: "",
          code: {
            responseCode: 400,
            // text : " In case of any error",
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        }
        ]
        
      },
    },

    {
      title: "Remitter Login",
      post: {
        RemitterMobile: "9999999999",
        Token: "ClientToken",
      },
      topText: "/RemitterLogIn",
      request: "All headers required",
      response: {
        success: [
          {
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Login Success",
            data: "TOKEN",
            responseData: `"{\"RemitterName\":\"Amit\",\"RemitterMobile\":\"9999999999\",\"AvailableLim 
it\":\"25000\",\"MonthlyLimit\":\"25000\",\"BeneficiaryList\":[{\"BeneId\":\
"11111\",\"BeneName\":\"Alice 
Smith\",\"BeneAccount\":\"1234567890\",\"BeneIFSC\":\"IFSC0001\",\"BeneBank\
":\"Bank of 
ABC\",\"IsValidate\":\"1\",\"BeneVendorStatus\":\"true\",\"BeneBankCode\":\" 
BBC001\",\"Pincode\":\"110001\",\"IMPS\":\"1\",\"NEFT\":\"1\"},{\"BeneId\":\
"11114\",\"BeneName\":\"Bob 
Johnson\",\"BeneAccount\":\"9876543210\",\"BeneIFSC\":\"IFSC0002\",\"BeneBan 
k\":\"XYZ 
Bank\",\"IsValidate\":\"true\",\"BeneVendorStatus\":\"true\",\"BeneBankCode\
":\"BBC002\",\"Pincode\":\"110002\",\"IMPS\":\"0\",\"NEFT\":\"1\"}],\"AllBen 
eficiaryList\":[{\"BeneId\":\"11113\",\"BeneName\":\"Alice 
Smith\",\"BeneAccount\":\"1234567890\",\"BeneIFSC\":\"IFSC0001\",\"BeneBank\
":\"Bank of 
ABC\",\"IsValidate\":\"1\",\"IsActive\":\"1\",\"BeneBankCode\":\"BBC001\",\" 
BeneVendorStatus\":\"false\",\"Pincode\":\"110001\",\"IMPS\":\"1\",\"NEFT\":
\"1\"},{\"BeneId\":\"11112\",\"BeneName\":\"Bob 
Johnson\",\"BeneAccount\":\"9876543210\",\"BeneIFSC\":\"IFSC0002\",\"BeneBan 
k\":\"XYZ 
Bank\",\"IsValidate\":\"true\",\"IsActive\":\"true\",\"BeneBankCode\":\"BBC0 
02\",\"BeneVendorStatus\":\"false\",\"Pincode\":\"110002\",\"IMPS\":\"0\",\" 
NEFT\":\"1\"},{\"BeneId\":\"11116\",\"BeneName\":\"Charlie 
Brown\",\"BeneAccount\":\"1029384756\",\"BeneIFSC\":\"IFSC0003\",\"BeneBank\
":\"Bank of 
XYZ\",\"IsValidate\":\"true\",\"IsActive\":\"false\",\"BeneBankCode\":\"BBC0 
03\",\"BeneVendorStatus\":\"false\",\"Pincode\":\"110003\",\"IMPS\":\"1\",\"
NEFT\":\"0\"}]}"`,
            signalR: null,
          },
        },
         {
          id: 2,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Otp send to Registered Mobile",
            data: "TOKEN",
            responseData: `"{\"VendorId\":\"6\",\"DBStatus\":1}"`,
            signalR: null,
          },
        },
        {
          id: 3,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Otp send to Registered Mobile",
            data: "TOKEN",
            responseData: `"{\"VendorId\":\"6\",\"DBStatus\":0}"`,
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
            responseMessage: "Token Expired / Invalid",
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
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
        ]
      
      },
      note: ` You need to parse the responseData at your end.
              RESPONSE PARAMETERS IN responseData
USE: 9999999999 For Verified Remitter 8888888888 For 
Unverified but existing data and 7777777777 for Unverified and 
new remitter

      `,

      table: {
        remitter: {
          id: 1,
          title: "Remitter Information List",
          tableData: [
            { id: 1, key: "RemitterName", description: "Remitter Name" },
            {
              id: 2,
              key: "RemitterMobile",
              description: "Remitter Mobile number",
            },
            {
              id: 3,
              key: "AvailableLimit",
              description: "Remaining Limit for month",
            },
            { id: 4, key: "MonthlyLimit", description: "Limit for month" },
            {
              id: 5,
              key: "BeneficiaryList",
              description: "Contains Active Beneficiary for transfer",
            },
            {
              id: 6,
              key: "AllBeneficiaryList",
              description: "Contains Inactive Beneficiary for transfer",
            },
          ],
        },

        beneficiary: {
          id: 2,
          title: "Under Beneficiary and all beneficiary list",
          tableData: [
            { id: 1, key: "BeneId", description: "Unique Id for Beneficiary" },
            { id: 2, key: "BeneName", description: "Beneficiary Name" },
            { id: 3, key: "BeneAccount", description: "Beneficiary Account" },
            { id: 4, key: "BeneIFSC", description: "Beneficiary IFSC" },
            { id: 5, key: "BeneBank", description: "Bank Name" },
            {
              id: 6,
              key: "IsValidate",
              description: "Is Beneficiary Verified (true/false)",
            },
            {
              id: 7,
              key: "IsActive",
              description: "Is Beneficiary Present (true/false)",
            },
            {
              id: 8,
              key: "BeneBankCode",
              description: "Bank Code for the respective bank name",
            },
            {
              id: 9,
              key: "BeneVendorStatus",
              description:
                "True for Beneficiary list, False for All Beneficiary list",
            },
            { id: 10, key: "Pincode", description: "Beneficiary Pincode" },
            {
              id: 11,
              key: "IMPS",
              description: "Is IMPS Available for the bank (true/false)",
            },
            {
              id: 12,
              key: "NEFT",
              description: "Is NEFT Available for the bank (true/false)",
            },
          ],
        },

        nonRegisteredRemitter: {
          id: 3,
          title: "For non-registered Remitters",
          tableData: [
            { title: "For non-registered Remitters" },
            {
              id: 1,
              key: "VendorId",
              description:
                "Integer to send in registration request from client",
            },
            {
              id: 2,
              key: "DBStatus",
              description:
                "Registration status (1 → Only OTP required, 2 → Full remitter data required)",
            },
          ],
        },
      },
    },

    {
      title: "Remitter Registration",
      post: {
        RemitterMobile: "8888888888",
        Token: "SAME VALUE AS IN HEADER 'ClientToken' KEY",
        DBStatus: "AS RECEIVED IN REMITTER LOGIN RESPONSE",
        VendorId: "AS RECEIVED IN REMITTER LOGIN RESPONSE",
        OTP: "123456",
        FName: "ONLY REQUIRED IF DBStatus is 0",
        LName: "ONLY REQUIRED IF DBStatus is 0",
        Pincode: "ONLY REQUIRED IF DBStatus is 0",
      },
      topText: "/RemitterRegistration",
      request: "All headers required",

      response: {
        success: [
          {
            id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "OTP Verified Successfully, Remitter Registered",
            data: "TOKEN",
            responseData: null,
            signalR: null,
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
      ]
        
      },
    },

    {
      title: "Add Beneficiary",
      post: {
        RemitterNumber: "9999999999",
        BeneId: "11113 / 11112 / 11116",
        BeneName: "Alice Smith",
        BeneAccount: "1234567890",
        BeneIFSC: "IFSC0001",
        BankCode: "BBC001",
        BenePincode: "110001",
      },
      topText: "/AddBeneficiary",
      request: "All headers required",
      response: {
        success: [
          {
            id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Beneficiary Added Successfully",
            data: "TOKEN",
            responseData: null,
            signalR: null,
          },
        },
        ],

        error:[ {
          id: 1,
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
      {
        id: 2,
          info: "",
          code: {
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
       
      },
      note: `Beneficiary list and AllBeneficiaryList are separate 
bene’s received in logi response to access bene’s from all 
list they need to be added in Beneficiary list with Add bene 
API.`,
    },

    {
      title: "Delete Beneficiary",
      topText: "/DeleteBeneficiary",
      post: {
        RemitterNumber: "9999999999",
        Token: "SAME VALUE AS IN HEADER 'ClientToken' KEY",
        BeneId: "11114 / 11111",
      },
      request: "All headers Required",
      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Beneficiary Deleted successfully",
            data: "TOKEN",
            responseData: null,
            signalR: null,
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
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
      },
    },

    {
      title: "Verify Beneficiary",
      topText: "/VerifyBeneficiary",
      post: {
        RemitterNumber: "9999999999", //Common
        BeneId: "11114", // if already in active list and need to verify
        OR: "/",
        BeneAccount: "27346789213649",
        BeneIFSC: "IFSC0000123",
        ClientOrderId: "8768267686723647", // It Should be Unique numeric
        BankCode: "ABCD",
      },
      request: {
        RemitterNumber: "9999999999",
        BeneAccount: "27346789213649",
        BeneIFSC: "IFSC0000123",
        ClientOrderId: "8768267686723647",
      },
      response: {
        success:[ {
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Beneficiary Verified Successfully",
            data: "TOKEN",
            responseData: `"{\"beneName\":\"Johnson\",\"beneId\":\"11119\",\"refId\":\"5761253761237969 
89\"}"
`,
            signalR: null,
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
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
      },
      note: "RefId Will only generate on success in case of failed verification responseData will be blank.",
    },

    {
      title: "Payout Transfer",

      topText: "/Transfer",
      post: {
        RemitterNumber: "9999999999",
        BeneId: "11113 / 11111 / 11114",
        Amount: "1400",
        ClientOrderId: "6698676234872634", // It Should be Unique numeric
        Mode: "IMPS",
      },
      request: "All header Required",
      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "Money Transfer Pending",
            data: "TOKEN",
            responseData: `[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC 
Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\
":\"9999999999\",\"TransactionMode\":\"Immediate\",\"TransferMode\":\"NEFT\"
,\"BeneAccount\":\"76723728234\",\"BeneIfsc\":\"HDFC0000001\",\"BeneName\":\
"Kumar\",\"BeneBank\":\"HDFC 
BANK\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck 
Payout\",\"TransactionNumber\":\"67364727423712912\",\"TransactionAmount\":\
"1400\",\"BankTxnId\":\null\,\"OrderId\":\"ORD123456\",\"TransactionDate\":\
"07-04-2025 01:07:54
P\",\"ServiceCharge\":\"10\",\"Status\":\"Pending\",\"Message\":\"Money 
Transfer Pending\"}]}]`,
            signalR: null,
          },
        },
       {
        id: 2,
          info: "",
          code: {
            responseCode: 204,
            responseMessage: "Money Transfer Failed",
            data: "TOKEN",
            responseData: `[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC 
Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\
":\"9999999999\",\"TransactionMode\":\"Immediate\",\"TransferMode\":\"NEFT\",\"BeneAccount\":\"76723728234\",\"BeneIfsc\":\"HDFC0000001\",\"BeneName\":\
"Kumar\",\"BeneBank\":\"HDFC 
BANK\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck 
Payout\",\"TransactionNumber\":\"67364727423712912\",\"TransactionAmount\":\
"1400\",\"BankTxnId\":\null\,\"OrderId\":\null\,\"TransactionDate\":\"07-04-
2025 01:13:07
P\",\"ServiceCharge\":\"10\",\"Status\":\"Failed\",\"Message\":\"Money 
Transfer Failed\"}]}]`,
            signalR: null,
          },
        },
        {
          id: 3,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Money Transfer Success",
            data: "TOKEN",
            responseData: `[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC 
Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\
":\"9999999999\",\"TransactionMode\":\"UAT\",\"TransferMode\":\"NEFT\",\"Ben 
eAccount\":\"1234567890\",\"BeneIfsc\":\"IFSC0000001\",\"BeneName\":\"Alice 
Smith\",\"BeneBank\":\"Bank of 
ABC\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck 
Payout\",\"TransactionNumber\":\"67364727423712912\",\"TransactionAmount\":\
"1400\",\"BankTxnId\":\"2345345456\",\"OrderId\":\"ORD123456\",\"Transaction 
Date\":\"07-04-2025 01:13:46
P\",\"ServiceCharge\":\"10\",\"Status\":\"Success\",\"Message\":\"Transfer 
completed successfully\"}]}]`,
            signalR: null,
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
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
      ]
      },

      table: {
        transaction: {
          id: 1,
          title: `RESPONSE PARAMETERS IN responseData
USE: 11111 For Success 11113 For Pending and 11114 for Failed
`,
          tableData: [
            { key: "RetailerNumber", description: "Agent Number" },
            { key: "ShopName", description: "Agent Institution" },
            { key: "RemitterName", description: "Remitter Name" },
            { key: "RemitterNumber", description: "Remitter Number" },
            { key: "TransactionMode", description: "Transaction Mode" },
            { key: "TransferMode", description: "Transfer Mode (IMPS / NEFT)" },
            { key: "BeneAccount", description: "Beneficiary Account" },
            { key: "BeneIfsc", description: "Beneficiary IFSC" },
            { key: "BeneName", description: "Beneficiary Name" },
            { key: "BeneBank", description: "Beneficiary Bank" },
            { key: "ProductName", description: "Soliteck Product Name" },
            { key: "Transfers", description: "Transaction Details Array" },
          ],
        },

        UnderTransfer: {
          id: 2,
          title: "Under Transfer",
          tableData: [
            { key: "OperatorName", description: "Soliteck Operator Name" },
            { key: "TransactionNumber", description: "Soliteck Reference Id" },
            { key: "TransactionAmount", description: "Transaction Amount" },
            { key: "BankTxnId", description: "Bank Reference Id" },
            { key: "OrderId", description: "External Reference Id" },
            { key: "TransactionDate", description: "Transaction Date" },
            {
              key: "ServiceCharge",
              description: "Service Charge for Transaction",
            },
            { key: "Status", description: "Status of Transaction in Words" },
            { key: "Message", description: "Message regarding Transaction" },
          ],
        },
      },
    },

    {
      title: "Check Transaction Status",

      topText: "/Transfer",
      post: "67364727423712912",
      request: "All header Required",
      response: {
        success: [{
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Transaction Fetched",
            data: "TOKEN",
            responseData: `[{\"Amount\":\"1000\",\"VendorRefNumber\":\"29974465\",\"TransactionMode\":
\"Wallet\",\"ExecutionMode\":1,\"StatusId\":1,\"SPTransactionRef\":\"6736472 
7423712912\",\"CustomerDetail\":\"28934709239\",\"TransactionName\":\"Payout
\",\"TimeSeconds\":\"16218013\"}]`,
            signalR: null,
          },
        },],

      error: [ {
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
            responseMessage: "Error Message",
            data: null,
            responseData: null,
            signalR: null,
          },
        },]
      },

      table: {
        transaction: {
          id: 1,
          title: `Under ResponseData
`,

          tableData: [
            { key: "Amount", description: "Amount" },
            { key: "VendorRefNumber", description: "UTR / Other Reference ID" },
            { key: "TransactionMode", description: "Transaction Mode" },
            { key: "ExecutionMode", description: "Execution Mode" },
            {
              key: "StatusId",
              description: "Status (1 = Success, 0 = Failed, 3 = Pending)",
            },
            {
              key: "SPTransactionRef",
              description: "Soliteck Transaction Reference",
            },
            {
              key: "ServiceCharge",
              description: "Service Charge for Transaction",
            },
            {
              key: "TimeSeconds",
              description: "Time of Transaction",
            },
            {
              key: "TransactionName",
              description: "Transaction Name",
            },
          ],
        },
      },
      note: " Final Transaction Status Should be verified from StatusId Parameter in responseData.",
    },

    {
      title: "Webhook",

      // topText: "-",
      // post: "-",
      // request: "-",
      response: {
        success:[ {
          id: 1,
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Transaction Success",
            data: "Client Order Id",
            responseData: `UTR`,
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
            responseData: `UTR`,
            signalR: null,
          },
        },],
      },

      table: {
        transaction: {
          id: 1,
          title: `Response Structure
`,

          tableData: [
            { key: "responseCode", description: "Status of transaction" },
            { key: "responseMessage", description: "Message of transaction" },
            { key: "Data", description: "Client Order ID" },
            { key: "responseData", description: "UTR" },
          ],
        },
      },
      note: "-",
    },
  ],
};
