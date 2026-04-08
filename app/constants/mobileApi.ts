interface SucessResponseInterface {
  responseCode: number;
  responseMessage: string;
  data: string;
  responseData: boolean | string | null;
  signalR: boolean | null;
}

interface ErrorResponseInterface {
  responseCode: number;
  responseMessage: string;
  data: null;
  responseData: null | string;
  signalR: null | string;
  text? : string
}

interface ResponseInterface {
  success?: SucessResponseInterface;
  success1?: SucessResponseInterface;
  success2?: SucessResponseInterface;
  error?: FailedInterface;
  error1?: ErrorResponseInterface;
  error2?: ErrorResponseInterface;
}

interface PendingInterface {
  responseCode: number;
  responseMessage: string;
  data: string;
  responseData: string;
  signalR: null;
}

interface FailedInterface {
  text: string,
  responseCode: number;
  responseMessage: string;
  data: string;
  responseData: string;
  signalR: null;
}



interface EndpointInterface {
  id?: number;
  title: string;
  topText: string;
  post: any;
  request: string | object;
  response: ResponseInterface;
  note?: string;
}

interface BaseUrlsInterface {
  payout: string;
  authentication: string;
}

interface Mobileinterface {
  
  title: string;
  BaseUrls: BaseUrlsInterface;
  Endpoints: EndpointInterface[];
  note: string;
}

export const MobileDocs: Mobileinterface = {
  title: "SOLITECK MOBILE REG API | Digital Transformation made easy",

  BaseUrls: {
    payout: "https://api-uat.soliteck.in/uat/api/PayoutTxn/",
    authentication: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  Endpoints: [
    {
      title: "Generate Token",
      post: "/GenerateUATToken",
      topText : "/GenerateUATToken",
      request: "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

      response: {
        success: {
          responseCode: 200,
          responseMessage: "Token Generated Success",
          data: "Generated Token",
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
    },

    {
      title: "Verify Token",
      post: "/VerifyUATToken",
      topText : "/VerifyUATToken",
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
    },

    {
      id: 4,
      title: "Mobile Recharges",
      topText:  "{Recharge Base URL}/MobileRecharge",
      request: "All headers Required",
      post: {
        CustomerDetails: "1234567890",
        Amount: "10",
        ClientOrderId: "MERCHANT ORDER ID (should be unique)",
        ExcecutionMode: "1 for Web And 2 for Android",
        ApiCode: "",
      },

      response: {
        success: {
          responseCode: 200,
          responseMessage: " Success",
          data: "TOKEN",
          responseData:
            '{"Amount":"19","VendorRefNumber":"111111111-22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"1","SPTransactionRef":null,"CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
          signalR: null,
        },

        success1: {
          responseCode: 201,
          responseMessage: "pending",
          data: "TOKEN",
          responseData:
            '{"Amount":"19","VendorRefNumber":"22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"3","SPTransactionRef":"22222222222","CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
          signalR: null,
        },
        success2: {
          responseCode: 204,
          responseMessage: "Failed",
          data: "TOKEN",
          responseData:
            '{"Amount":"19","VendorRefNumber":"22222222222","TransactionMode":"0","ExecutionMode":"1","StatusId":"0","SPTransactionRef":"22222222222","CustomerDetails":"1234567890","TransactionName":"Recharge","TimeSeconds":"23454"}',
          signalR: null,
        },


        
        error1: {
          //401
          responseCode: 401,
          responseMessage: "Token Expired / Invalid, Please login again.",
          data: null,
          responseData: null,
          signalR: null,
          text : "For Token Expiry"
        },

        error2: {
          //402
          responseCode: 400,
          responseMessage: "Error Message.",
          data: null,
          responseData: null,
          signalR: null,
          text : "In case of any error1 "
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation..",
    },
  ],
};
