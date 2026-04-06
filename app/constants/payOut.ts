interface SucessResponseInterface {
   responseCode: number;
   responseMessage: string;
   data : string;
   responseData: boolean | string | null;
   signalR : boolean | null ;



}

interface ErrorResponseInterface {
    responseCode: number;
    text : string;
    responseMessage: string;
    data : null;
    responseData: null;
    signalR : null;  
}

interface  ResponseInterface {
    sucess: SucessResponseInterface;
    error1: ErrorResponseInterface;
    error2?: ErrorResponseInterface;
}

interface EndpointInterface {
    id?: number;
    title: string;
    post: string;
    request: string | object;
    respose: ResponseInterface;
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





export  const payoutDocs: PayOutInterface = {
  title: "SOLITECK PAYOUTS | Digital Transformation made easy",

  BaseUrls: {
    payout: "https://api-uat.soliteck.in/uat/api/PayoutTxn/",
    authentication: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    // {
    //   title: "Generate Token",
    //   post: "/GenerateUATToken",
    //   request: "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

    //   respose: {
    //     sucess: {
    //       responseCode: 200,
    //       responseMessage: "Token Generated Success",
    //       data: "Generated Token",
    //       responseData: null,
    //       signalR: null,
    //     },

    //     error: {
    //       responseCode: 400,
    //       responseMessage: "Client_Id is not present",
    //       data: null,
    //       responseData: null,
    //       signalR: null,
    //     },
    //   },
    // },

    // {
    //   title: "Verify Token",
    //   post: "/VerifyUATToken",
    //   request: "All headers required",

    //   respose: {
    //     sucess: {
    //       responseCode: 200,
    //       responseMessage: "Token Is Valid",
    //       data: "Token",
    //       responseData: null,
    //       signalR: null,
    //     },

    //     error: {
    //       responseCode: 400,
    //       responseMessage: "Token Expired, Re-Generate Token",
    //       data: null,
    //       responseData: null,
    //       signalR: null,
    //     },
    //   },
    // },

    { 
      id : 4,
      title: "Get Banks For Payout",
      post: "/GetAPIBanks",
      request: "All headers required",

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Bank Details Fetched Success",
          data: "TOKEN",
          responseData: "List of banks JSON string",
          signalR: null,
        },

        error1: {
          responseCode: 401,
          text : "For Token Expiry or Invalid Token",
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        },
        error2: {
          responseCode: 400,
          text : "In case of any error other than token expiry",
          responseMessage: "Error Message.",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
       note: "You need to parse the responseData at your end."
    },

    {
      title: "Get Master IFSC For Payout",
      post: "/MasterIfscByBankCode",
      request: `Body(JSON): "BCBL"`,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Ifsc Fetched Success",
          data: "TOKEN",
          responseData: "HDFC0CBUCBL",
          signalR: null,
        },

        error1: {
          responseCode: 401,
          text : "For Token Expiry or Invalid Token",
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
        }, error2: {
          responseCode: 400,
          text : " In case of any error",
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },

    {
      title: "Remitter Login",
      post: "/RemitterLogIn",
      request: 
{
  "RemitterMobile":"9999999999",
  "Token":"ClientToken"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Login Success",
          data: "TOKEN",
          responseData: "Remitter details and beneficiary list",
          signalR: null,
        },

        error: {
          responseCode: 401,
          responseMessage: "Token Expired / Invalid",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
      note: "You need to parse the responseData at your end."
    },

    {
      title: "Remitter Registration",
      post: "/RemitterRegistration",
      request: 
{
  "RemitterMobile":"8888888888",
  "OTP":"123456",
  "FName":"Required if DBStatus=0",
  "LName":"Required if DBStatus=0",
  "Pincode":"Required if DBStatus=0"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "OTP Verified Successfully, Remitter Registered",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },

    {
      title: "Add Beneficiary",
      post: "/AddBeneficiary",
      request: 
{
 "RemitterNumber":"9999999999",
 "BeneName":"Alice Smith",
 "BeneAccount":"1234567890",
 "BeneIFSC":"IFSC0001",
 "BankCode":"BBC001"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Beneficiary Added Successfully",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },

    {
      title: "Delete Beneficiary",
      post: "/DeleteBeneficiary",
      request: 
{
 "RemitterNumber":"9999999999",
 "BeneId":"11114"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Beneficiary Deleted successfully",
          data: "TOKEN",
          responseData: null,
          signalR: null,
        },

        error: {
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
      post: "/VerifyBeneficiary",
      request: 
{
 "RemitterNumber":"9999999999",
 "BeneAccount":"27346789213649",
 "BeneIFSC":"IFSC0000123",
 "ClientOrderId":"8768267686723647"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Beneficiary Verified Successfully",
          data: "TOKEN",
          responseData: "beneName, beneId, refId",
          signalR: null,
        },

        error: {
          responseCode: 400,
          responseMessage: "Error Message",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },

    {
      title: "Payout Transfer",
      post: "/Transfer",
      request: 
{
 "RemitterNumber":"9999999999",
 "BeneId":"11113",
 "Amount":"1400",
 "ClientOrderId":"6698676234872634",
 "Mode":"IMPS"
}
,

      respose: {
        sucess: {
          responseCode: 200,
          responseMessage: "Money Transfer Success",
          data: "TOKEN",
          responseData: "Transaction details",
          signalR: null,
        },

        error: {
          responseCode: 204,
          responseMessage: "Money Transfer Failed",
          data: null,
          responseData: null,
          signalR: null,
        },
      },
    },
  ],
};