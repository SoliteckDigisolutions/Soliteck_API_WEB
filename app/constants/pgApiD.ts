import { MainInterface } from "../types/MainPage";

export const pgApiD: MainInterface = {
  title: "API Documentation for Soliteck Bulk Pay",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/PGTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "",

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

      note: "The Token is valid For 20 mins after Creation , To Check token validity always hit refresh token Api "
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
      title: "Bulk Pay Sender Login",
      topText: "SenderLogin",
      request: "All headers Required",

      post: {
        SenderMobile: 1234567890,
        Flag: 1,
        Token: "SAME VALUE AS IN HEADER ‘ClientToken KEY’ "

      },

      response: {
        success: [
          {
            id: 1,
            info: "",
            code: {
              responseCode: 200,
              responseMessage: "Proceed",
              data: "Token",
              responseData:
                '{\"SenderMobile\":\"9920601290\",\"NameAsPerPan\":\"ABCD\",\"PAN\":\"DYFPB9XXXX\",\"AadharCard\":\"66187453XXXX\",\"CardDetails\":[{\"CardDetailId\":1,\"ReferenceId\":\"SOLI23032000\",\"SenderId\":\"UCDPREF002424\",\"CardNo\":4147524492387084,\"CardType\":\"Visa\",\"CVV\":\"059\",\"Expiry\":\"07/2030\",\"GST\":0.36,\"Charge\":2,\"IsActive\":true,\"FrontCardImg\":\"\",\"VendorFrontCardImg\":\"\",\"BackCardImg\":\"\",\"VendorBackCardImg\":\"\",\"IsProcessComplete\":true},{\"CardDetailId\":2,\"ReferenceId\":\"SOLI2303200012\",\"SenderId\":\"UCDPREF002489\",\"CardNo\":4022190003360000,\"CardType\":\"Visa\",\"CVV\":\"xxx\",\"Expiry\":\"09/2031\",\"GST\":0.36,\"Charge\":2,\"IsActive\":true,\"FrontCardImg\":\"BackCreditCard_9372879094_36335841_UCDPREF002489.jpeg\",\"VendorFrontCardImg\":\"https=//bulkpe-colloction.s3.ap-south-1.amazonaws.com/userDocs/402219000336070300front.jpeg\",\"BackCardImg\":\"\",\"VendorBackCardImg\":\"https=//bulkpe-colloction.s3.ap-south-1.amazonaws.com/userDocs/402219000336070300back.jpeg\",\"IsProcessComplete\":true},{\"CardDetailId\":3,\"ReferenceId\":\"187587963434400010\",\"SenderId\":\"UCDPREF002498\",\"CardNo\":4022190003360703,\"CardType\":\"Visa\",\"CVV\":\"191\",\"Expiry\":\"09/2031\",\"GST\":0.36,\"Charge\":2,\"IsActive\":true,\"FrontCardImg\":\"FrontCreditCard_9372879094_36345995_UCDPREF002498.jpeg\",\"VendorFrontCardImg\":\"https=//bulkpe-colloction.s3.ap-south-1.amazonaws.com/userDocs/402219000336070300front.jpeg\",\"BackCardImg\":\"BackCreditCard_9372879094_36346082_UCDPREF002498.jpeg\",\"VendorBackCardImg\":\"https=//bulkpe-colloction.s3.ap-south-1.amazonaws.com/userDocs/402219000336070300back.jpeg\",\"IsProcessComplete\":true}],\"BeneDetails\":[{\"InternalBeneId\":2,\"BeneficiaryId\":\"CARDBENE002286\",\"ReferenceId\":\"187589589366060010\",\"Name\":\"ROSHAN KISHOR BHAGAT\",\"AccountNumber\":\"50100731591129\",\"IFSC\":\"HDFC0001028\",\"IsVerified\":true},{\"InternalBeneId\":4,\"BeneficiaryId\":\"CARDBENE002355\",\"ReferenceId\":\"187592203920090010\",\"Name\":\"ROSHAN KISHOR BHAGAT\",\"AccountNumber\":\"159920601290\",\"IFSC\":\"INDB0001718\",\"IsVerified\":true},{\"InternalBeneId\":5,\"BeneficiaryId\":\"CARDBENE002356\",\"ReferenceId\":\"187592209156190020\",\"Name\":\"ANISH ANANT  KHEDEKAR\",\"AccountNumber\":\"5172500101321801\",\"IFSC\":\"KARB0000517\",\"IsVerified\":true}],\"Charges\":[{\"Id\":253,\"OperatorName\":\"TSECL TRIPURA\",\"MaxAmount\":500000},{\"Id\":254,\"OperatorName\":\"UPPCL RURAL UTTAR PRADESH\",\"MaxAmount\":500000}],\"CardType\":[{\"Id\":1,\"CardType\":\"Visa\"},{\"Id\":2,\"CardType\":\"Master\"},{\"Id\":3,\"CardType\":\"RuPay\"}]}',

            },
          },

          {
            id: 2,
            info: "User Not Registered ",
            code: {
              responseCode: 201,
              responseMessage: "User Not Registered",
              data: "Token",
              responseData: null,

            },
          }
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
              responseCode: 500,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },




    },

    {
      title: "Create Sender For BulkPay",
      topText: "/ CreateSender",
      post: {
        Token: "SAME VALUE AS IN HEADER ‘ClientToken KEY’ ", SenderName: "ABCD",
        PAN: "ABCDE1234Z",
        AadharCard: " 123456789011",
        SenderMobile: "1234567890"

      },

      request: "All headers Required",

      response: {
        success: [
          {
            id: 1,
            info: "Success",
            code: {
              responseCode: 200,
              responseMessage:
                "Register Successfully",
              data: "Token",
              responseData:
                11111,

            },
          },
          {
            id: 2,
            info: "User Already Registered",
            code: {
              responseCode: 400,
              responseMessage: " User Already Registered",
              data: "Token",
              responseData: null,

            },
          },

        ],

        error: [
          {
            id: 1,
            info: " For Token Expiry",
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
              responseCode: 500,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },

    },
    {
      title: "Add Card Details For BulkPay",
      topText: "/AddCardDetails",
      post: {

        Token: "SAME VALUE AS IN HEADER ‘ClientToken KEY’",

        CardType: "",

        ClientOrderId: "",

        CardNo: " 4022190003360703",

        CVV: 191,

        Expiry: "07/2030",

        SoliteckInternalSenderId: "AS Recived In Create Sender Response"

      },

      request: " All headers Required",

      response: {
        success: [
          {
            id: 1,
            info: " Register Successfully",
            code: {
              responseCode: 200,
              responseMessage:
                " Data Inserted",
              data: "Token",
              responseData:
                "{\"senderId\":\"UCDPREF002489\",\"referenceId\":\"SOLI2303200012\",\"nameInPan\":\"ABCD\",\"pan\":\"XGZFE7225A\",\"name\":\"XYZ\",\"aadharNumber\":\"468726471234\",\"mobile\":\"1234567899\",\"cardNumber\":\"4022190003360703\",\"charge\":\"1.00\",\"gst\":\"1.00\",\"isActive\":\"1\",\"SoliteckCardDetailId\":\"2\"}"

            },
          },
          {
            id: 2,
            info: "Card Already Registed",
            code: {
              responseCode: 400,
              responseMessage: "  Card Already Register",
              data: "Token",
              responseData: null,

            },
          },

        ],

        error: [
          {
            id: 1,
            info: " For Token Expiry",
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
            info: "In case of any error",
            code: {
              responseCode: 500,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },




    },
    {
      title: "  Create Beneficiary For Bulk Pay ",
      topText: "/CreateBeneficiary ",
      post: {

        Token: "SAME VALUE AS IN HEADER ‘ClientToken KEY’ ",

        name: "ABC",

        accountNumber: "00600350000453",

        ifsc: "ICIC0000004",

        SoliteckInternalSenderId: "AS Recived In Create Sender Response",

        ClientOrderId: ""

      },

      request: "All headers Required",

      response: {
        success: [
          {
            id: 1,
            info: "  Beneficiary Added Successfully",
            code: {
              responseCode: 200,
              responseMessage:
                " Beneficiary Added Successfully",
              data: "Token",
              responseData: 11117,

            },
          },
          {
            id: 2,
            info: " Beneficiary Already Inserted ",
            code: {
              responseCode: 200,
              responseMessage: " Account Already Inserted",
              data: "Token",
              responseData: null,

            },
          },

        ],

        error: [
          {
            id: 1,
            info: " For Token Expiry",
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
            info: "In case of any error",
            code: {
              responseCode: 500,
              responseMessage: "Error Message.",
              data: null,
              responseData: null,
              signalR: null,
            },
          },
        ],
      },




    },
    {
      title: "Card Collection Url Bulk Pay ",
      topText: "/CardCollectionUrl",
      post: {

        Token: " SAME VALUE AS IN HEADER ‘ClientToken KEY’  ",

        beneficiaryId: "AS Recived In Create Beneficiary Response",

        txnSenderId: " AS Recived In Add Card Details Response",

        amount: 2000,

        additionalCharge: 1.00,

      },

      request: "All headers Required",

      response: {
        success: [
          {
            id: 1,
            info: "  Beneficiary Added Successfully",
            code: {
              responseCode: 200,
              responseMessage:
                " success",
              data: null,
              responseData: "{\"collectionId\":\"1234\",\"reference\":\"1632376\",\"amount\":\"12388\",\"status\":\"\",\"message\":\"\",\"utr\":\"27647216476\",\"senderId\":\"UCDPREF008273\",\"collectionUrl\":\"\",\"createdAt\":\"\",\"updatedAt\":\"\",\"type\":1,\"charge\":122.34,\"gst\":1.0,\"payouts\":[{\"transactionId\":\"67364727423712912\",\"amount\":500.0,\"accountNumber\":\"1029384756\",\"ifsc\":\"IFSC0000008\",\"beneficiaryName\":\"Charlie Brown\",\"status\":\"\",\"message\":\"\",\"paymentMode\":\"IMPS\",\"utr\":\"32472136426\",\"holderName\":\"\"},{\"transactionId\":\"67364727423712820\",\"amount\":1000.0,\"accountNumber\":\"1029384856\",\"ifsc\":\"IFSC0000007\",\"beneficiaryName\":\"Bob Johnson\",\"status\":\"\",\"message\":\"\",\"paymentMode\":\"IMPS\",\"utr\":\"726487824682\",\"holderName\":\"\"}]}",

            },
          },
          {
            id: 2,
            info: "  Amount should be greater than or equal to 500 ",
            code: {
              responseCode: 204,
              responseMessage: " Amount should be greater than or equal to 500",
              data: "Token",
              responseData: null,

            },
          },

          {
            id: 3,
            info: " Amount greater than 14,000 are not allowed  ",
            code: {
              responseCode: 204,
              responseMessage: "Amount greater than 14,000 are not allowed",
              data: "Token",
              responseData: null,

            },
          },

        ],

        error: [
          {
            id: 1,
            info: " For Token Expiry",
            code: {
              responseCode: 401,
              responseMessage: "Token Expired / Invalid, Please login again.",
              data: "Token",
              responseData: null,
              signalR: null,
            },
          },
          {
            id: 2,
            info: "In case of any error",
            code: {
              responseCode: 500,
              responseMessage: "Error Message.",
              data: "Token",
              responseData: null,
              signalR: null,
            },
          },
        ],
      },




    },
    {
      title: "Upload Credit Card Image",
      topText: "/UploadCreditCardImage ",
      intro: ["All headers Required and also add this headers that mentioned below:","Cardimagetype -> (Front/Back)","SoliteckCardDetailId -> As received in Add Card Details Response"],
      post: "TOKEN",
      request: "All headers Required",

      response: {
        success: [
          {
            id: 1,
            info: "Card Image Uploded Successfully",
            code: {
              responseCode: 200,
              responseMessage: " Card Image Uploded Successfully",
              data: "Token",
              responseData: "{\" VendorFrontCardImg\":\"https://bulkpe-storage.s3.ap-south-1.amazonaws.com/cc/creditcard/images/333456789012123400front.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA2X7G5LDXQKLUKRZW%2F20260422%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260422T104227Z&X-Amz-Expires=3600&X-Amz-Signature=306cf5bfb3a35ee209a39d5c361ce99ecebdd0b14c408eb1a23e886cc7d033b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject\",\" VendorBackCardImg\":\"\",\"cardNo\":\"1234\"}"



            },
          },
          {
            id: 2,
            info: "Card front side image already uploaded!",
            code: {

              responseCode: 400,
              responseMessage: " Card front side image already uploaded!",
              data: "Token",
              responseData: null

            },
          },

          {
            id: 3,
            info: "senderId not found!",
            code: { 

   responseCode: 400, 
   responseMessage: "senderId not found!", 
   data: 'TOKEN', 
   responseData: null 

}
          },

        ],

        error: [
          {
            id: 1,
            info: " For Token Expiry",
            code: {
              responseCode: 401,
              responseMessage: "Token Expired / Invalid, Please login again.",
              data: "Token",
              responseData: null,
              signalR: null,
            },
          },
          {
            id: 2,
            info: "In case of any error",
            code: {
              responseCode: 500,
              responseMessage: "Error Message.",
              data: "Token",
              responseData: null,
              signalR: null,
            },
          },
        ],
      },




    },
  ],
};
