import { MainInterface } from "@/app/types/MainPage";

export const WebHook: MainInterface = {
    title: "SOLITECK MOBILE REG API | Digital Transformation made easy",



    note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

    Endpoints: [
        {
            title: "Webhook",
            notes: ["Testing", "Webhooks are generally not available in UAT/Sandbox", "You can test in: Production environment only (with controlled transactions)"],

            // topText: "-",
            // post: "-",
            // request: "-",
            response: {
                success: [{
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
                responseKeysTable: {
                    id: 8,
                    title: "Transaction Status Codes",
                    tableData: [
                        { key: "SUCCESS (200)", description: "Transaction Success" },
                        { key: "FAILED (204)", description: "Transaction failed" },
                        { key: "PENDING (201)", description: "Transaction Pending" }
                    ]
                },
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
            note: "Always check using: transactionId or clientOrderId",
        },
    ],
};
