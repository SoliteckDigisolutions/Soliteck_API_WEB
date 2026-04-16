import { MainInterface } from "@/app/types/MainPage";

export const bbpsonline: MainInterface = {
  title: "SOLITECK PAYOUTS (BBPS) | Digital Transformation made easy",

  BaseUrls: {
    link: "https://api-uat.soliteck.in/uat/api/BBPSOfflineTxn/",
    auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
  },

  note: "Token valid for 20 minutes. Always refresh before expiry.",

  Endpoints: [

    {
      id: 1,
      title: "Generate Token",
      topText: "/GenerateUATToken",
      request: "All headers required",

      response: {
        success:[ {
           id: 1,
            info :"",
          code: {
            responseCode: 200,
            responseMessage: "Token Generated Success",
            data: "Generated Token",
          },
        },],
        error: [{
          id: 2,
          info :"",
          code: {
            responseCode: 400,
            responseMessage: "Client_Id is not present",
          },
        },]
      },
    },


    {
      id: 2,
      title: "Verify Token",
      topText: "/VerifyUATToken",
      request: "All headers required",

      response: {
        success: [{
          id: 1,
          info :"",
          code: {
            responseCode: 200,
            responseMessage: "Token Is Valid",
          },
        },],
        error: [{
          id: 2,
          info :"",
          code: {
            responseCode: 400,
            responseMessage: "Token Expired",
          },
        },]
      },
    },


    {
      id: 3,
      title: "Get Services",
      topText: "/GetServices",
      request: "All headers required",

      response: {
        success: [{
          id: 1,
          info :"",
          code: {
            responseCode: 200,
            responseMessage: "Data Found",
            responseData: [
              { Id: 1, ServiceName: "EDUCATION" },
              { Id: 2, ServiceName: "LOAN" },
              { Id: 3, ServiceName: "ELECTRICITY" },
              { Id: 17, ServiceName: "DTH" },
            ],
          },
        },]
      },

      table: {
        responses: {
          id : 1,
          title: "Service Keys",
          tableData: [
            { key: "Id", desc: "Unique Service Id" },
            { key: "ServiceName", desc: "Service Name" },
          ],
        },
      },
    },


    {
      id: 4,
      title: "Get Billers",
      topText: "/GetBillers",

      post: {
        serviceId: "Id from GetServices API",
      },

      response: {
        success: [{
          id: 1,
          info :"",
          code: {
            responseCode: 200,
            responseMessage: "Data Found",
            responseData: [
              {
                Id: 772,
                BillerName: "Finance Pvt Ltd",
                BillerId: "121F00000NAT4D",
                Status: true,
              },
            ],
          },
        },]
      },

      table: {
        responses: {
          id : 1,
          title: "Biller Keys",
          tableData: [
            { key: "Id", desc: "Unique Biller Id" },
            { key: "BillerId", desc: "Unique Biller Code" },
            { key: "BillerName", desc: "Biller Name" },
            { key: "BillerAdhoc", desc: "Supports Adhoc Payment" },
            { key: "BillerFetchRequirement", desc: "MANDATORY / OPTIONAL" },
            { key: "BillerPaymentExactness", desc: "Exact / Above / Below" },
            { key: "BillerInputParams", desc: "Customer required params" },
          ],
        },
      },
    },


    {
      id: 5,
      title: "Bill Fetch",
      topText: "/BillFetch",

      post: {
        BillerId: "From GetBillers",
        CustomerMobile: "1111111111",
        customerParams: {
          paramName: "value",
        },
      },

      response: {
        success: [{
          id: 1,
          info :"",
          code: {
            responseCode: 200,
            responseMessage: "Success",
            responseData: {
              BillerName: "BBEDCL",
              CustomerName: "RAJAWAT",
              AmountDue: "1000",
              RefId: "ABC123",
            },
          },
        },]
      },

      table: {
        responses: {
          id : 1,
          title: "Bill Fetch Keys",
          tableData: [
            { key: "RefId", desc: "Required for Bill Pay" },
            { key: "AmountDue", desc: "Bill Amount" },
            { key: "CustomerName", desc: "Customer Name" },
          ],
        },
      },
    },


    {
      id: 6,
      title: "Bill Pay",
      topText: "/BillPay",

      post: {
        BillerId: "API ID",
        Amount: "599",
        RefId: "From Bill Fetch",
        ClientOrderId: "Unique ID",
        ExcecutionMode: "1 or 2",
      },

      response: {
        success:[ {
          id: 1,
          info :"",
          code: {
            responseCode: 200,
            responseMessage: "SUCCESS",
            responseData: {
              Amount: "599",
              StatusId: "1",
              VendorRefNumber: "232347878458985",
            },
          },
        },
         {
          id: 2,
          info :"",
          code: {
            responseCode: 201,
            responseMessage: "PENDING",
            responseData: {
              StatusId: "3",
            },
          },
        },
        {
          id: 3,
          info :"",
          code: {
            responseCode: 204,
            responseMessage: "FAILED",
            responseData: {
              StatusId: "0",
            },
          },
        },
      ]

      

        
      },

      table: {
       responses: {
          id : 1,
          title: "Transaction Keys",
          tableData: [
            { key: "Amount", desc: "Transaction Amount" },
            { key: "VendorRefNumber", desc: "UTR / Reference Id" },
            { key: "StatusId", desc: "1=Success, 0=Failed, 3=Pending" },
            { key: "TransactionName", desc: "Bill Payment" },
          ],
        },
      },
    },
  ],
};

