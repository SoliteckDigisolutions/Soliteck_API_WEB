import { MainInterface } from "@/app/types/MainPage";

export const CheckTransacStatus: MainInterface = {
    title: "SOLITECK MOBILE REG API | Digital Transformation made easy",
    BaseUrls: {
        link: "https://api-uat.soliteck.in/api/AdminActivity",
        auth: "https://api-uat.soliteck.in/uat/api/TokenUAT/",
    },



    note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

    Endpoints: [

        {
            title: "Check Transaction Status",

            topText: "/CheckTxnStatus",
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
                        responseData: `[{\"Amount\":\"1000\",\"VendorRefNumber\":\"29974465\",\"TransactionMode\":\"Wallet\",\"ExecutionMode\":1,\"StatusId\":1,\"SPTransactionRef\":\"67364727423712912\",\"CustomerDetail\":\"28934709239\",\"TransactionName\":\"Payout\",\"TimeSeconds\":\"16218013\"}]`,
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

    ],
};
