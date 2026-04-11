import { MainInterface } from "@/app/types/MainPage";
export const bbpsonline: MainInterface = {
  title: "SOLITECK PAYOUTS(BBPS)| Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/BBPSOfflineTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

  // Authentication: {
  //   Clientid: "Provided by Soliteck",
  //   ClientPass: "Provided by Soliteck",
  //   ClientTPin: "Provided by Soliteck",
  //   ClientSecret: "Provided by Soliteck",
  //   ClientToken: "From GenerateUATToken API",
  // },

  Endpoints: [
    {
      title: "Generate Token",
      topText: "/GenerateUATToken",
      post: "TOKEN",
      request:
        "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

      response: {
        success1: {
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Token Generated Success",
            data: "Generated Token",
            responseData: null,
            signalR: null,
          },
        },

        error1: {
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Client_Id is not present",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
      },
      note: "The Token is valid for 20 mins after creation. To check Token validity always hit refresh token API",
    },

    {
      title: "Verify Token",
      post: "TOKEN",
      topText: "/VerifyUATToken",
      request: "All headers required",

      response: {
        success: {
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Token Is Valid",
            data: "Token",
            responseData: null,
            signalR: null,
          },
        },

        error1: {
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Token Expired, Re-Generate Token",
            data: null,
            responseData: null,
            signalR: null,
          },
        },
      },
      note: "-",
    },

    {
      id: 3,
      title: "Get Service for BBPS Online",
      post: "TOKEN",
      request: "All headers required",
      topText: "{BBPS Base URL} /GetServices",

      response: {
        success1: {
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Data Found",
            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA70WLd/ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",

            responseData: ` [{"Id":1,"ServiceName":"EDUCATION"},{"Id":2,"ServiceName":"LOAN"},{"Id":3,"ServiceName":"ELECTRICITY"},{"Id":4,"ServiceName":"BROADBAND POSTPAID"},{"Id":5,"ServiceName":"WATER"},{"Id":6,"ServiceName":"MUNICIPAL TAXES"},{"Id":7,"ServiceName":"INSURANCE"},{"Id":8,"ServiceName":"HOUSING SOCIETY"},{"Id":9,"ServiceName":"GAS"},{"Id":10,"ServiceName":"FASTTAG"},{"Id":11,"ServiceName":"SUBSCRIPTION"},{"Id":12,"ServiceName":"MOBILE POSTPAID"},{"Id":14,"ServiceName":
              "LANDLINE POSTPAID"},{"Id":15,"ServiceName":"CABLE TV"},
              {"Id":16,"ServiceName":"CLUBS & ASSOCIATION"},{"Id":17,
                "ServiceName":"DTH"},{"Id":18,"ServiceName":"LPG GAS"},
                {"Id":19,"ServiceName":"HOSPITAL"},{"Id":20,"ServiceName":
                  "CREDIT CARD"},{"Id":21,"ServiceName":"RECURRING DEPOSIT"},
                  {"Id":22,"ServiceName":"MUNICIPAL SERVICES"},{"Id":23,"ServiceName":"RENTAL"}]`,
          },
        },

        error1: {
          info: "",
          code: {
            //401
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
          },
        },

        error2: {
          info: "",
          code: {
            //400
            responseCode: 400,
            responseMessage: "Error Message.",
            data: null,
            responseData: null,
          },
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation.",
      table: [
        { id: "Unique Id for service. " },
        { ServiceName: "Bill Payment Service Name. " },
      ],
    },
    {
      id: 4,
      title: "Get Billers",
      topText: " {BBPS Base URL}/GetBillers",
      request: "All headers required",
      post: {
        serviceId: "id from getservices api responsedata",
      },

      response: {
        success1: {
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "Data found",
            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA70WLd    /ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",
            responseData: `[{"Id":772,"ServiceName":"LOAN","BillerId":"121F00000NAT4D","BillerName":
              "121 Finance Private Limited","BillerAdhoc":false,"BillerFetchRequirement":
              "MANDATORY","BillerPaymentExactness":"Exact and above","BillerSupportBillValidation":
              "NOT_SUPPORTED","BillerInputParams":"[{\\"ParamName\\":\\"Loan Account Number\\",\\"DataType\\":\
              \"ALPHANUMERIC\\",\\"IsOptional\\":\\"false\\",\\"MinLength\\":8,\\"MaxLength\\":35,\\
              "Visibility\\":\\"true\\"}]","Status":true},{"Id":773,"ServiceName":"LOAN","BillerId":
              "AADH00000NATPT","BillerName":"Aadhar Housing Finance Limited","BillerAdhoc":false,
              "BillerFetchRequirement":"MANDATORY","BillerPaymentExactness":"Exact","BillerSupportBillValidation
              ":"NOT_SUPPORTED","BillerInputParams":"[{\\"ParamName\\":\\"Application ID\\",\\"DataType\\":
                \\"ALPHANUMERIC\\",\\"IsOptional\\":\\"false\\",\\"MinLength\\":8,\\"MaxLength\\":8,\\
                "Visibility\\":null}]","Status":true},{"Id":774,"ServiceName":"LOAN","BillerId":"AAVA00000NATMF
                ","BillerName":"AAVAS FINANCIERS LIMITED","BillerAdhoc":false,"BillerFetchRequirement":
                "MANDATORY","BillerPaymentExactness":"Exact and below","BillerSupportBillValidation"
                :"NOT_SUPPORTED","BillerInputParams":"[{\\"ParamName\\":\\"Loan no\\",\\"DataType\\":\\"ALPHANUMERIC\\",\\"IsOptional\\":\\"false\\",\\"MinLength\\":20,\\"MaxLength\\":20,\\"Visibility\\":null}]","Status":true},{"Id":775,"ServiceName":"LOAN","BillerId":"ADAN00000NATI9","BillerName":"Adani Housing Finance","BillerAdhoc":false,"BillerFetchRequirement":"MANDATORY","BillerPaymentExactness":"Exact and below","BillerSupportBillValidation":"NOT_SUPPORTED","BillerInputParams":"[{\\"ParamName\\":\\"Loan Number\\",\\"DataType\\":\\"ALPHANUMERIC\\",\\"IsOptional\\":\\"false\\",\\"MinLength\\":5,\\"MaxLength\\":20,\\"Visibility\\":null}]","Status":true}]`,
          },
        },

        error1: {
          info: "",
          code: {
            //401
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
          },
        },

        error2: {
          info: "",
          code: {
            //400
            responseCode: 400,
            responseMessage: "Error Message.",
            data: null,
            responseData: null,
          },
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation. ",

      table: [
        { id: "Unique Operator Id.  " },
        { serviceName: "Bill Payment Service Name" },
        { BillerId: "Unique alphanumeric code to identify each biller. " },
        { BillerName: "Biller name as register in system. " },
        {
          BillerAdhoc:
            "Describes if the biller accept Ad-hoc amount payments. (biller Adhoc=true along with biller Fetch Requiremet = MANDATORY enables the biller Payment Exactness of the biller) ",
        },
        {
          BillerFetchRequirement:
            "Indicates if the Biller allows Bill Fetch or not–possible values are MANDATORY, OPTIONAL, NOT_SUPPORTED. ",
        },
        {
          BillerPaymentExactness:
            "ndicates if the Biller (having Mandatory Bill Fetch) allows exact payment or not–possible values are Exact, Exact and above, Exact and below.",
        },
        {
          BillerSupportBillValidation:
            "Indicates if the Biller allows Bill Validation or not–possible values are MANDATORY,OPTIONAL, NOT_SUPPORTED. ",
        },
        {
          BillerInputParams:
            "List of customer parameters required by a biller for processing the request. ",
        },
      ],
    },
    {
      id: 5,
      title: "Bill Fetch",
      topText: "{BBPS Base URL} /BillFetch",
      request: "All headers required",
      post: {
        BillerId: "Id From GetBillers API responseData",
        CustomerMobile: "1111111111",
        customerParams: {
          paramName: "paramValue",
          paramName1: "ParamValue",
        },
      },

      response: {
        success1: {
          info: "hihih",
          code: {
            responseCode: 200,
            responseMessage: "Success",
            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA70WLd    /ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",
            responseData:
              '{"BillerId":"Id From GetBillers API responseData","BillerName":"BBEDCL","CustomerName":"MR/MRS RAJAWAT SINGH M KAUR ","CustomerNumber":"1111111111","Params":{"p":"11","p q":"22","p q r":"33","p q r s":"44","p q r s t":"55"},"BillDate":"2025-06-14","DueDate":"2025-06-20","BillPeriod":"1.03","AmountDue":"1000","AmountExact":"Exact and above","RefId":"HNKLLJAUZ3YA86SJFWK1ZITYF2B50567478"}',
          },
        },
        error1: {
          info: "",
          code: {
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again.",
            data: null,
            responseData: null,
          },
        },
        error2: {
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Error Message",
            data: null,
            responseData: null,
          },
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation",
      table: [
        { RefId: "RefId required for Bill Pay request" },
        { VendorRefNumber: "UTR / OTHER REFRENCE ID " },
        { TransactionMode: "Transaction Mode " },
        { ExecutionMode: "Execution Mode " },
        {
          StatusId: [
            {
              status1: "success",
            },
            {
              status0: "failed",
            },
            {
              status3: "pending",
            },
          ],
        },
        {
          SPTransactionRef: "Soliteck Transaction Reference ",
        },
        {
          CustomerDetails: "Mobile Number ",
        },
        {
          TimeSeconds: "Time of Transaction ",
        },
        {
          TransactionName: "Transaction Name ",
        },
        {
          Params: "BillerInputParams from GetBillers API responseData. ",
        },
      ],
    },
    {
      id: 6,
      title: "Bill Pay",
      topText: "{BBPS Base URL}/BillPay",
      request: "All headers required",
      // info: [
      //   "For Success, use the Amount = “599”, BillerId = “APBB11118PPS12” and RefId = “HNKLLJAUZ3YA86SJFWK1ZITYF2B50567478”. ",
      //   "For Pending, use the Amount = “799”,BillerId = “APBB11118PPS12” and  RefId = “HNKLLJAUZ3YA86SJFWK1ZITYF2B50567478”. ",
      //   "For Failed, use the Amount = “699”, BillerId = “APBB11118PPS12” and RefId = “HNKLLJAUZ3YA86SJFWK1ZITYF2B50567478”. ",
      // ],

      post: {
        BillerId: "APBB11118PPS12",
        CustomerMobile: "1111111111",
        Params: {
          ParamName: "ParamValue",
          ParamName1: "ParamValue",
        },
        Amount: "599",
        RefId: "RefId From Bill Fetch ResponseData (Not required in Quick pay)",
        Mobile: "232434545",
        OpratorId: "Id from GetBillers API responseData",
        ClientOrderId:
          "MERCHANT ORDER ID (should be unique 20 digit aplhanumeric)",
        ExcecutionMode: "1 for Web And 2 for Android",
      },
      response: {
        success: {
          info: "",
          code: {
            responseCode: 200,
            responseMessage: "BILL PAYMENT SUCCESS",
            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",
            responseData:
              ' {"MobileNumber":null,"Amount":"599","ProductId":null,"OperatorId":null,"VendorRefNumber":"232347878458985","TransactionMode":"0","ExecutionMode":"1","StatusId":"1","SPTransactionRef":"67679879879878","CustomerDetails":"{\\"Input\\":[{\\"ParamName\\":\\"p\\",\\"ParamValue\\":\\"11\\"},{\\"ParamName\\":\\"p q\\",\\"ParamValue\\":\\"22\\"},{\\"ParamName\\":\\"p q r\\",\\"ParamValue\\":\\"33\\"},{\\"ParamName\\":\\"p q r s\\",\\"ParamValue\\":\\"44\\"},{\\"ParamName\\":\\"p q r s t\\",\\"ParamValue\\":\\"55\\"}]}","TransactionName":"BillPayments","TimeSeconds":"345456","TPin":null,"Reason":null,"VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}',
          },
        },
        success1: {
          info: "",
          code: {
            responseCode: 201,
            responseMessage: "BILL PAYMENT PENDING",
            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",
            responseData:
              '{"MobileNumber":null,"Amount":"799","ProductId":null,"OperatorId":null,"VendorRefNumber":"232347878458985","TransactionMode":"0","ExecutionMode":"1","StatusId":"3","SPTransactionRef":"67679879879878","CustomerDetails":"{\\"Input\\":[{\\"ParamName\\":\\"p\\",\\"ParamValue\\":\\"11\\"},{\\"ParamName\\":\\"p q\\",\\"ParamValue\\":\\"22\\"},{\\"ParamName\\":\\"p q r\\",\\"ParamValue\\":\\"33\\"},{\\"ParamName\\":\\"p q r s\\",\\"ParamValue\\":\\"44\\"},{\\"ParamName\\":\\"p q r s t\\",\\"ParamValue\\":\\"55\\"}]}","TransactionName":"BillPayments","TimeSeconds":"345456","TPin":null,"Reason":null,"VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}',
          },
        },

        success2: {
          info: "",
          code: {
            responseCode: 204,

            responseMessage: "BILL PAYMENT FAILED",

            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA70WLd03Scg4MLNP7mVIEiYpB3NifyWWIEBjKghXuKKQR2Sli4o70R6VtleI5qcXvw8sC/ZUr1XOPCo6j9411nbelIXevnjJjWclBJpqc305qvkDF0FNAT+PKnCIDaH+/gO/oh6eRe1YA=",
            responseData:
              '{"MobileNumber":null,"Amount":"699","ProductId":null,"OperatorId":null,"VendorRefNumber":"232347878458985","TransactionMode":"0","ExecutionMode":"1","StatusId":"0","SPTransactionRef":"67679879879878","CustomerDetails":"{\\"Input\\":[{\\"ParamName\\":\\"p\\",\\"ParamValue\\":\\"11\\"},{\\"ParamName\\":\\"p q\\",\\"ParamValue\\":\\"22\\"},{\\"ParamName\\":\\"p q r\\",\\"ParamValue\\":\\"33\\"},{\\"ParamName\\":\\"p q r s\\",\\"ParamValue\\":\\"44\\"},{\\"ParamName\\":\\"p q r s t\\",\\"ParamValue\\":\\"55\\"}]}","TransactionName":"BillPayments","TimeSeconds":"345456","TPin":null,"Reason":null,"VendorId":null,"ClientOrderId":null,"Process":null,"VendorCharges":null,"VendorGST":null}” ',
          },
        },
        error1: {
          info: "",
          code: {
            responseCode: 401,
            responseMessage: "Token Expired / Invalid, Please login again",
            data: null,
            responseData: null,
          },
        },
        error2: {
          info: "",
          code: {
            responseCode: 400,
            responseMessage: "Error Message.",
            data: null,
            responseData: null,
          },
        },
      },
      note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation",

      table: [
        { Amount: "Amount " },
        { VendorRefNumber: "UTR / OTHER REFRENCE ID " },
        { TransactionMode: "Transaction Mode " },
        { ExecutionMode: "Execution Mode " },
        {
          StatusId: {
            status1: "success",
            status0: "Failed",
            status3: "pending",
          },
        },
        { SPTransactionRef: "Soliteck Transaction Reference " },
        { CustomerDetails: "Mobile Number " },
        { TimeSeconds: "Time of Transaction " },
        { TransactionName: "Transaction Name " },
      ],
    },
  ],
};
