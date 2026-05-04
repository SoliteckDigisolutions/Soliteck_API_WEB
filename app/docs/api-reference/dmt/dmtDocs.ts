import { MainInterface } from "@/app/types/MainPage";

export const dmtDocs: MainInterface = {
    title: "SOLITECK DOMESTIC MONEY TRANSFER API'S | Digital Transformation made easy",

    BaseUrls: {
        link: "https://api-uat.soliteck.in/uat/api/DMTTxn",
        auth: "https://api-uat.soliteck.in/uat/api/TokenUAT",
    },

    note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

    Endpoints: [
        {
            title: "Generate Token",
            subInforamtion: "",
            topText: "/GenerateUATToken",
            post: "TOKEN",
            request:
                "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

            response: {
                success:
                    [{
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 200,
                            responseMessage: "Token Generated Success",
                            data: "“Generated TOKEN e.g edgfuedieodjieojfweifiuejeijfief",
                            responseData: null,
                            signalR: null,
                        }
                    }],

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
                        info: "",
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
            title: "Remitter Login",
            notes: [
                "This API returns remitter details along with a list of beneficiaries. It includes:",
                "Active beneficiaries (BeneficiaryList)  ",
                "All beneficiaries (AllBeneficiaryList, including inactive)  ",
            ],
            subInforamtion: "This API returns remitter details along with a list of beneficiaries. It includes: ",
            post: {

                "RemitterMobile": "2000000000"// 200 , 3000000000 - 201, 4000000000 - 201 , 



            },
            topText: "{ DMT Base URL}/RemitterLogin ",
            request: "All headers required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            "responseCode": 200,

                            "responseMessage": "Remitter Login Successfully !!",

                            "data": "Token",

                            "responseData": "{\"RemitterName\":\"John Doe\",\"RemitterMobile\":\"9999888877\",\"AvailableLimit\":\"50000\",\"MonthlyLimit\":\"50000\",\"BeneficiaryList\":[{\"BeneId\":\"22222\",\"BeneName\":\"Emma Johnson\",\"BeneAccount\":\"9876543210\",\"BeneIFSC\":\"IFSC0000003\",\"BeneBank\":\"Bank of XYZ\",\"IsValidate\":\"1\",\"BeneVendorStatus\":\"true\",\"BeneBankCode\":\"BBC004\",\"Pincode\":\"110004\",\"IMPS\":\"1\",\"NEFT\":\"1\"},{\"BeneId\":\"22223\",\"BeneName\":\"David Brown\",\"BeneAccount\":\"1234567890\",\"BeneIFSC\":\"IFSC0000004\",\"BeneBank\":\"ABC Bank\",\"IsValidate\":\"true\",\"BeneVendorStatus\":\"true\",\"BeneBankCode\":\"BBC005\",\"Pincode\":\"110005\",\"IMPS\":\"0\",\"NEFT\":\"1\"}],\"AllBeneficiaryList\":[{\"BeneId\":\"22221\",\"BeneName\":\"Emma Johnson\",\"BeneAccount\":\"9876543210\",\"BeneIFSC\":\"IFSC0000008\",\"BeneBank\":\"Bank of XYZ\",\"IsValidate\":\"1\",\"IsActive\":\"1\",\"BeneBankCode\":\"BBC006\",\"BeneVendorStatus\":\"false\",\"Pincode\":\"110006\",\"IMPS\":\"1\",\"NEFT\":\"1\"},{\"BeneId\":\"22224\",\"BeneName\":\"David Brown\",\"BeneAccount\":\"1234567890\",\"BeneIFSC\":\"IFSC0000009\",\"BeneBank\":\"ABC Bank\",\"IsValidate\":\"true\",\"IsActive\":\"true\",\"BeneBankCode\":\"BBC007\",\"BeneVendorStatus\":\"false\",\"Pincode\":\"110007\",\"IMPS\":\"0\",\"NEFT\":\"1\"},{\"BeneId\":\"22225\",\"BeneName\":\"Sarah Miller\",\"BeneAccount\":\"1029384756\",\"BeneIFSC\":\"IFSC0000010\",\"BeneBank\":\"Bank of PQR\",\"IsValidate\":\"true\",\"IsActive\":\"false\",\"BeneBankCode\":\"BBC008\",\"BeneVendorStatus\":\"false\",\"Pincode\":\"110008\",\"IMPS\":\"1\",\"NEFT\":\"0\"}]}"

                        }
                    },
                    {
                        id: 2,
                        info: "",
                        code:

                        {



                            "responseCode": 201,

                            "responseMessage": "Aadhaar Verification pending",

                            "data": "Token",

                            "responseData": "{\"VendorId\":3,\"DBStatus\":1,\"RemitterRegData\":\"\",\"RemitterNumber\":\"3000000000\"}"

                        },
                    },
                    {
                        id: 3,
                        info: "",
                        code: {

                            "responseCode": 201,

                            "responseMessage": "Proceed For Registration",

                            "data": "Token",

                            "responseData": "{\"VendorId\":3,\"DBStatus\":0}"

                        }

                        ,
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
            note: ` Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation. `,

            table: {
                remitter: {
                    id: 1,
                    title: "Remitter Login Response",
                    tableData: [
                        {
                            id: 1,
                            key: "RemitterName",
                            description: "Remitter Name",
                        },
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
                        {
                            id: 4,
                            key: "MonthlyLimit",
                            description: "Limit for month",
                        },
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
                    title: "Beneficiary & All Beneficiary List",
                    tableData: [
                        {
                            id: 1,
                            key: "BeneId",
                            description: "Unique Id for Beneficiary",
                        },
                        {
                            id: 2,
                            key: "BeneName",
                            description: "Beneficiary Name",
                        },
                        {
                            id: 3,
                            key: "BeneAccount",
                            description: "Beneficiary Account",
                        },
                        {
                            id: 4,
                            key: "BeneIFSC",
                            description: "Beneficiary IFSC",
                        },
                        {
                            id: 5,
                            key: "BeneBank",
                            description: "Bank Name",
                        },
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
                            description: "Bank Code for the respective bank",
                        },
                        {
                            id: 9,
                            key: "BeneVendorStatus",
                            description:
                                "True for Beneficiary list, False for All Beneficiary list",
                        },
                        {
                            id: 10,
                            key: "Pincode",
                            description: "Beneficiary Pincode",
                        },
                        {
                            id: 11,
                            key: "IMPS",
                            description: "Is IMPS Available (true/false)",
                        },
                        {
                            id: 12,
                            key: "NEFT",
                            description: "Is NEFT Available (true/false)",
                        },
                    ],
                },

                nonRegisteredRemitter: {
                    id: 3,
                    title: "Non-Registered Remitter",
                    tableData: [
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
                                "1: Only OTP required, 0: Full remitter data required",
                        },
                    ],
                },
            }
        },

        {
            title: "Remitter Registration For DMT  ",
            subInforamtion: "This API is used to register a new remitter or complete the remitter setup after login. It verifies the OTP sent to the remitter’s mobile number and finalizes the registration process.",
            notes: [

                "RemitterMobile - Mobile number of the remitter (sender). Must be a valid 10-digit number.",

                "DBStatus - Status flag received from remitter login response. Used to identify remitter state.",

                "VendorId - Unique ID of the vendor/service provider. Comes from remitter login response.",

                "AdditionalRegData - Extra registration data. Usually 'NA' if not required. Used during Aadhaar verification and remitter registration.",

                "AadhaarNumber - Aadhaar number of the remitter. Used for identity verification.",

                "BioPId - Biometric PID (Personal Identity Data). Used during Aadhaar authentication.",

                "OTP - One-Time Password. Required for verification. Keep it null during initial registration request if OTP not yet generated.",

                "FNAME - First name of the remitter. Required during new remitter registration.",

                "LNAME - Last name of the remitter. Required during new remitter registration.",

                "PINCODE - Postal PIN code of the remitter’s address. Required during registration."

            ],

            post: {
                "RemitterMobile": "3000000000",
                "DBStatus": "1", // use from remitter login response 
                "VendorId": "3", // use from remitter login response
                "AdditionalRegData": "NA",// for verify aadhaar and otp and register remitter 

                "AadhaarNumber": "67081XXXXXXX",// for verify aadhaar and otp and register remitter 
                "BioPId": "ASDFDFDF", // for verify aadhaar , otp and register remitter 
                "OTP": "123456",  // for new remitter registration otp null
                "FNAME": "FIRSTNAME", // for new remitter registration
                "LNAME": "LASTNAME", // for new remitter registration
                "PINCODE": "986598"   // for new remitter registration
            }
            ,
            topText: "/RemitterRegistration",
            request: "All headers required",

            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            "responseCode": 200,

                            "responseMessage": "OTP Verified Successfully, Remitter Registered.",

                            "data": "Token",

                            "responseData": null

                        },
                    },
                    {
                        id: 1,
                        info: "",
                        code: {

                            "responseCode": 201,

                            "responseMessage": "Aadhaar Verification pending",

                            "data": "Token",

                            "responseData": "{\"VendorId\":3,\"DBStatus\":\"1\",\"RemitterNumber\":\"3000000000\",\"RemitterRegData\":\"additional reg data\"}"

                        }
                    },
                    {
                        id: 1,
                        info: "",
                        code: {

                            "responseCode": 200,

                            "responseMessage": "OTP Send to registered Mobile Number.",

                            "data": "Token",

                            "responseData": "{\"VendorId\":3,\"DBStatus\":1,\"RemitterRegData\":\"additional reg data\",\"RemitterNumber\":\"3000000000\",\"Fname\":\"Emma Johnson\",\"Pincode\":\"123455\"}"

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
            title: "Add Beneficiary For DMT ",
            post: {
                RemitterNumber: "2000000000",
                BeneId: "11113 / 11112 / 11116",
            },
            subInforamtion: "This API is used to add a new beneficiary to the remitter’s account for DMT transactions. It captures beneficiary details such as name, bank account number, IFSC, bank code, and pincode and returns BeneId in ResponseData.",
            post2: {
                "BeneName": "Alice Smith", //If you are adding new beneficiary  

                "BeneAccount": "1234567890", //If you are adding new beneficiary  

                "BeneIFSC": "IFSC0001", //If you are adding new beneficiary        "BankCode": "BBC001", //If you are adding new beneficiary  

                "BenePincode": "110001" //If you are adding new beneficiary 

            },
            notes: ["For Uat Testing:", "If you are adding from all Allbeneficiarylist For Success use RemitterNumber 2000000000", "BeneID 11113 / 11112 / 11116"],
            notes2: ["For Uat Testing:", "If you are adding new Beneficiary"],
            topText: "{DMT Base URL} /AddBeneToList",
            request: "All headers required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            "responseCode": 200,

                            "responseMessage": "Beneficiary Added Successfully",

                            "data": "TOKEN",

                            "responseData": "11123", //reference Beneficiary id 

                        },
                    },
                ],

                error: [{
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
            note: `Beneficiary list and AllBeneficiaryList are separate bene’s received in login response to access bene’s from all list they need to be added in Beneficiary list with Add bene API.  `,
        },

        {
            title: "Delete Beneficiary For DMT  ",
            topText: "/DeleteBeneficiary",
            subInforamtion: "This API is used to delete an existing beneficiary linked to the remitter. It requires the remitter’s mobile number, token, and the beneficiary ID to identify the record.",
            post: {
                RemitterNumber: "2000000000",
                Token: "SAME VALUE AS IN HEADER 'ClientToken' KEY",
                BeneId: `11114 / 11111`,
            },
            notes: ["For Uat Testing:", "During UAT, the delete beneficiary API will return a success response when the RemitterNumber is 2000000000 and the BeneId is either 11114 or 11111. This behavior is intended for testing purposes only."],
            request: "All headers Required",
            response: {
                success: [{
                    id: 1,
                    info: "",
                    code: {

                        "responseCode": 200,

                        "responseMessage": "Beneficiary Deleted successfully",

                        "data": "TOKEN",

                        "responseData": null

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
            topText: "{DMT Base URL} /VerifyBene ",
            subInforamtion: "This API is used to verify beneficiary bank account details before initiating a DMT. It validates the account number and IFSC to confirm that the beneficiary information is correct.",
            notes: ["For Uat Testing: If already in active list and need to verify", "Success when RemitterNumber is 2000000000 and BeneId is 11114", "Failed when BeneId is 11111"],
            notes2: ["If you are verifying new Beneficiary use below request body"],
            post: {
                RemitterNumber: "2000000000", //Common
                BeneId: "11114", // if already in active list and need to verify
            },
            post2: {
                RemitterNumber: "2000000000", //Common
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
                success: [{
                    id: 1,
                    info: "",
                    code: {
                        responseCode: 200,
                        responseMessage: "Beneficiary Verified Successfully",
                        data: "TOKEN",
                        responseData: `"{\"beneName\":\"Johnson\",\"beneId\":\"11119\",\"refId\":\"576125376123796989\"}"`,
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
            title: "DMT  Transfer",
            subInforamtion: "This API initiates a DMT transfer using the remitter’s registered mobile number, beneficiary ID, amount, client order ID, and transfer mode (e.g., IMPS). Upon successful processing, it returns transaction details including status, transaction ID, bank reference ID, and beneficiary information.",
            notes: ["For UAT testing: use the BeneId in the request body to get the following responses", "BeneId = 11111 → Success (200)", "BeneId = 11114 → Failed (204)", "BeneId = 11113 → Pending (201)"],
            notes2: ["200 for Success, 201 for Pending and 204 for Failed Transaction"],

            topText: "POST {DMT Base URL} /DMTTransfer ",
            post: {

                "RemitterNumber": "2000000000",

                "BeneId": "11113 / 11111 / 11114",

                "Amount": "1400",

                "ClientOrderId": "6698676234872634", // It Should be Unique numeric  

                "Mode": "IMPS"

            },
            request: "All header Required",
            response: {
                success: [{
                    id: 1,
                    info: "",
                    code: {

                        "responseCode": 201,

                        "responseMessage": "Money Transfer Pending",

                        "data": null,

                        "responseData": "[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\":\"9999999999\",\"TransactionMode\":\"Immediate\",\"TransferMode\":\"NEFT\",\"BeneAccount\":\"76723728234\",\"BeneIfsc\":\"HDFC0000001\",\"BeneName\":\"Kumar\",\"BeneBank\":\"HDFC BANK\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck DMT\",\"TransactionNumber\":\"67364727423712768\",\"TransactionAmount\":\"100\",\"BankTxnId\":\"2345345456\",\"OrderId\":\"ORD123456\",\"TransactionDate\":\"04-05-2026 12.51.44 P\",\"ServiceCharge\":\"10\",\"Status\":\"Pending\",\"Message\":\"Money Transfer Pending\"}]}]"

                    },
                },
                {
                    id: 2,
                    info: "",
                    code: {

                        "responseCode": 204,

                        "responseMessage": "Money Transfer Failed",

                        "data": null,

                        "responseData": "[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\":\"9999999999\",\"TransactionMode\":\"Immediate\",\"TransferMode\":\"NEFT\",\"BeneAccount\":\"76723728234\",\"BeneIfsc\":\"HDFC0000001\",\"BeneName\":\"Kumar\",\"BeneBank\":\"HDFC BANK\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck DMT\",\"TransactionNumber\":\"673647274237129456\",\"TransactionAmount\":\"100\",\"BankTxnId\":\"2345345456\",\"OrderId\":\"ORD123456\",\"TransactionDate\":\"04-05-2026 12.49.59 P\",\"ServiceCharge\":\"10\",\"Status\":\"Failed\",\"Message\":\"Money Transfer Failed\"}]}]"

                    },
                },
                {
                    id: 3,
                    info: "",
                    code: {

                        "responseCode": 200,

                        "responseMessage": "Money Transfer Success",

                        "data": null,

                        "responseData": "[{\"RetailerNumber\":\"1234567898\",\"ShopName\":\"ABC Shop\",\"RetailerName\":\"Ansh\",\"RemitterName\":\"Amit\",\"RemitterNumber\":\"9999999999\",\"TransactionMode\":\"UAT\",\"TransferMode\":\"NEFT\",\"BeneAccount\":\"1234567890\",\"BeneIfsc\":\"IFSC0000001\",\"BeneName\":\"Alice Smith\",\"BeneBank\":\"Bank of ABC\",\"ProductName\":\"Eco\",\"Transfers\":[{\"OperatorName\":\"Soliteck DMT\",\"TransactionNumber\":\"67364727423712912\",\"TransactionAmount\":\"100\",\"BankTxnId\":\"2345345456\",\"OrderId\":\"ORD123456\",\"TransactionDate\":\"2026-05-04T07.22.17Z\",\"ServiceCharge\":\"10\",\"Status\":\"Success\",\"Message\":\"Transfer completed successfully\"}]}]"

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
                    // {
                    //   id: 2,
                    //   info: "",
                    //   code: {
                    //     responseCode: 401,
                    //     responseMessage: "Token Expired / Invalid, Please login again.",
                    //     data: null,
                    //     responseData: null,
                    //     signalR: null,
                    //   },
                    // },
                ]
            },

            table: {
                transaction: {
                    id: 1,
                    title: `DMT Transfer Response
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
                    title: "DMT Under Transfer",
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
            note: "BeneID -> from the Remitterlogin Respose BeneficiaryList or AddBeneficiaryList Response, ClientOrderId -> Should be Unique transaction number",
        }
    ],
};
