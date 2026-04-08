interface SucessResponseInterface {
  responseCode: number;
  responseMessage: string;
  data: string;
  responseData: boolean | string | null;
  signalR: boolean | null;
}

interface ErrorResponseInterface {
  responseCode: number;
  // text : string;
  responseMessage: string;
  data: null;
  responseData: null;
  signalR: null;
}

interface ResponseInterface {
  success: SucessResponseInterface;
  success1?: SucessResponseInterface;
  success2?: SucessResponseInterface;
  error1: ErrorResponseInterface;
  error2?: ErrorResponseInterface;
}

interface EndpointInterface {
  id?: number;
  topText?: string;
  title: string;
  post: any;
  request: string | object;
  response: ResponseInterface;
  note?: string;
}

interface BaseUrlsInterface {
  payout: string;
  authentication: string;
}

interface PayOutInterface {
  title: string;
  BaseUrls: BaseUrlsInterface;
  Endpoints: EndpointInterface[];
  note: string;
}

export const payoutDocs: PayOutInterface = {
  title: "SOLITECK PAYOUTS API'S | Digital Transformation made easy",

  BaseUrls: {
    payout: "https://api-uat.soliteck.in/uat/api/PayoutTxn/",
    authentication: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    {
      title: "Generate Token",
      topText: "/GenerateUATToken",
      post: "/GenerateUATToken",
      request:
        "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

      response: {
        success: {
          responseCode: 200,
          responseMessage: "Token Generated Success",
          data: "“Generated TOKEN e.g edgfuedieodjieojfweifiuejeijfief",
          responseData: null,
          signalR: null,
        },

        error1: {
          responseCode: 400,
          responseMessage: "Client_Id is not present",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
      note: " The Token is valid for 20 mins after creation. To check Token validity always hit refresh token API.",
    },

    {
      title: "Verify Token",
      topText: "/VerifyUATToken",
      post: "/VerifyUATToken",
      request: "All headers required",

      response: {
        success: {
          responseCode: 200,
          responseMessage: "Token Is Valid",
          data: "Token",
          responseData: null,
          signalR: null,
        },

        error1: {
          responseCode: 400,
          responseMessage: "Token Expired, Re-Generate Token",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
      note: "NA",
    },

    {
      id: 4,
      title: "Get Banks For Payout",
      post: "/GetAPIBanks",
      topText: "/GetAPIBanks",
      request: "All headers required",

      response: {
        success: {
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

        error1: {
          responseCode: 401,
          // text : "For Token Expiry or Invalid Token",
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 400,
          // text : "In case of any error other than token expiry",
          responseMessage: "Error Message.",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
      note: "You need to parse the responseData at your end.",
    },

    {
      title: "Get Master IFSC For Payout",
      post: "BCBL",
      topText: "/MasterIfscByBankCode",
      request: "All headers requirede",

      response: {
        success: {
          responseCode: 200,
          responseMessage: "Ifsc Fetched Success",
          data: "TOKEN",
          responseData: "HDFC0CBUCBL",
          signalR: null,
        },

        error1: {
          responseCode: 401,
          // text : "For Token Expiry or Invalid Token",
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 400,
          // text : " In case of any error",
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
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
        success: {
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

        success1: {
          responseCode: 201,
          responseMessage: "Otp send to Registered Mobile",
          data: "TOKEN",
          responseData: `"{\"VendorId\":\"6\",\"DBStatus\":1}"`,
          signalR: null,
        },
        success2: {
          responseCode: 201,
          responseMessage: "Otp send to Registered Mobile",
          data: "TOKEN",
          responseData: `"{\"VendorId\":\"6\",\"DBStatus\":0}"`,
          signalR: null,
        },

        error1: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
      note: ` You need to parse the responseData at your end.
              RESPONSE PARAMETERS IN responseData
USE: 9999999999 For Verified Remitter 8888888888 For 
Unverified but existing data and 7777777777 for Unverified and 
new remitter

      `,
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
        success: {
          responseCode: 200,
          responseMessage: "OTP Verified Successfully, Remitter Registered",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error1: {
          responseCode: 400,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 401,
          responseMessage: "Error Message.",
          data: null,
          responseData: null,
          signalR: null,
        },
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
        success: {
          responseCode: 200,
          responseMessage: "Beneficiary Added Successfully",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error2: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
        error1: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
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
        success: {
          responseCode: 200,
          responseMessage: "Beneficiary Deleted successfully",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error1: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
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
        success: {
          responseCode: 200,
          responseMessage: "Beneficiary Verified Successfully",
          data: "TOKEN",
          responseData: `"{\"beneName\":\"Johnson\",\"beneId\":\"11119\",\"refId\":\"5761253761237969 
89\"}"
`,
          signalR: null,
        },
        error1: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },

        error2: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
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
        success: {
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
        success1: {
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
        success2: {
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

        error1: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },
  ],
};
