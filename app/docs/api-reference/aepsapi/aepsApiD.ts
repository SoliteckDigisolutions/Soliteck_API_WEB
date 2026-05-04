import { MainInterface } from "@/app/types/MainPage";
import { error } from "console";
import { request } from "http";
import { title } from "process";

export const aepsApiD: MainInterface = {
    title: "SOLITECK MOBILE REG API | Digital Transformation made easy",

    BaseUrls: {
        link: "https://api-uat.soliteck.in/uat/api/AEPSApiUserUat",
        auth: "https://api-uat.soliteck.in/uat/api/TokenUAT",
    },          

    note: "The Token is valid for 20 minutes. Always refresh token before expiry.",

    Endpoints: [
        {
            title: "Generate Token",
            post: "TOKEN",
            topText: "/GenerateUATToken",
            request:
                "All headers required (ClientId, ClientPass, ClientTPin, ClientSecret)",

            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 200,
                            responseMessage: "Token Generated Success",
                            data: "Generated Token",
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
            title: "Verify Token",
            post: "TOKEN",
            topText: "/VerifyUATToken",
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
                    },
                ],

                error: [
                    {
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
            id: 4,
            title: "Merchant LogIn",
            subInforamtion : "This API authenticates the merchant using their registered mobile number. Upon successful login, it returns merchant profile details including personal, business, KYC, and bank information.",
            topText: "{AEPS Base URL}/FP_MerchantLogIn",
            post: {
                MerchantPhoneNumber: "9999999999",
            },
            request: "All headers Required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 200,
                            responseMessage: "Login successful. Welcome back!",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBU8viLZOrzf6zhBHqBYXXZr+zXA3vwLqLWlunZVHRDdu5xYGFMlhd3madexH9D72rQoj38na8NNb4VvxM/P280UDV649jNzLEKa3st+2lGsNuyIzHgKx+9FIpWntBCshf1npcwCloD4Rswo2wIOIYwo=",
                            responseData: "[{\"MerchantPhoneNumber\":9999999999,\"FirstName\":\"Shadulla\",\"LastName\":\"Shaik\",\"MerchantLoginId\":\"shadullashaik20260309160741\",\"MerchantLoginPin\":\"17760573\",\"MerchantAddress1\":\"sector 5 Ghansoli\",\"MerchantState\":\"Maharashtra\",\"MerchantCityName\":\"Khargahr\",\"MerchantDistrictName\":\"Raigad\",\"MerchantPinCode\":410212,\"CompanyLegalName\":\"SD Shop\",\"CompanyType\":\"Courier services — air and ground and freight forwarders\",\"EmailId\":\"test@gmail.com\",\"UserPan\":\"ONWPS3752M\",\"AadhaarNumber\":\"123412341234\",\"MerchantAadharFrontImage\":\"https://transaction-node1.soliteck.in/Uploads/AadhaarFront/IMG-20260309-WA0004.jpg\",\"MerchantAadharBackImage\":\"https://transaction-node1.soliteck.in/Uploads/AadhaarBack/adb [1].png\",\"BackgroundImageOfShop\":\"https://transaction-node1.soliteck.in/Uploads/ShopImage/soliteck ShopImage [31].jpg\",\"MerchantPanImage\":\"https://transaction-node1.soliteck.in/Uploads/Pancard/IMG-20260309-WA0003.jpg\",\"BankProofImage\":\"https://transaction-node1.soliteck.in/Uploads/BankProofAEPS/soliteck ShopImage [16].jpg\",\"CompanyBankAccountNumber\":\"101010101010\",\"BankIfscCode\":\"CNRB0000111\",\"CompanyBankName\":\"Canara Bank erstwhile Syndicate Bank\",\"BankAccountName\":\"Savings account\",\"ShopAddress\":\"Ghansoli navi mumbai\",\"ShopCity\":\"Ghansoli\",\"ShopDistrict\":\"Thane\",\"ShopState\":\"Maharashtra\",\"ShopPincode\":400701,\"ShopLatitude\":\"19.11442450416867\",\"ShopLongitude\":\"73.01719773760345\",\"TradeBusinessProof\":true,\"TermsConditionCheck\":true,\"PhysicalVerification\":true,\"VideoKycWithLatLongData\":true,\"IsOnBoard\":true,\"IsKyc\":2,\"IpAddress\":\"111.79.161.211\",\"NationalBankIdentificationNumber\":607396}]"
                        }



                    },
                    {
                        id: 2,
                        info: "",
                        code: {
                            responseCode: 201,
                            responseMessage: "Please complete your 2FA verification!",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBQoBGYkf3pLovy4l4EiPty85utNqruyiWADL690UkosEHjU6WVEz6XlOfE/LmUW1Vun93Uv2c2kgM5TPS4B+3JpetphBxeZ37elpVQzevIio8FqAfP/ucx/WbrDtIQybnH9xu0VGgmUkzLcjcHCFr94=",
                            responseData: `[{ "MerchantPhoneNumber": "8888888888", "FirstName": "Amit", "LastName": "Verma","MerchantLoginId": "amit_verma01", "MerchantLoginPin": "4321", "MerchantAddress1": "Shop No 8, Laxmi Plaza", "MerchantAddress2": "Near Bus Stand", "MerchantState": "MAHARASHTRA", "MerchantCityName": "Pune", "MerchantDistrictName": "Pune", "MerchantPinCode": "411001", "CompanyLegalName": "Amit Retailers", "CompanyType": "Proprietorship", "EmailId": "amit.verma@test.com", "UserPan": "ZXCVB1234K", "AadhaarNumber": "789678967896", "MerchanrGstinNumber": "27ZXCVB1234K1Z2", "MerchantAadharFrontImage": "https://dummy.com/aadhar_front.jpg", "MerchantAadharBackImage": "https://dummy.com/aadhar_back.jpg", "BackgroundImageOfShop": "https://dummy.com/shop.jpg", "MerchantPanImage": "https://dummy.com/pan.jpg", "BankProofImage": "https://dummy.com/bank.jpg", "CompanyBankAccountNumber": "456789123456", "BankIfscCode": "SBIN0001234", "CompanyBankName": "State Bank of India", "BankAccountName": "Amit Verma", "ShopAddress": "Shop No 8, MG Road", "ShopCity": "Pune", "ShopDistrict": "Pune", "ShopState": "MAHARASHTRA", "ShopPincode": "411001", "ShopLatitude": "18.5204", "ShopLongitude": "73.8567", "TradeBusinessProof": true, "TermsConditionCheck": true, "PhysicalVerification": true, "VideoKycWithLatLongData": false, "IsOnBoard": false, "IsKyc": 2, "IpAddress": "10.0.0.1" 
}]` ,
                        },
                    },
                    {
                        id: 3,
                        info: " ",
                        code: {

                            "responseCode": 202,

                            "responseMessage": "Your KYC verification is pending. Please complete KYC to proceed.",

                            "data": "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBQoBGYkf3pLovy4l4EiPty85utNqruyiWADL690UkosEHjU6WVEz6XlOfE/LmUW1Vun93Uv2c2kgM5TPS4B+3JpetphBxeZ37elpVQzevIio8FqAfP/ucx/WbrDtIQybnH9xu0VGgmUkzLcjcHCFr94=",

                            "responseData": `[{"MerchantPhoneNumber": "7777777777 "FirstName": "Neha "LastName": "Patil "MerchantLoginId": "neha_patil01 "MerchantLoginPin": "5678 "MerchantAddress1": "Flat 302, Sai Residency, Andheri East "MerchantState": "MAHARASHTRA "MerchantCityName": "Mumbai "MerchantDistrictName": "Mumbai Suburban "MerchantPinCode": "400069 "CompanyLegalName": "Neha Traders "CompanyType": "Partnership "EmailId": "neha.patil@test.com "UserPan": "PQRSX5678L "AadhaarNumber": "567856785678 "MerchantAadharFrontImage": "base64_aadhar_front_2 "MerchantAadharBackImage": "base64_aadhar_back_2 "BackgroundImageOfShop": "base64_shop_image_2 "MerchantPanImage": "base64_pan_2 "BankProofImage": "base64_bank_proof_2 "CompanyBankAccountNumber": "987654321098 "BankIfscCode": "ICIC0005678 "CompanyBankName": "ICICI Bank "BankAccountName": "Neha Patil "ShopAddress": "Shop No 5, MG Road "ShopCity": "Mumbai "ShopDistrict": "Mumbai Suburban "ShopState": "MAHARASHTRA "ShopPincode": "400069 "ShopLatitude": "19.11970 "ShopLongitude": "72.84642 "TradeBusinessProof": tru "TermsConditionCheck": tru "PhysicalVerification": tru "VideoKycWithLatLongData": tru "IsOnBoard": tru "IsKyc":  "IpAddress": "192.168.10.5 "NationalBankIdentificationNumber": "654321"}] `

                        },
                    },
                    {
                        id: 4,
                        info: "",
                        code: {

                            responseCode: 203,
                            responseMessage: "Welcome! Please complete your onboarding to continue.",
                            data: null,
                            responseData: null

                        },
                    },



                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            },
            notes: ["For testing purpose use MerchantPhoneNumber:", "9999999999  (Login Successful)", "8888888888  (2FA verification required)", "7777777777 (KYC Pending response)", "6666666666  (New Merchant, onboarding required)"],
            //             subData: [
            //                 {
            //                     id: 1,
            //                     title: "KYC_VERIFICATION",
            //                     topText: "/",
            //                     post: {
            //                         MerchantPhoneNumber: "9876543210",
            //                     },
            //                     request: "All headers Required",
            //                     response: {
            //                         success: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {
            //                                     responseCode: 200,
            //                                     responseMessage: "Request Completed",
            //                                     data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBWpocFEm0eCgK4SrI/QdgGhTjX7jweNuFf7tVu6NqulMH3oVbnUjaM2d4HFfQzpKA09U+rr5IUY9PYzz5B06E5zwxaN3GXoe/jcctrOkpxAuWZpHnyStKP2A8nLMTFVVpcf8RQZkcUKLVMV8mj6/Tl8=",
            //                                     responseData: "[{\"stateId\":1,\"state\":\"Telangana\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TG\"},{\"stateId\":2,\"state\":\"Andhra Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AP\"},{\"stateId\":3,\"state\":\"Assam\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AS\"},{\"stateId\":4,\"state\":\"Bihar\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"BR\"},{\"stateId\":5,\"state\":\"Chhattisgarh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"CG\"},{\"stateId\":6,\"state\":\"Goa\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"GA\"},{\"stateId\":7,\"state\":\"Gujarat\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"GJ\"},{\"stateId\":8,\"state\":\"Haryana\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"HR\"},{\"stateId\":9,\"state\":\"Himachal Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"HP\"},{\"stateId\":10,\"state\":\"Jammu and Kashmir\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"JK\"},{\"stateId\":11,\"state\":\"Jharkhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"JH\"},{\"stateId\":12,\"state\":\"Karnataka\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"KA\"},{\"stateId\":13,\"state\":\"Kerala\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"KL\"},{\"stateId\":14,\"state\":\"Madhya Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MP\"},{\"stateId\":15,\"state\":\"Maharashtra\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MH\"},{\"stateId\":16,\"state\":\"Manipur\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MN\"},{\"stateId\":17,\"state\":\"Meghalaya\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"ML\"},{\"stateId\":18,\"state\":\"Mizoram\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MZ\"},{\"stateId\":19,\"state\":\"Nagaland\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"NL\"},{\"stateId\":20,\"state\":\"Odisha\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"OR\"},{\"stateId\":21,\"state\":\"Punjab\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PB\"},{\"stateId\":22,\"state\":\"Rajasthan\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"RJ\"},{\"stateId\":23,\"state\":\"Sikkim\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"SK\"},{\"stateId\":24,\"state\":\"Tamil Nadu\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TN\"},{\"stateId\":25,\"state\":\"Tripura\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TR\"},{\"stateId\":26,\"state\":\"Uttarakhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UK\"},{\"stateId\":27,\"state\":\"Uttar Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UP\"},{\"stateId\":28,\"state\":\"West Bengal\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"WB\"},{\"stateId\":29,\"state\":\"Arunachal Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AR\"},{\"stateId\":30,\"state\":\"Delhi\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DL\"},{\"stateId\":31,\"state\":\"uttarakhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UK\"},{\"stateId\":32,\"state\":\"Puducherry\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PY\"},{\"stateId\":33,\"state\":\"Chandigarh\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"CH\"},{\"stateId\":34,\"state\":\"Dadra and Nagar Haveli\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DN\"},{\"stateId\":35,\"state\":\"Daman and Diu\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DD\"},{\"stateId\":36,\"state\":\"Lakshadweep\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"LD\"},{\"stateId\":37,\"state\":\"Puducherry\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PY\"},{\"stateId\":38,\"state\":\"Andaman and Nicobar Islands\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AN\"},{\"stateId\":39,\"state\":\"NCT Delhi\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"NDL\"},{\"stateId\":99,\"state\":\"Select State\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":10,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":null}]"
            //                                 },
            //                             },

            //                         ],
            //                         error: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {},
            //                             },
            //                         ]
            //                     },
            //                 },
            //                 {
            //                     id: 2,
            //                     title: "New Merchant Registration",
            //                     topText: "/",
            //                     post: {
            //                         MerchantPhoneNumber: "9999999999",
            //                     },
            //                     request: "All headers Required",
            //                     response: {
            //                         success: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {

            //                                     responseCode: 203,
            //                                     responseMessage: "Welcome! Please complete your onboarding to continue.",
            //                                     data: null,
            //                                     responseData: null

            //                                 },
            //                             },
            //                         ],
            //                         error: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {},
            //                             },
            //                         ]
            //                     },
            //                 }, {
            //                     id: 3,
            //                     title: "2FA verification",
            //                     topText: "/",
            //                     post: {
            //                         MerchantPhoneNumber: "8888888888"
            //                     },
            //                     request: "All headers Required",
            //                     response: {
            //                         success: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {
            //                                     responseCode: 201,
            //                                     responseMessage: "Please complete your 2FA verification!",
            //                                     data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBQoBGYkf3pLovy4l4EiPty85utNqruyiWADL690UkosEHjU6WVEz6XlOfE/LmUW1Vun93Uv2c2kgM5TPS4B+3JpetphBxeZ37elpVQzevIio8FqAfP/ucx/WbrDtIQybnH9xu0VGgmUkzLcjcHCFr94=",
            //                                     responseData: `[{ "MerchantPhoneNumber": "8888888888", "FirstName": "Amit", "LastName": "Verma","MerchantLoginId": "amit_verma01", "MerchantLoginPin": "4321", "MerchantAddress1": "Shop No 8, Laxmi Plaza", "MerchantAddress2": "Near Bus Stand", "MerchantState": "MAHARASHTRA", "MerchantCityName": "Pune", "MerchantDistrictName": "Pune", "MerchantPinCode": "411001", "CompanyLegalName": "Amit Retailers", "CompanyType": "Proprietorship", "EmailId": "amit.verma@test.com", "UserPan": "ZXCVB1234K", "AadhaarNumber": "789678967896", "MerchanrGstinNumber": "27ZXCVB1234K1Z2", "MerchantAadharFrontImage": "https://dummy.com/aadhar_front.jpg", "MerchantAadharBackImage": "https://dummy.com/aadhar_back.jpg", "BackgroundImageOfShop": "https://dummy.com/shop.jpg", "MerchantPanImage": "https://dummy.com/pan.jpg", "BankProofImage": "https://dummy.com/bank.jpg", "CompanyBankAccountNumber": "456789123456", "BankIfscCode": "SBIN0001234", "CompanyBankName": "State Bank of India", "BankAccountName": "Amit Verma", "ShopAddress": "Shop No 8, MG Road", "ShopCity": "Pune", "ShopDistrict": "Pune", "ShopState": "MAHARASHTRA", "ShopPincode": "411001", "ShopLatitude": "18.5204", "ShopLongitude": "73.8567", "TradeBusinessProof": true, "TermsConditionCheck": true, "PhysicalVerification": true, "VideoKycWithLatLongData": false, "IsOnBoard": false, "IsKyc": 2, "IpAddress": "10.0.0.1" 
            // }]` ,
            //                                 },
            //                             },
            //                         ],
            //                         error: [
            //                             {
            //                                 id: 1,
            //                                 info: "",
            //                                 code: {},
            //                             },
            //                         ]
            //                     },

            //                 }
            //             ],


            note: "Data in responseData field should be parsed, and below mentioned are all the keys with their following explanation..",
        },
        {
            title: "State List ",
            topText: "{AEPS Base URL}/GetFPStateList",
            subInforamtion : "This API fetches the list of all available states using the provided token. It returns state details such as state name, state code, and status.",
            request: "All headers Required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 200,
                            responseMessage: "Request Completed",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBWpocFEm0eCgK4SrI/QdgGhTjX7jweNuFf7tVu6NqulMH3oVbnUjaM2d4HFfQzpKA09U+rr5IUY9PYzz5B06E5zwxaN3GXoe/jcctrOkpxAuWZpHnyStKP2A8nLMTFVVpcf8RQZkcUKLVMV8mj6/Tl8=",
                            responseData: "[{\"stateId\":1,\"state\":\"Telangana\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TG\"},{\"stateId\":2,\"state\":\"Andhra Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AP\"},{\"stateId\":3,\"state\":\"Assam\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AS\"},{\"stateId\":4,\"state\":\"Bihar\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"BR\"},{\"stateId\":5,\"state\":\"Chhattisgarh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"CG\"},{\"stateId\":6,\"state\":\"Goa\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"GA\"},{\"stateId\":7,\"state\":\"Gujarat\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"GJ\"},{\"stateId\":8,\"state\":\"Haryana\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"HR\"},{\"stateId\":9,\"state\":\"Himachal Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"HP\"},{\"stateId\":10,\"state\":\"Jammu and Kashmir\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"JK\"},{\"stateId\":11,\"state\":\"Jharkhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"JH\"},{\"stateId\":12,\"state\":\"Karnataka\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"KA\"},{\"stateId\":13,\"state\":\"Kerala\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"KL\"},{\"stateId\":14,\"state\":\"Madhya Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MP\"},{\"stateId\":15,\"state\":\"Maharashtra\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MH\"},{\"stateId\":16,\"state\":\"Manipur\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MN\"},{\"stateId\":17,\"state\":\"Meghalaya\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"ML\"},{\"stateId\":18,\"state\":\"Mizoram\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"MZ\"},{\"stateId\":19,\"state\":\"Nagaland\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"NL\"},{\"stateId\":20,\"state\":\"Odisha\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"OR\"},{\"stateId\":21,\"state\":\"Punjab\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PB\"},{\"stateId\":22,\"state\":\"Rajasthan\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"RJ\"},{\"stateId\":23,\"state\":\"Sikkim\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"SK\"},{\"stateId\":24,\"state\":\"Tamil Nadu\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TN\"},{\"stateId\":25,\"state\":\"Tripura\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"TR\"},{\"stateId\":26,\"state\":\"Uttarakhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UK\"},{\"stateId\":27,\"state\":\"Uttar Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UP\"},{\"stateId\":28,\"state\":\"West Bengal\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"WB\"},{\"stateId\":29,\"state\":\"Arunachal Pradesh\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AR\"},{\"stateId\":30,\"state\":\"Delhi\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DL\"},{\"stateId\":31,\"state\":\"uttarakhand\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"UK\"},{\"stateId\":32,\"state\":\"Puducherry\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PY\"},{\"stateId\":33,\"state\":\"Chandigarh\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"CH\"},{\"stateId\":34,\"state\":\"Dadra and Nagar Haveli\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DN\"},{\"stateId\":35,\"state\":\"Daman and Diu\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"DD\"},{\"stateId\":36,\"state\":\"Lakshadweep\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"LD\"},{\"stateId\":37,\"state\":\"Puducherry\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"PY\"},{\"stateId\":38,\"state\":\"Andaman and Nicobar Islands\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"AN\"},{\"stateId\":39,\"state\":\"NCT Delhi\",\"activeFlag\":1,\"remarks\":\"UT\",\"sortFlag\":20,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":\"NDL\"},{\"stateId\":99,\"state\":\"Select State\",\"activeFlag\":1,\"remarks\":\"NULL\",\"sortFlag\":10,\"timestamp\":null,\"updateTimestamp\":null,\"stateCode\":null}]"
                        }

                    },
                ],

                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],

            }
        },
        {
            title: "Company List",
            topText: " {AEPS Base URL}/GetCompanyTypeList",
            subInforamtion: "This API fetches the list of available company/business types along with their MCC codes and descriptions. It helps classify merchant business categories during onboarding and KYC.",
            request: "All headers Required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 200,
                            responseMessage: "Request Completed",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBWpocFEm0eCgK4SrI/QdgGhTjX7jweNuFf7tVu6NqulMH3oVbnUjaM2d4HFfQzpKA09U+rr5IUY9PYzz5B06E5zwxaN3GXoe/jcctrOkpxAuWZpHnyStKP2A8nLMTFVVpcf8RQZkcUKLVMV8mj6/Tl8=",
                            responseData: "[{\"id\":1,\"mccCode\":4215,\"mccDescription\":\"Courier services — air and ground and freight forwarders\"},{\"id\":2,\"mccCode\":4722,\"mccDescription\":\"Travel agencies and tour operators\"},{\"id\":3,\"mccCode\":4789,\"mccDescription\":\"Transportation services \"},{\"id\":4,\"mccCode\":4812,\"mccDescription\":\"Telecommunication equipment and telephone sales\"},{\"id\":5,\"mccCode\":4814,\"mccDescription\":\"Telecommunication services, including local and long distance calls\"},{\"id\":6,\"mccCode\":4816,\"mccDescription\":\"Computer network/information services\"},{\"id\":7,\"mccCode\":4900,\"mccDescription\":\"Utilities — electric, gas, water and sanitary\"},{\"id\":8,\"mccCode\":5099,\"mccDescription\":\"Durable goods\"},{\"id\":9,\"mccCode\":5111,\"mccDescription\":\"Stationery, office supplies and printing and writing paper\"},{\"id\":10,\"mccCode\":5137,\"mccDescription\":\"Men’s, women’s and children’s uniforms and commercial clothing\"},{\"id\":11,\"mccCode\":5192,\"mccDescription\":\"Books, periodicals and newspapers\"},{\"id\":12,\"mccCode\":5193,\"mccDescription\":\"Florists’ supplies, nursery stock and flowers\"},{\"id\":13,\"mccCode\":5199,\"mccDescription\":\"Non-durable goods\"},{\"id\":14,\"mccCode\":5311,\"mccDescription\":\"Department Stores\"},{\"id\":15,\"mccCode\":5331,\"mccDescription\":\"Variety Stores\"},{\"id\":16,\"mccCode\":5411,\"mccDescription\":\"Groceries and supermarkets\"},{\"id\":17,\"mccCode\":5451,\"mccDescription\":\"Dairies\"},{\"id\":18,\"mccCode\":5462,\"mccDescription\":\"Bakeries\"},{\"id\":19,\"mccCode\":5533,\"mccDescription\":\"Automotive parts and accessories outlets\"},{\"id\":20,\"mccCode\":5651,\"mccDescription\":\"Family clothing shops\"},{\"id\":21,\"mccCode\":5655,\"mccDescription\":\"Sports and riding apparels\"},{\"id\":22,\"mccCode\":5661,\"mccDescription\":\"Shoe shops\"},{\"id\":23,\"mccCode\":5722,\"mccDescription\":\"Household appliance shops\"},{\"id\":24,\"mccCode\":5732,\"mccDescription\":\"Electronics Shops\"},{\"id\":25,\"mccCode\":5734,\"mccDescription\":\"Computer software outlets\"},{\"id\":26,\"mccCode\":5814,\"mccDescription\":\"Fast food restaurants\"},{\"id\":27,\"mccCode\":5942,\"mccDescription\":\"Bookshops\"},{\"id\":28,\"mccCode\":5943,\"mccDescription\":\"Stationery, office and school supply shops\"},{\"id\":29,\"mccCode\":5947,\"mccDescription\":\"Gift, card, novelty and souvenir shops\"}]"
                        }

                    },
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }
        },
        {
            title: "Bank List",
            topText: " {AEPS Base URL}/GetFPBankList",
            subInforamtion: "This API retrieves the list of all supported banks for AEPS transactions using the provided token. It returns bank details such as bank name, IIN number, active status, and identifiers required for bank selection during transactions.",
            request: "All headers Required",
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            responseCode: 200,

                            responseMessage: "Request Completed",

                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBWpocFEm0eCgK4SrI/QdgGhTjX7jweNuFf7tVu6NqulMH3oVbnUjaM2d4HFfQzpKA09U+rr5IUY9PYzz5B06E5zwxaN3GXoe/jcctrOkpxAuWZpHnyStKP2A8nLMTFVVpcf8RQZkcUKLVMV8mj6/Tl8=",

                            responseData: "[{\"id\":229,\"activeFlag\":1,\"bankName\":\"The Balasore Bhadrak Central Co-Op Bank Ltd\",\"details\":\"The Balasore Bhadrak Central Co-Op Bank Ltd\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"508758\"},{\"id\":230,\"activeFlag\":1,\"bankName\":\"The Bhawanipatna Central Co-Operative Bank Ltd\",\"details\":\"The Bhawanipatna Central Co-Operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"508778\"},{\"id\":231,\"activeFlag\":1,\"bankName\":\"The Cosmos Co-Op Bank\",\"details\":\"The Cosmos Co-Op Bank\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"608194\"},{\"id\":232,\"activeFlag\":1,\"bankName\":\"The Sambalpur District Co-Operative Central Bank Ltd\",\"details\":\"The Sambalpur District Co-Operative Central Bank Ltd\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"508777\"},{\"id\":233,\"activeFlag\":1,\"bankName\":\"The Sundargarh District Central Co-Op Bank Ltd\",\"details\":\"The Sundargarh District Central Co-Op Bank Ltd\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"508757\"},{\"id\":234,\"activeFlag\":1,\"bankName\":\"The United Puri-Nimapara Central Co-Operative Bank Ltd\",\"details\":\"The United Puri-Nimapara Central Co-Operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"15/05/2025 17:36:00\",\"iinno\":\"508782\"},{\"id\":86,\"activeFlag\":1,\"bankName\":\"Last Used Bank\",\"details\":\"Last Used Bank\",\"remarks\":\"NULL\",\"timestamp\":\"17/07/2017 12:58:00\",\"iinno\":\"NULL\"},{\"id\":112,\"activeFlag\":1,\"bankName\":\"Airtel Payment Bank\",\"details\":\"Airtel Payment Bank\",\"remarks\":null,\"timestamp\":\"01/08/2019 16:56:00\",\"iinno\":\"990320\"},{\"id\":29,\"activeFlag\":1,\"bankName\":\"Allahabad UP Gramin Bank\",\"details\":\"Allahabad UP Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607091\"},{\"id\":24,\"activeFlag\":1,\"bankName\":\"Andhra Bank\",\"details\":\"Andhra Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607076\"},{\"id\":33,\"activeFlag\":1,\"bankName\":\"Andhra Pradesh Grameena Vikash Bank\",\"details\":\"Andhra Pradesh Grameena Vikash Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607198\"},{\"id\":34,\"activeFlag\":1,\"bankName\":\"Andhra Pragathi Grameena Bank\",\"details\":\"Andhra Pragathi Grameena Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607121\"},{\"id\":108,\"activeFlag\":1,\"bankName\":\"AP Mahesh Coop Urban Bank Ltd\",\"details\":\"AP Mahesh Coop Urban Bank Ltd\",\"remarks\":null,\"timestamp\":\"02/05/2019 12:00:00\",\"iinno\":\"607051\"},{\"id\":39,\"activeFlag\":1,\"bankName\":\"Aryavart Bank Erstwhile Gramin Bank Of Aryavart Erstwhile Baroda Uttar Pradesh Gramin Bank  Erstwhile Uttar Pradesh Gramin Bank\",\"details\":\"Baroda Uttar Pradesh Gramin Bank \",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606993\"},{\"id\":35,\"activeFlag\":1,\"bankName\":\"Assam Gramin Vikash Bank\",\"details\":\"Assam Gramin Vikash Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607064\"},{\"id\":110,\"activeFlag\":1,\"bankName\":\"AU Small Finance Bank\",\"details\":\"AU Small Finance Bank\",\"remarks\":null,\"timestamp\":\"02/05/2019 12:00:00\",\"iinno\":\"608087\"},{\"id\":10,\"activeFlag\":1,\"bankName\":\"Axis Bank\",\"details\":\"Axis Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607153\"},{\"id\":19,\"activeFlag\":1,\"bankName\":\"Bank Of Baroda ertswhile Vijaya Bank erstwhile Dena Bank\",\"details\":\"Bank Of Baroda\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606985\"},{\"id\":2,\"activeFlag\":1,\"bankName\":\"Bank of India\",\"details\":\"Bank of India\",\"remarks\":\"\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"508505\"},{\"id\":11,\"activeFlag\":1,\"bankName\":\"Bank of Maharashtra\",\"details\":\"Bank of Maharashtra\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607387\"},{\"id\":37,\"activeFlag\":1,\"bankName\":\"Baroda Gujarat Gramin Bank\",\"details\":\"Baroda Gujarat Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606995\"},{\"id\":69,\"activeFlag\":1,\"bankName\":\"Baroda Rajasthan Kshetriya Gramin Bank ErstwhileRajasthan Marudhara Gramin Bank ErstwhileRajasthan Gramin Bank\",\"details\":\"Rajasthan Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607509\"},{\"id\":182,\"activeFlag\":1,\"bankName\":\"Bhandara Dist Coop Bank\",\"details\":\"Bhandara Dist Coop Bank\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"607847\"},{\"id\":40,\"activeFlag\":1,\"bankName\":\"Bhartiya Mahila Bank\",\"details\":\"Bhartiya Mahila Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"608114\"},{\"id\":4,\"activeFlag\":1,\"bankName\":\"Canara Bank erstwhile Syndicate Bank\",\"details\":\"Canara Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607396\"},{\"id\":107,\"activeFlag\":1,\"bankName\":\"Catholic Syrian Bank\",\"details\":\"Catholic Syrian Bank\",\"remarks\":null,\"timestamp\":\"02/05/2019 12:00:00\",\"iinno\":\"607082\"},{\"id\":9,\"activeFlag\":1,\"bankName\":\"Central Bank of India\",\"details\":\"Central Bank of India\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607264\"},{\"id\":42,\"activeFlag\":1,\"bankName\":\"Central Madya Pradesh Gramin Bank\",\"details\":\"Central Madya Pradesh Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607071\"},{\"id\":43,\"activeFlag\":1,\"bankName\":\"Chaitanya Godavari Gramin Bank\",\"details\":\"Chaitanya Godavari Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607080\"},{\"id\":44,\"activeFlag\":1,\"bankName\":\"Chhattisgarh Rajya Gramin Bank\",\"details\":\"Chhattisgarh Rajya Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607214\"},{\"id\":93,\"activeFlag\":1,\"bankName\":\"City Union Bank \",\"details\":\"City Union Bank \",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607324\"},{\"id\":30,\"activeFlag\":1,\"bankName\":\"Corporation Bank\",\"details\":\"Corporation Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607184\"},{\"id\":56,\"activeFlag\":1,\"bankName\":\"Dakshin Bihar Gramin Bank Erstwhile Madhya Bihar Gramin Bank Erstwhile Uttar Bihar Grameen Bank  Erstwhile Bihar Gramin Bank\",\"details\":\"Dakshin Bihar Gramin Bank Erstwhile Madhya Bihar Gramin Bank Erstwhile Uttar Bihar Grameen Bank  Erstwhile Bihar Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607136\"},{\"id\":16,\"activeFlag\":1,\"bankName\":\"Dena Bank\",\"details\":\"Dena Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"508547\"},{\"id\":45,\"activeFlag\":1,\"bankName\":\"Dena Gujarat Gramin Bank\",\"details\":\"Dena Gujarat Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607099\"},{\"id\":135,\"activeFlag\":1,\"bankName\":\"Dharmapuri District Central Co op Bank Ltd\",\"details\":\"Dharmapuri District Central Co op Bank Ltd\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508658\"},{\"id\":120,\"activeFlag\":1,\"bankName\":\"Ellaquai Dehati Bank Erstwhile Jammu and Kashmir Grameen Bank\",\"details\":\"J& K Grameen Bank\",\"remarks\":null,\"timestamp\":\"15/07/2020 17:25:00\",\"iinno\":\"607808\"},{\"id\":102,\"activeFlag\":1,\"bankName\":\"Equitas Small Finance Bank\",\"details\":\"Equitas Small Finance Bank\",\"remarks\":null,\"timestamp\":\"15/05/2018 11:25:00\",\"iinno\":\"508998\"},{\"id\":125,\"activeFlag\":1,\"bankName\":\"Erode District Central Co-operative Bank\",\"details\":\"Erode District Central Co-operative Bank\",\"remarks\":null,\"timestamp\":\"26/10/2020 14:16:00\",\"iinno\":\"508654\"},{\"id\":122,\"activeFlag\":1,\"bankName\":\"ESAF Small Finance Bank\",\"details\":\"ESAF Small Finance Bank\",\"remarks\":null,\"timestamp\":\"24/09/2020 17:28:00\",\"iinno\":\"652254\"},{\"id\":15,\"activeFlag\":1,\"bankName\":\"Federal Bank\",\"details\":\"Federal Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607363\"},{\"id\":118,\"activeFlag\":1,\"bankName\":\"Fincare Small Finance Bank\",\"details\":\"Fincare Small Finance Bank\",\"remarks\":null,\"timestamp\":\"03/04/2020 18:58:00\",\"iinno\":\"817304\"},{\"id\":95,\"activeFlag\":1,\"bankName\":\"Fino Payments Bank\",\"details\":\"Fino Payments Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"608001\"},{\"id\":31,\"activeFlag\":1,\"bankName\":\"HDFC Bank\",\"details\":\"HDFC Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607152\"},{\"id\":48,\"activeFlag\":1,\"bankName\":\"Himachal Pradesh Gramin Bank\",\"details\":\"Himachal Pradesh Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607140\"},{\"id\":5,\"activeFlag\":1,\"bankName\":\"ICICI Bank\",\"details\":\"ICICI Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"508534\"},{\"id\":14,\"activeFlag\":1,\"bankName\":\"IDBI Bank\",\"details\":\"IDBI Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607095\"},{\"id\":49,\"activeFlag\":1,\"bankName\":\"IDFC First Bank\",\"details\":\"IDFC First Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"608117\"},{\"id\":113,\"activeFlag\":1,\"bankName\":\"India Post Payment Bank\",\"details\":\"India Post Payment Bank\",\"remarks\":null,\"timestamp\":\"13/09/2019 12:26:00\",\"iinno\":\"608314\"},{\"id\":18,\"activeFlag\":1,\"bankName\":\"Indian bank erstwhile Allahabad Bank\",\"details\":\"Indian bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607105\"},{\"id\":25,\"activeFlag\":1,\"bankName\":\"Indian Overseas Bank\",\"details\":\"Indian Overseas Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607126\"},{\"id\":32,\"activeFlag\":1,\"bankName\":\"IndusInd Bank\",\"details\":\"IndusInd Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607189\"},{\"id\":50,\"activeFlag\":1,\"bankName\":\"Jammu & Kashmir Bank \",\"details\":\"Jammu & Kashmir Bank \",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607440\"},{\"id\":183,\"activeFlag\":1,\"bankName\":\"Jana Small Finance Bank Ltd.\",\"details\":\"Jana Small Finance Bank Ltd.\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"508910\"},{\"id\":51,\"activeFlag\":1,\"bankName\":\"Jharkhand Gramin Bank\",\"details\":\"Jharkhand Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607021\"},{\"id\":83,\"activeFlag\":1,\"bankName\":\"Jharkhand Rajya Gramin Bank\",\"details\":\"Jharkhand Rajya Gramin Bank erstwhile Vananchal Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607210\"},{\"id\":178,\"activeFlag\":1,\"bankName\":\"Jio Payments Bank Limited\",\"details\":\"Jio Payments Bank Limited\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"607884\"},{\"id\":96,\"activeFlag\":1,\"bankName\":\"Karnataka Bank\",\"details\":\"Karnataka Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607270\"},{\"id\":65,\"activeFlag\":1,\"bankName\":\"Karnataka Gramin Bank Erstwhile Pragathi Krishna Gramin Bank Erstwhile Karnataka Vikas Grameena Bank\",\"details\":\"Karnataka Gramin Bank Erstwhile Pragathi Krishna Gramin Bank Erstwhile Karnataka Vikas Grameena Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607400\"},{\"id\":53,\"activeFlag\":1,\"bankName\":\"Karur Vysya Bank\",\"details\":\"Karur Vysya Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"508662\"},{\"id\":92,\"activeFlag\":1,\"bankName\":\"Kashi Gomati Samyut Gramin Bank\",\"details\":\"Kashi Gomati Samyut Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607365\"},{\"id\":91,\"activeFlag\":1,\"bankName\":\"Kaveri Gramin Bank\",\"details\":\"Kaveri Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607308\"},{\"id\":54,\"activeFlag\":1,\"bankName\":\"Kerala Gramin Bank\",\"details\":\"Kerala Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607399\"},{\"id\":223,\"activeFlag\":1,\"bankName\":\"Kerela State Cooperative Bank Ltd\",\"details\":\"Kerela State Cooperative Bank Ltd\",\"remarks\":null,\"timestamp\":\"20/11/2024 11:52:26\",\"iinno\":\"608165\"},{\"id\":100,\"activeFlag\":1,\"bankName\":\"Kotak Mahindra Bank\",\"details\":\"Kotak Mahindra Bank\",\"remarks\":\"\",\"timestamp\":\"25/04/2018 13:29:00\",\"iinno\":\"990309\"},{\"id\":126,\"activeFlag\":1,\"bankName\":\"Kotak Mahindra Bank_uat\",\"details\":\"Kotak Mahindra Bank_uat\",\"remarks\":null,\"timestamp\":\"24/11/2020 15:36:00\",\"iinno\":\"607420\"},{\"id\":106,\"activeFlag\":1,\"bankName\":\"Lakshmi Vilas Bank\",\"details\":\"Lakshmi Vilas Bank\",\"remarks\":null,\"timestamp\":\"07/09/2018 15:25:00\",\"iinno\":\"607058\"},{\"id\":55,\"activeFlag\":1,\"bankName\":\"Langpi Dehangi Rural Bank\",\"details\":\"Langpi Dehangi Rural Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607203\"},{\"id\":61,\"activeFlag\":1,\"bankName\":\"Madhya Pradesh Gramin Bank Erstwhile Narmada Jhabua Gramin Bank Erstwhile Madhyanchal Gramin Bank\",\"details\":\"Narmada Jhabua Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607022\"},{\"id\":90,\"activeFlag\":1,\"bankName\":\"Maharashtra Gramin Bank  Erstwhile Vidarbha Konkan Gramin Bank\",\"details\":\"Maharashtra Gramin Bank \",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607000\"},{\"id\":58,\"activeFlag\":1,\"bankName\":\"Malwa Gramin Bank\",\"details\":\"Malwa Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607241\"},{\"id\":59,\"activeFlag\":1,\"bankName\":\"Manipur Rural Bank \",\"details\":\"Manipur Rural Bank \",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607062\"},{\"id\":189,\"activeFlag\":1,\"bankName\":\"Mayurbhanj Central Co-operative Bank Ltd\",\"details\":\"Mayurbhanj Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"508756\"},{\"id\":60,\"activeFlag\":1,\"bankName\":\"Meghalaya Rural Bank\",\"details\":\"Meghalaya Rural Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607206\"},{\"id\":117,\"activeFlag\":1,\"bankName\":\"Mizoram Rural Bank\",\"details\":\"Mizoram Rural Bank\",\"remarks\":null,\"timestamp\":\"22/01/2020 18:47:00\",\"iinno\":\"607230\"},{\"id\":224,\"activeFlag\":1,\"bankName\":\"Nayagarh District Central Cooperative Bank Ltd\",\"details\":\"Nayagarh District Central Cooperative Bank Ltd\",\"remarks\":null,\"timestamp\":\"20/11/2024 11:52:26\",\"iinno\":\"508772\"},{\"id\":62,\"activeFlag\":1,\"bankName\":\"Odisha Gramya Bank  Erstwhile Utkal Gramin Bank Erstwhile Odisha Grameen Bank\",\"details\":\"Odisha Gramya Bank  Erstwhile Utkal Gramin Bank Erstwhile Odisha Grameen Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607060\"},{\"id\":179,\"activeFlag\":1,\"bankName\":\"Odisha State Co-Operative Bank\",\"details\":\"Odisha State Co-Operative Bank\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"607935\"},{\"id\":8,\"activeFlag\":1,\"bankName\":\"Oriental Bank of Commerce\",\"details\":\"Oriental Bank of Commerce\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"508831\"},{\"id\":116,\"activeFlag\":1,\"bankName\":\"Oriental Bank of Commerce-2\",\"details\":\"Oriental Bank of Commerce-2\",\"remarks\":null,\"timestamp\":\"10/01/2020 15:41:00\",\"iinno\":\"607041\"},{\"id\":64,\"activeFlag\":1,\"bankName\":\"Pandyan Grama Bank\",\"details\":\"Pandyan Grama Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607059\"},{\"id\":89,\"activeFlag\":1,\"bankName\":\"Paschim Banga Gramin Bank\",\"details\":\"Paschim Banga Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607079\"},{\"id\":36,\"activeFlag\":1,\"bankName\":\"Paschim Banga Gramin Bank Erstwhile Bangiya Gramin Vikash Bank  ErstwhileUttar Banga Kshetriya Gramin Bank  Erstwhile West Bengal Gramin Bank\",\"details\":\"West Bengal Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607063\"},{\"id\":121,\"activeFlag\":1,\"bankName\":\"Paytm Payments Bank\",\"details\":\"Paytm Payments Bank\",\"remarks\":null,\"timestamp\":\"23/07/2020 18:12:00\",\"iinno\":\"608032\"},{\"id\":66,\"activeFlag\":1,\"bankName\":\"Prathma UP Gramin Bank erstwhile Sarva UP Gramin Bank \",\"details\":\"Prathma UP Gramin Bank erstwhile Sarva UP Gramin Bank \",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607135\"},{\"id\":88,\"activeFlag\":1,\"bankName\":\"Puduvai Bharathiar Grama Bank\",\"details\":\"Puduvai Bharathiar Grama Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607054\"},{\"id\":28,\"activeFlag\":1,\"bankName\":\"Punjab & Sind Bank\",\"details\":\"Punjab & Sind Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607087\"},{\"id\":67,\"activeFlag\":1,\"bankName\":\"Punjab Gramin Bank\",\"details\":\"Punjab Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607138\"},{\"id\":7,\"activeFlag\":1,\"bankName\":\"Punjab National Bank erstwhile Oriental Bank of Commerce\",\"details\":\"Punjab National Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607027\"},{\"id\":68,\"activeFlag\":1,\"bankName\":\"Purvanchal Gramin Bank\",\"details\":\"Purvanchal Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607212\"},{\"id\":181,\"activeFlag\":1,\"bankName\":\"Rajasthan State Coop Bank\",\"details\":\"Rajasthan State Coop Bank\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"607266\"},{\"id\":70,\"activeFlag\":1,\"bankName\":\"Ratnakar Bank\",\"details\":\"Ratnakar Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607393\"},{\"id\":71,\"activeFlag\":1,\"bankName\":\"Saptagiri Grameena Bank\",\"details\":\"Saptagiri Grameena Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607053\"},{\"id\":72,\"activeFlag\":1,\"bankName\":\"Sarva Haryana Gramin Bank\",\"details\":\"Sarva Haryana Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607139\"},{\"id\":73,\"activeFlag\":1,\"bankName\":\"Sarva UP Gramin Bank \",\"details\":\"Sarva UP Gramin Bank \",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607135M\"},{\"id\":74,\"activeFlag\":1,\"bankName\":\"Saurashtra Gramin Bank\",\"details\":\"Saurashtra Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607200\"},{\"id\":123,\"activeFlag\":1,\"bankName\":\"SBM Bank (INDIA) Limited\",\"details\":\"SBM Bank (INDIA) Limited\",\"remarks\":null,\"timestamp\":\"26/10/2020 14:16:00\",\"iinno\":\"607395\"},{\"id\":97,\"activeFlag\":1,\"bankName\":\"Shivalik Mercantile Cooperative Bank \",\"details\":\"Shivalik Mercantile Cooperative Bank \",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607119\"},{\"id\":227,\"activeFlag\":1,\"bankName\":\"Solapur district co-operative Bank\",\"details\":\"Solapur district co-operative Bank\",\"remarks\":null,\"timestamp\":\"04/02/2025 11:45:00\",\"iinno\":\"607943\"},{\"id\":13,\"activeFlag\":1,\"bankName\":\"South Indian Bank\",\"details\":\"South Indian Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607439\"},{\"id\":75,\"activeFlag\":1,\"bankName\":\"State  bank of Bikaner and Jaipur\",\"details\":\"State  bank of Bikaner and Jaipur\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606987\"},{\"id\":22,\"activeFlag\":1,\"bankName\":\"State Bank of Hyderabad\",\"details\":\"State Bank of Hyderabad\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607901\"},{\"id\":6,\"activeFlag\":1,\"bankName\":\"State Bank of India\",\"details\":\"State Bank of India\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607094\"},{\"id\":27,\"activeFlag\":1,\"bankName\":\"State Bank of Mysore\",\"details\":\"State Bank of Mysore\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606989\"},{\"id\":21,\"activeFlag\":1,\"bankName\":\"State Bank of Patiala\",\"details\":\"State Bank of Patiala\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606990\"},{\"id\":26,\"activeFlag\":1,\"bankName\":\"State Bank of Travancore\",\"details\":\"State Bank of Travancore\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606991\"},{\"id\":124,\"activeFlag\":1,\"bankName\":\"Suryoday Small Fianance Bank\",\"details\":\"Suryoday Small Fianance Bank\",\"remarks\":null,\"timestamp\":\"26/10/2020 14:16:00\",\"iinno\":\"608022\"},{\"id\":76,\"activeFlag\":1,\"bankName\":\"Sutlej Gramin Bank\",\"details\":\"Sutlej Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607310\"},{\"id\":3,\"activeFlag\":1,\"bankName\":\"Syndicate Bank\",\"details\":\"Syndicate Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607580\"},{\"id\":119,\"activeFlag\":1,\"bankName\":\"Tamil Nadu State Apex Co-operative Bank Ltd\",\"details\":\"Tamil Nadu State Apex Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"04/06/2020 20:27:00\",\"iinno\":\"607131\"},{\"id\":98,\"activeFlag\":1,\"bankName\":\"Tamilnad Mercantile Bank\",\"details\":\"Tamilnad Mercantile Bank\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"607187\"},{\"id\":63,\"activeFlag\":1,\"bankName\":\"TamilNadu Grama Bank erstwhile Pallavan Grama Bank\",\"details\":\"TamilNadu Grama Bank erstwhile Pallavan Grama Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607052\"},{\"id\":77,\"activeFlag\":1,\"bankName\":\"Telangana Grameena Bank\",\"details\":\"Telangana Grameena Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607195\"},{\"id\":214,\"activeFlag\":1,\"bankName\":\"The Angul United Central Co-op. Bank Ltd.\",\"details\":\"The Angul United Central Co-op. Bank Ltd.\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508754\"},{\"id\":210,\"activeFlag\":1,\"bankName\":\"The Aska Cooperative Central Bank Ltd.\",\"details\":\"The Aska Cooperative Central Bank Ltd.\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508773\"},{\"id\":190,\"activeFlag\":1,\"bankName\":\"The Banki Central Co-operative Bank Ltd\",\"details\":\"The Banki Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"508761\"},{\"id\":209,\"activeFlag\":1,\"bankName\":\"The Berhampore Co Operative Central Bank Ltd\",\"details\":\"The Berhampore Co Operative Central Bank Ltd\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508759\"},{\"id\":226,\"activeFlag\":1,\"bankName\":\"The Bolangir District Central Co-operative Bank Ltd\",\"details\":\"The Bolangir District Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"20/11/2024 11:52:26\",\"iinno\":\"508774\"},{\"id\":127,\"activeFlag\":1,\"bankName\":\"The Coimbatore District Central Co-op Bank Limited\",\"details\":\"The Coimbatore District Central Co-op Bank Limited\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508646\"},{\"id\":128,\"activeFlag\":1,\"bankName\":\"THE CUDDALORE DISTRICT CENTRAL COOPERATIVE BANK\",\"details\":\"THE CUDDALORE DISTRICT CENTRAL COOPERATIVE BANK\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508647\"},{\"id\":212,\"activeFlag\":1,\"bankName\":\"The Cuttack Central Co-operative bank Ltd\",\"details\":\"The Cuttack Central Co-operative bank Ltd\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508776\"},{\"id\":129,\"activeFlag\":1,\"bankName\":\"The Kanyakumari District Central Cooperative Bank\",\"details\":\"The Kanyakumari District Central Cooperative Bank\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508655\"},{\"id\":211,\"activeFlag\":1,\"bankName\":\"The Keonjhar Central Cooperative Bank Ltd.\",\"details\":\"The Keonjhar Central Cooperative Bank Ltd.\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508760\"},{\"id\":186,\"activeFlag\":1,\"bankName\":\"The Khordha Central Co-Op. Bank Ltd.\",\"details\":\"The Khordha Central Co-Op. Bank Ltd.\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"508771\"},{\"id\":213,\"activeFlag\":1,\"bankName\":\"The Koraput Central Co-operative Bank Ltd\",\"details\":\"The Koraput Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508755\"},{\"id\":130,\"activeFlag\":1,\"bankName\":\"The Kumbakonam Central Co-operative Bank Ltd\",\"details\":\"The Kumbakonam Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508720\"},{\"id\":228,\"activeFlag\":1,\"bankName\":\"The Meghalaya Co-Operative Apex Bank Ltd\",\"details\":\"The Meghalaya Co-Operative Apex Bank Ltd\",\"remarks\":null,\"timestamp\":\"04/02/2025 11:45:00\",\"iinno\":\"607162\"},{\"id\":99,\"activeFlag\":1,\"bankName\":\"The Saraswat Co-operative Bank Ltd\",\"details\":\"The Saraswat Co-operative Bank Ltd\",\"remarks\":\"NULL\",\"timestamp\":\"03/11/2017 03:49:00\",\"iinno\":\"652150\"},{\"id\":216,\"activeFlag\":1,\"bankName\":\"The The Boudh Cooperative Central Bank Ltd.\",\"details\":\"The The Boudh Cooperative Central Bank Ltd.\",\"remarks\":null,\"timestamp\":\"14/12/2023 15:42:00\",\"iinno\":\"508775\"},{\"id\":131,\"activeFlag\":1,\"bankName\":\"The Thoothukudi District Central Coop Bank Ltd\",\"details\":\"The Thoothukudi District Central Coop Bank Ltd\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508678\"},{\"id\":132,\"activeFlag\":1,\"bankName\":\"The Tirunelveli District Central Co-op Bank Ltd\",\"details\":\"The Tirunelveli District Central Co-op Bank Ltd\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508677\"},{\"id\":133,\"activeFlag\":1,\"bankName\":\"THE VELLORE DISTRICT CENTRAL CO-OP BANK LTD.\",\"details\":\"THE VELLORE DISTRICT CENTRAL CO-OP BANK LTD.\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508679\"},{\"id\":134,\"activeFlag\":1,\"bankName\":\"THE VILLUPURAM DISTRICT CENTRAL CO-OP BANK LTD\",\"details\":\"THE VILLUPURAM DISTRICT CENTRAL CO-OP BANK LTD\",\"remarks\":null,\"timestamp\":\"21/01/2021 16:40:00\",\"iinno\":\"508737\"},{\"id\":78,\"activeFlag\":1,\"bankName\":\"Tripura Gramin Bank\",\"details\":\"Tripura Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607065\"},{\"id\":20,\"activeFlag\":1,\"bankName\":\"UCO Bank\",\"details\":\"UCO Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607066\"},{\"id\":109,\"activeFlag\":1,\"bankName\":\"Ujjivan Small Finance Bank Limited\",\"details\":\"Ujjivan Small Finance Bank Limited\",\"remarks\":null,\"timestamp\":\"02/05/2019 12:00:00\",\"iinno\":\"508991\"},{\"id\":1,\"activeFlag\":1,\"bankName\":\"Union Bank of India erstwhile Corporation Bank erstwhile Andhra Bank\",\"details\":\"Union Bank of India\",\"remarks\":\"\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607161\"},{\"id\":17,\"activeFlag\":1,\"bankName\":\"United Bank Of India\",\"details\":\"United Bank Of India\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607646\"},{\"id\":180,\"activeFlag\":1,\"bankName\":\"Up State Coop Bank\",\"details\":\"Up State Coop Bank\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"607523\"},{\"id\":188,\"activeFlag\":1,\"bankName\":\"Utkarsh Small Finance Bank Ltd\",\"details\":\"Utkarsh Small Finance Bank Ltd\",\"remarks\":null,\"timestamp\":\"04/09/2023 16:26:00\",\"iinno\":\"608014\"},{\"id\":82,\"activeFlag\":1,\"bankName\":\"Uttarakhand Gramin Bank\",\"details\":\"Uttarakhand Gramin Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"607197\"},{\"id\":12,\"activeFlag\":1,\"bankName\":\"Vijaya Bank\",\"details\":\"Vijaya Bank\",\"remarks\":\"NULL\",\"timestamp\":\"21/11/2016 16:00:00\",\"iinno\":\"606985M\"},{\"id\":222,\"activeFlag\":1,\"bankName\":\"Yavatmal District Central Co-operative Bank Ltd \",\"details\":\"Yavatmal District Central Co-operative Bank Ltd \",\"remarks\":null,\"timestamp\":\"20/11/2024 11:52:26\",\"iinno\":\"607602\"},{\"id\":104,\"activeFlag\":1,\"bankName\":\"YES Bank\",\"details\":\"YES Bank\",\"remarks\":null,\"timestamp\":\"15/05/2018 11:25:00\",\"iinno\":\"607618\"},{\"id\":115,\"activeFlag\":1,\"bankName\":\"YES Bank-2\",\"details\":\"YES Bank\",\"remarks\":null,\"timestamp\":\"04/10/2019 11:01:04\",\"iinno\":\"607223\"},{\"id\":191,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100021\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100021\"},{\"id\":192,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100023\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100023\"},{\"id\":193,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100025\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100025\"},{\"id\":194,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100027\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100027\"},{\"id\":195,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100041\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100041\"},{\"id\":196,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100043\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100043\"},{\"id\":140,\"activeFlag\":1,\"bankName\":\"CHENNAI CENTRAL CO-OPERATIVE BANK LTD.\",\"details\":\"CHENNAI CENTRAL CO-OPERATIVE BANK LTD.\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508664\"},{\"id\":143,\"activeFlag\":1,\"bankName\":\"Dindigul Central Co-operative Bank Ltd\",\"details\":\"Dindigul Central Co-operative Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508659\"},{\"id\":165,\"activeFlag\":1,\"bankName\":\"ICICI TEST\",\"details\":\"ICICI\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100032\"},{\"id\":144,\"activeFlag\":1,\"bankName\":\"KANCHEEPURAM CENTRAL COOPERATIVE BANK\",\"details\":\"KANCHEEPURAM CENTRAL COOPERATIVE BANK\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508734\"},{\"id\":162,\"activeFlag\":1,\"bankName\":\"Maharashtra State Co-operative Bank\",\"details\":\"Maharashtra State Co-operative Bank\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"607315\"},{\"id\":150,\"activeFlag\":1,\"bankName\":\"NSDL Payments Bank Limited \",\"details\":\"NSDL Payments Bank Limited \",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"607768\"},{\"id\":153,\"activeFlag\":1,\"bankName\":\"PTEST\",\"details\":\"PTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100141\"},{\"id\":146,\"activeFlag\":1,\"bankName\":\"Pudukottai District Central Cooperative Bank Ltd\",\"details\":\"Pudukottai District Central Cooperative Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508656\"},{\"id\":141,\"activeFlag\":1,\"bankName\":\"Thanjavur Central Co op Bank Ltd\",\"details\":\"Thanjavur Central Co op Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508665\"},{\"id\":151,\"activeFlag\":1,\"bankName\":\"THE GAYATRI COOPERATIVE URBAN BANK LTD\",\"details\":\"THE GAYATRI COOPERATIVE URBAN BANK LTD\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"607157\"},{\"id\":137,\"activeFlag\":1,\"bankName\":\"The Madurai District Central Cooperative Bank Ltd\",\"details\":\"The Madurai District Central Cooperative Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508681\"},{\"id\":145,\"activeFlag\":1,\"bankName\":\"The Nilgiris District Central Coop Bank Ltd\",\"details\":\"The Nilgiris District Central Coop Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508660\"},{\"id\":138,\"activeFlag\":1,\"bankName\":\"The Ramanathapuram District Central Co op Bank Ltd\",\"details\":\"The Ramanathapuram District Central Co op Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508676\"},{\"id\":136,\"activeFlag\":1,\"bankName\":\"THE SALEM DISTRICT CENTRAL CO-OPERATIVE BANK LTD\",\"details\":\"THE SALEM DISTRICT CENTRAL CO-OPERATIVE BANK LTD\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508648\"},{\"id\":147,\"activeFlag\":1,\"bankName\":\"THE TIRUCHIRAPALLI DIST. CENT COOPERATIVE BANK LTD\",\"details\":\"THE TIRUCHIRAPALLI DIST. CENT COOPERATIVE BANK LTD\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508680\"},{\"id\":139,\"activeFlag\":1,\"bankName\":\"The Tiruvannamalai District Central Coop Bank Ltd\",\"details\":\"The Tiruvannamalai District Central Coop Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508657\"},{\"id\":142,\"activeFlag\":1,\"bankName\":\"The Virudhunagar District Central Co-op Bank Ltd\",\"details\":\"The Virudhunagar District Central Co-op Bank Ltd\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508732\"},{\"id\":148,\"activeFlag\":1,\"bankName\":\"THE SIVAGANGAI DISTRICT CENTRAL COOP BANK LTD\",\"details\":\"THE SIVAGANGAI DISTRICT CENTRAL COOP BANK LTD\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"508649\"},{\"id\":149,\"activeFlag\":1,\"bankName\":\"Tripura State Co-operative Bank Ltd.\",\"details\":\"Tripura State Co-operative Bank Ltd.\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"607978\"},{\"id\":154,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000013\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000013\"},{\"id\":161,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000014\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000014\"},{\"id\":219,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000015\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"000015\"},{\"id\":152,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000016\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000016\"},{\"id\":168,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000018\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000018\"},{\"id\":163,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000032\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000032\"},{\"id\":164,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 000039\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"000039\"},{\"id\":175,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100001\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100001\"},{\"id\":177,\"activeFlag\":1,\"bankName\":\"Zkotak Bank 100011\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100011\"},{\"id\":169,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100012\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100012\"},{\"id\":155,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100013\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100013\"},{\"id\":170,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100014\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100014\"},{\"id\":171,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100022\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100022\"},{\"id\":172,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100024\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100024\"},{\"id\":173,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100026\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100026\"},{\"id\":174,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100028\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100028\"},{\"id\":176,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100031\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100031\"},{\"id\":156,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100033\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100033\"},{\"id\":159,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100034\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100034\"},{\"id\":202,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100042\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100042\"},{\"id\":203,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100044\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100044\"},{\"id\":197,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100045\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100045\"},{\"id\":204,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100046\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100046\"},{\"id\":198,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100047\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100047\"},{\"id\":205,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100048\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100048\"},{\"id\":199,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100049\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100049\"},{\"id\":158,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100051\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100051\"},{\"id\":218,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100064\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100064\"},{\"id\":200,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100411\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100411\"},{\"id\":207,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100412\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100412\"},{\"id\":201,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100413\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100413\"},{\"id\":208,\"activeFlag\":1,\"bankName\":\"ZKotak Bankll 100414\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"100414\"},{\"id\":157,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 100452\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"100452\"},{\"id\":235,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777001\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"26/06/2025 14:37:09\",\"iinno\":\"777001\"},{\"id\":236,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777002\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777002\"},{\"id\":237,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777003\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777003\"},{\"id\":238,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777004\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777004\"},{\"id\":239,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777005\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777005\"},{\"id\":240,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777013\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777013\"},{\"id\":241,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777014\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777014\"},{\"id\":242,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777015\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777015\"},{\"id\":243,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777016\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777016\"},{\"id\":244,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777083\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777083\"},{\"id\":245,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777086\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777086\"},{\"id\":246,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777087\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777087\"},{\"id\":247,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777090\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777090\"},{\"id\":248,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777091\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777091\"},{\"id\":249,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777092\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777092\"},{\"id\":250,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777093\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777093\"},{\"id\":251,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777094\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777094\"},{\"id\":252,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777100\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777100\"},{\"id\":253,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777101\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777101\"},{\"id\":254,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777103\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777103\"},{\"id\":255,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777104\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777104\"},{\"id\":256,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777105\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777105\"},{\"id\":257,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777108\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777108\"},{\"id\":258,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777113\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777113\"},{\"id\":259,\"activeFlag\":1,\"bankName\":\"ZKotak Bank 777114\",\"details\":\"KTEST\",\"remarks\":null,\"timestamp\":\"30/06/2025 14:38:16\",\"iinno\":\"777114\"},{\"id\":221,\"activeFlag\":1,\"bankName\":\"ZNSDL Bank Test 990326\",\"details\":\"NSDLTEST\",\"remarks\":null,\"timestamp\":\"12/09/2023 12:00:00\",\"iinno\":\"990326\"}]"

                        }
                    },
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],


            }
        },
        {
            title: "Merchant On Boarding",
            topText: "{AEPS Base URL}/MerchantOnBoardingApiUser",
            biometric: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<PidOptions ver="1.0">
  <Opts env="P" fCount="1" fType="2" format="0" iCount="0" iType="0"
    indicatorforUID="0" otp="" pCount="0" pType="0"
    pidVer="2.0" posh="UNKNOWN" timeout="10000"
    wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" />
  <Demo/>
  <CustOpts>
    <Param name="" value=""/>
  </CustOpts>
</PidOptions>`,
            subInforamtion: "This API is used to onboard a new merchant into the system by capturing personal, business, KYC, banking, and device details.",
            request: "All headers Required",
            notes: ["For testing purpose use MerchantPhoneNumber:",`For Success MerchantPhoneNumber = "9999999999" & AadhaarNumber = "123412341234" `],
            post: {

                "MerchantPhoneNumber": "9999999999",
                "FirstName": "Rohit",
                "LastName": "Sharma",
                "MiddleName": "Kumar",
                "merchantAddress1": "Shop No 12, Sector 5, Ghansoli",
                "MerchantAddress2": "Near Ghansoli Railway Station",
                "MerchantStateId": "27",
                "MerchantState": "MAHARASHTRA",
                "MerchantCityName": "Navi Mumbai",
                "MerchantDistrictName": "Thane",
                "MerchantPinCode": "400701",
                "CompanyLegalName": "Rohit Enterprises",
                "CompanyType": "Proprietorship",
                "CompanyTypeId": "1",
                "EmailId": "rohit.sharma@gmail.com",
                "UserPan": "ABCDE1234F",
                "AadhaarNumber": "123412341234",
                "MerchanrGstinNumber": "27ABCDE1234F1Z5",
                "MerchantAadharFrontImage": "base64_aadhar_front",
                "MerchantAadharBackImage": "base64_aadhar_back",
                "MerchantMaskedAadharImage": "base64_masked_aadhar",
                "MerchantPanImage": "base64_pan",
                "BankProofImage": "base64_bank_proof",
                "CompanyBankAccountNumber": "123456789012",
                "BankIfscCode": "HDFC0001234",
                "CompanyBankName": "HDFC Bank",
                "BankAccountName": "Rohit Sharma",
                "ShopAddress": "Shop No 12, Sector 5",
                "ShopCity": "Navi Mumbai",
                "ShopDistrict": "Thane",
                "ShopState": "MAHARASHTRA",
                "ShopStateId": "27",
                "ShopPincode": "400701",
                "ShopLatitude": "19.11438",
                "ShopLongitude": "73.01717",
                "IpAddress": "192.168.1.1",
                "DeviceIMEI": "356789012345678",
                "MatmSerialNumber": "MATM123456",
                "NationalBankIdentificationNumber": "123456",
                "ClientOrderId": "ORD123456789",
                "BackgroundImageOfShop": "photo.jpg"

            },

            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "OTP has been sent to the merchant’s registered mobile number.",
                            "data": "Token",
                            "responseData": "{\"primaryKeyId\":4668056,\"encodeFPTxnId\":\"EKYKF7800944170426155452894I\"}"
                        }

                    },

                ],
                error: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 400,
                            "responseMessage": "Invalid Merchant Phone Number",
                            "data": null,
                            "responseData": null
                        },
                    },
                    {
                        id: 2,
                        info: "",
                        code: {
                            responseCode: 401,
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],

            },

            table: {
  responseKeysTable: {
    id: 6,
    title: "Merchant Onboarding Parameters",
    tableData: [
      { key: "MerchantPhoneNumber", description: "Merchant contact number" },
      { key: "FirstName", description: "Merchant first name" },
      { key: "LastName", description: "Merchant last name" },
      { key: "MiddleName", description: "Merchant middle name" },
      { key: "MerchantAddress1", description: "Primary merchant address" },
      { key: "MerchantAddress2", description: "Secondary merchant address" },
      { key: "MerchantState", description: "Merchant state name" },
      { key: "MerchantStateId", description: "obtained from the GetFPStateList API response" },
      { key: "CompanyTypeId", description: "obtained from the GetCompanyTypeList API response" },
      { key: "MerchantCityName", description: "Merchant city name" },
      { key: "MerchantDistrictName", description: "Merchant district name" },
      { key: "MerchantPinCode", description: "Merchant area pincode" },
      { key: "CompanyLegalName", description: "Registered company/shop name" },
      { key: "CompanyType", description: "Type of company/business (obtained from the GetCompanyTypeList API response)" },
      { key: "EmailId", description: "Merchant email ID" },
      { key: "UserPan", description: "Merchant PAN number" },
      { key: "AadhaarNumber", description: "Merchant Aadhaar number" },
      { key: "MerchantAadharFrontImage", description: "Aadhaar front image (base64)" },
      { key: "MerchantAadharBackImage", description: "Aadhaar back image (base64)" },
      { key: "BackgroundImageOfShop", description: "Shop background image (base64)" },
      { key: "MerchanrGstinNumber", description: "GST number" },
      { key: "MerchantPanImage", description: "PAN card image (base64)" },
      { key: "BankProofImage", description: "Bank proof (passbook/cheque) (base64)" },
      { key: "CompanyBankAccountNumber", description: "Bank account number" },
      { key: "CompanyBankName", description: "Bank name" },
      { key: "CompanyIfscCode", description: "Bank IFSC code" },
      { key: "AccountHolderName", description: "Account holder name" },
      { key: "ShopAddress", description: "Shop address" },
      { key: "ShopCity", description: "Shop city" },
      { key: "ShopDistrict", description: "Shop district" },
      { key: "ShopState", description: "Shop state name" },
      { key: "ShopPincode", description: "Shop area pincode" },
      { key: "ShopLatitude", description: "Shop latitude location" },
      { key: "ShopLongitude", description: "Shop longitude location" },
      { key: "ClientOrderId", description: "Unique transaction Number" },
      { key: "DeviceIMEI", description: "IMEI number of the biometric/mATM device used for the transaction." },
      { key: "MatmSerialNumber", description: "Serial number of the mATM hardware device." },
      { key: "IpAddress", description: "User IP address" },
      { key: "NationalBankIdentificationNumber", description: "Bank identification number (obtained from the GetFPBankList API response field iinno)" },
      { key: "MerchantMaskedAadharImage", description: "base64_masked_aadhar" },
      { key: "ShopStateId", description: "obtained from the GetFPStateList API response" },

    ]
  }
}
        },
        {
            title: " Verify OTP",
            notes: ["For testing purpose use:",`For Success use Otp = "123456" `],
            subInforamtion: "This API verifies the OTP sent during merchant onboarding for eKYC validation. Upon successful verification, it confirms the merchant registration process using the provided transaction identifiers.",
            topText: "{AEPS Base URL}/MerchantEkycVerifyOTPApiUser",
            request: "All headers Required",
            post: {
                "PrimaryKeyId": "4668056",
                "EncodeFPTxnId": "EKYKF7800944170426155452894I",
                "Otp": "123456",
                "DeviceIMEI": "8424185",
                "matmSerialNumber": "MATM123456",
                "MerchantPhoneNumber": "999999999"
            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "OTP verified successfully.",
                            "data": "Token",
                            "responseData": "{\"primaryKeyId\":\"4668056\",\"encodeFPTxnId\":\"EKYKF7800944170426155452894I\"}"
                        }
                    }
                ],

                error: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 400,
                            "responseMessage": "The details entered are incorrect or the OTP has expired. Kindly request a new OTP.",
                            "data": "Token",
                            "responseData": ""
                        },
                    },
                    {
                        id: 2,
                        info: "",
                        code: {
                            responseCode: 401,
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }

        },
        {
            title: "Generate Otp",
            notes: ["For testing purpose use :",`For Success use MerchantPhoneNumber = "9999999999" `],
            subInforamtion: "This API generates and sends an OTP to the merchant’s registered mobile number for eKYC verification. It validates the device and location details before initiating the OTP generation process.",
            topText: " {AEPS Base URL}/MerchantEkycGenOTPApiUser",
            request: "All headers Required",
            post: {

                "latitude": "19.11970",

                "longitude": "72.84642",

                "merchantPhoneNumber": "9999999999",

                "deviceIMEI": "356789012345678",

                "matmSerialNumber": "MATM123456"

            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "OTP has been sent to the merchant’s registered mobile number.",
                            "data": "Token",
                            "responseData": "{\"primaryKeyId\":4668056,\"encodeFPTxnId\":\"EKYKF7800944170426155452894I\"}"
                        }
                    }
                ],
                error: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            responseCode: 400,
                            responseMessage: "Failed to Send Otp, Please try again",
                            data: 'Token',
                            responseData: null,
                            signalR: null,
                        },
                    },
                    {
                        id: 2,
                        info: "",
                        code: {
                            responseCode: 401,
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }
        },
        {
            title: "Resend OTP",
            notes: ["For testing purpose use :",`For Success use MerchantPhoneNumber = "9999999999" `],
            subInforamtion: "This API is used to resend the OTP to the merchant’s registered mobile number during the eKYC process. It validates the existing onboarding transaction and device details before triggering a new OTP.",
            topText: "{AEPS Base URL}/MerchantEkyResendOTPApiUser",
            request: "All headers Required",
            post: {

                "latitude": "19.11438",

                "longitude": "72.84642",

                "PrimaryKeyId": "4668056",

                "EncodeFPTxnId": "EKYKF7800944170426155452894I",

                "DeviceIMEI": "356789012345678",

                "matmSerialNumber": "MATM123456",

                "MerchantPhoneNumber": "9999999999"

            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "Resend OTP On Merchant register mobilenumber Successfully.",
                            "data": "Token",
                            "responseData": "{\"primaryKeyId\":4668056,\"encodeFPTxnId\":\"EKYKF7800944170426155452894I\"}"
                        }
                    }
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }
        },
        {
            title: "Merchant Ekyc",
            subInforamtion: "This API performs biometric-based merchant eKYC authentication using device, fingerprint, and encryption data. Upon successful validation, it completes the merchant KYC process and activates the merchant profile.",
            topText: "{AEPS Base URL}/FP_MerchantEKYCApiUser",
            request: "All headers Required",
            post: {
                "MerchantPhoneNumber": "9999999999",
                "Ci": "20280813",
                "Dc": "fceebd0c-1f97-4891-9ac1-083f12db6af2",
                "DeviceIMEI": "8424185",
                "MatmSerialNumber": "17431d58519761db",
                "DpID": "MANTRA.MSIPL",
                "ErrCode": "0",
                "ErrInfo": "Success.",
                "FCount": "1",
                "FType": "2",
                "Hmac": "NILlIgOOMct9E7qtfY5cA82Mcd2+fYJyAQ/tXC2DaKwhwMW0FNpPQRwBA6Iog2YK",
                "ICount": "0",
                "IType": "0",
                "Mc": "MIIEADCCAuigAwIBAgIIREQ0N0NEOUQwDQYJKoZIhvcNAQELBQAwgfwxKjAoBgNVBAMTIURTIE1hbnRyYSBTb2Z0ZWNoIEluZGlhIFB2dCBMdGQgMjFVMFMGA1UEMxNMQi0yMDMgU2hhcGF0aCBIZXhhIE9wcG9zaXRlIEd1amFyYXQgSGlnaCBDb3VydCBTLkcgSGlnaHdheSBBaG1lZGFiYWQgLTM4MDA2MDESMBAGA1UECRMJQUhNRURBQkFEMRAwDgYDVQQIEwdHVUpBUkFUMR0wGwYDVQQLExRURUNITklDQUwgREVQQVJUTUVOVDElMCMGA1UEChMcTWFudHJhIFNvZnRlY2ggSW5kaWEgUHZ0IEx0ZDELMAkGA1UEBhMCSU4wHhcNMjYwNDE4MDcyNTA1WhcNMjYwNDIxMDYwNDM5WjCBgjEPMA0GA1UEAxMGTUZTMTEwMQswCQYDVQQLEwJJVDEOMAwGA1UEChMFTVNJUEwxEjAQBgNVBAcTCUFobWVkYWJhZDELMAkGA1UECBMCR0oxCzAJBgNVBAYTAklOMSQwIgYJKoZIhvcNAQkBFhVzdXBwb3J0QG1hbnRyYXRlYy5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCuAbYLLl90T7IvEEASt6ClToTbO4WfoYvpEKGCFSi2jIEsVDgQeTc8PBKpXcc4X2X5kJNwM0kKgE4gY7ImFXvt2F5TqyxNXt/DWWAZr6+iq5TZ8Q1ya07fvieNd43pw+b7PgxZydYL3cZiTuV+1USrbUAxfOxk0PqoEN3uakaK56rtqpblTCqkVcGcBAYhbQ9Qhbvv9mSWafpSOzJDaDQm66uQ65osKCvXCDD1SFYDV6qDcU83ynjGxO3BA8G9t3C4a3gCBBwMptvF6zymVHemuXSPVFDw6diWIyN3SCITyaGwaauFI9CYNmzCwCga4/N4R/2lbctQRR5RcRS9pLnZAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAJzerxYqwXmhmSnZVWWQwCdhH3VxDf9eMkEPOUNoEzHrQi82nXNT6c++gN0/smYhznm4LgRpkQjBjoNvHurkDFVx947dxpohzI8+Pu8ylXLqvXpOZ+H4BzBltRQUwAwbexUEsatKkLRty3qjLZQUCL2zVuuJTbjclXRit9JOHlcnIjhFlWL3DNH223OC/yyP9Hk2U1YE5z/qW6kexRW0VMtfczoXY6zgUROQxQH4O8vHWO+3RvZcIGdiMtEKcfHNx8kAHU2aX/2c0KAVWLG+YpkMEo8wUW12LDl5IJKt3FNg90I2v4JOaQAeSWT86OzJ+/dFHNmYmfiFZnlfV0mFNvI=",
                "Mi": "MFS110",
                "NmPoints": "51",
                "PCount": "0",
                "PType": "0",
                "PidDatatype": "X",
                "Piddata": "R9+H0sy6FE7nw==",
                "QScore": "89",
                "RdsID": "RENESAS.MANTRA.001",
                "RdsVer": "1.4.1",
                "SessionKey": "s1z5c0M7VDWkKGSwZjlgWxbeG0g6oJeo5zFKyeOcejoiZbnuPJhtkCDe9H4An6r4Frmz2QJop/aA9CAB8/1M1a7f7xEktnHkeS6tQri3tJ3baCNVsVz+c8P2iRKPav80G51+xIhDxgb/sPrkVDJnpdkoydAroNrNlSuIYMfBFoRtnrfLESRQulPw9yCOxZgBPsaRc+Flbjtq+A/AGz+Nr/GLuHc95OnQ19jUW/V64xEEgAGAV+GevUJO2b6CexBFF/r2QqoqPcOmoCRN4SaV2qSGV3oj2UI2FykWSgv92TyYaUzOJhMVTwPCcJbqBEBEVEKUoUi3SgkixPul9IQBcg==",
                "EncodeFPTxnId": "EKYKF7802540180426152857924I",
                "PrimaryKeyId": "4669115"
            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "Merchant KYC completed successfully.",
                            "data": "Token",
                            "responseData": null
                        }
                    }

                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],



            },
            table: {
  responseKeysTable: {
    id: 5,
    title: "Merchant KYC Parameters",
    tableData: [
      { key: "MerchantPhoneNumber", description: "Registered mobile number of the merchant initiating the transaction." },
      { key: "DeviceIMEI", description: "IMEI number of the biometric/mATM device used for the transaction." },
      { key: "MatmSerialNumber", description: "Serial number of the mATM hardware device." },
      { key: "DpID", description: "Device Provider ID (e.g., MANTRA.MSIPL)." },
      { key: "Mi", description: "Device model identifier (e.g., MFS110)." },
      { key: "RdsID", description: "Registered Device Service (RDS) provider ID." },
      { key: "RdsVer", description: "Version of RD service used for biometric authentication." },
      { key: "Dc", description: "Device certificate identifier." },
      { 
        key: "Ci", 
        description: "Returned by RD Service when using biometric authentication. Public key certificate identifier of UIDAI using which Skey was encrypted."
      },
      { 
        key: "SessionKey", 
        description: "Returned by RD Service when using biometric authentication. AES session key generated dynamically for every txn."
      },
      { key: "Hmac", description: "Hash-based Message Authentication Code for data integrity." },
      { key: "Mc", description: "Manufacturer certificate for device authentication." },
      { key: "Piddata", description: "Encrypted biometric PID data (fingerprint/iris)." },
      { key: "PidDatatype", description: "Encoding type of PID data (e.g., X = encrypted XML)." },
      { key: "FCount", description: "Total number of FIR records which was part of input." },
      { key: "FType", description: "When connecting the Device to RD service send ftype 2 in the request." },
      { key: "ICount", description: "Total number of IIR records which was part of input." },
      { key: "IType", description: "ISO format (0 for IIR), 0 (IIR) is default." },
      { key: "PCount", description: "Number of face photo records to be captured (0 to 1)." },
      { key: "PType", description: "Face format." },
      { key: "NmPoints", description: "Number of minutiae points captured (fingerprint quality metric)." },
      { key: "QScore", description: "Quality score of biometric capture." },
      { key: "ErrCode", description: "Error code from device/system (0 = success)." },
      { key: "ErrInfo", description: "Error message or status description." },
      { key: "EncodeFPTxnId", description: "Encoded fingerprint transaction ID (unique reference)." },
      { key: "PrimaryKeyId", description: "Internal database primary key for transaction tracking." }
    ]
  }
}
        }, {
            title: "Merchant 2FA",
            subInforamtion:"This API performs biometric-based merchant authentication as part of the eKYC process using device, fingerprint, and session encryption data. Upon successful validation, it completes the merchant 2FA (two-factor authentication) verification.",
            topText: " {AEPS Base URL}/FP_MerchantTwoFAApiUser",
            request: "All headers Required",
            post: {

                "MerchantPhoneNumber": "9999999999",
                "Latitude": "19.11478",
                "Longitude": "73.01682",
                "DeviceIMEI": "356789012345678",
                "MatmSerialNumber": "MATM123456",
                "ICount": "",
                "IType": "",
                "PCount": "",
                "PType": "",
                "ErrCode": "0",
                "ErrInfo": "Success",
                "FCount": "1",
                "FType": "2",
                "NmPoints": "41",
                "QScore": "80",
                "DpID": "MANTRA.MSIPL",
                "RdsID": "RENESAS.MANTRA.001",
                "RdsVer": "1.4.1",
                "Dc": "dc987654321",
                "Mi": "MFS110",
                "Mc": "",
                "Ci": "ci123456789",
                "SessionKey": "",
                "Hmac": "a1b2c3d4e5f67890123456789abcdef0",
                "PidDatatype": "X",
                "Piddata": ""

            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            responseCode: 200,
                            responseMessage: "Merchant 2FA Done.",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBVGzAu4m7m4e+Va8zGQ4Se1uMFZxuUZzBvOjbwBM1HTLFKCybphNlK8fMbG7+MgXpo7bcI/+N5HN3TL3SBhEMCO5g9rp+4vtllPY3sb78CrtrWdAsozNrmaqbkK92ec0kUw1za6kb/0eCsRSFt+qEUA=",
                            responseData: null

                        }
                    }
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            },
             table: {
  responseKeysTable: {
    id: 5,
    title: "Merchant 2FA Parameters",
    tableData: [
      { key: "MerchantPhoneNumber", description: "Registered mobile number of the merchant initiating the transaction." },
      { key: "DeviceIMEI", description: "IMEI number of the biometric/mATM device used for the transaction." },
      { key: "MatmSerialNumber", description: "Serial number of the mATM hardware device." },
      { key: "DpID", description: "Device Provider ID (e.g., MANTRA.MSIPL)." },
      { key: "Mi", description: "Device model identifier (e.g., MFS110)." },
      { key: "RdsID", description: "Registered Device Service (RDS) provider ID." },
      { key: "RdsVer", description: "Version of RD service used for biometric authentication." },
      { key: "Dc", description: "Device certificate identifier." },
      {
       key : "Latitude", description: "Merchant/device geographic latitude (used for location verification)."
      },
      {
       key : "Longitude", description: "Merchant/device geographic longitude (used for location verification)."
      },
      { 
        key: "Ci", 
        description: "Returned by RD Service when using biometric authentication. Public key certificate identifier of UIDAI using which Skey was encrypted."
      },
      { 
        key: "SessionKey", 
        description: "Returned by RD Service when using biometric authentication. AES session key generated dynamically for every txn."
      },
      { key: "Hmac", description: "Hash-based Message Authentication Code for data integrity." },
      { key: "Mc", description: "Manufacturer certificate for device authentication." },
      { key: "Piddata", description: "Encrypted biometric PID data (fingerprint/iris)." },
      { key: "PidDatatype", description: "Encoding type of PID data (e.g., X = encrypted XML)." },
      { key: "FCount", description: "Total number of FIR records which was part of input." },
      { key: "FType", description: "When connecting the Device to RD service send ftype 2 in the request." },
      { key: "ICount", description: "Total number of IIR records which was part of input." },
      { key: "IType", description: "ISO format (0 for IIR), 0 (IIR) is default." },
      { key: "PCount", description: "Number of face photo records to be captured (0 to 1)." },
      { key: "PType", description: "Face format." },
      { key: "NmPoints", description: "Number of minutiae points captured (fingerprint quality metric)." },
      { key: "QScore", description: "Quality score of biometric capture." },
      { key: "ErrCode", description: "Error code from device/system (0 = success)." },
      { key: "ErrInfo", description: "Error message or status description." },
      { key: "EncodeFPTxnId", description: "Encoded fingerprint transaction ID (unique reference)." },
      { key: "PrimaryKeyId", description: "Internal database primary key for transaction tracking." }
    ]
  }
}
        },
        {
            title: "Cash withdrawal",
            notes: ["Cash withdrawal For Uat Testing;", `For Pending Use  TransactionAmount = 100 & AdhaarNumber = "123412341234" `,`For Failed  Use  TransactionAmount < 99.0 & AdhaarNumber = "123412341234`],
            subInforamtion: "This API is used to perform AEPS cash withdrawal transactions using customer Aadhaar and biometric authentication. Upon successful verification, it debits the requested amount from the customer’s bank account and returns transaction details including RRN and balance information.",
            request: "All headers Required",
            topText: "{AEPS Base URL}/FP_CashWithdrawalApiUser",
            post: {

                "PidDatatype": "X",
                "Piddata": "",
                "Ci": "ci123456789",
                "Dc": "dc987654321",
                "DpID": "MANTRA.MSIPL",
                "ErrCode": "0",
                "ErrInfo": "Success",
                "FCount": "1",
                "FType": "2",
                "IType": "",
                "Hmac": "a1b2c3d4e5f67890123456789abcdef0",
                "ICount": "",
                "Mc": "",
                "Mi": "MFS110",
                "NmPoints": "33",
                "PCount": "",
                "PType": "",
                "QScore": "90",
                "RdsID": "RENESAS.MANTRA.001",
                "RdsVer": "1.4.1",
                "SessionKey": "",
                "DeviceIMEI": "356789012345678",
                "Latitude": "19.1147887",
                "Longitude": "73.0168107",
                "MerchantPhoneNumber": "9999999999",
                "CustomerPhoneNumber": "5555555555",
                "RequestRemarks": "",
                "TransactionAmount": "100",
                "AdhaarNumber": "123412341234",
                "NationalBankIdentificationNumber": "608315",
                "ClientOrderId": "sdklfjeoiruouroerldfd"

            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            responseCode: 200,
                            responseMessage: "Transaction Success",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBeJYuaK9nzNkWFq+KCCTeoETjd0UDvf++LL0AXkImmUMt47bMRVkvwmavt6KBhqRL3B4Y1CLxwLsIk+qa/mVQ5j/nGGze1zm+H7D7jT0ne9aGQAWGaLhP3xzgPJa5fVk/mzEKRh7i6TOXYABq0tDYIs=",
                            responseData: "{\"MobileNumber\":null,\"Amount\":100,\"ProductId\":null,\"OperatorId\":null,\"VendorRefNumber\":167767512325250012,\"TransactionMode\":null,\"ExecutionMode\":1,\"StatusId\":1,\"SPTransactionRef\":\"sdklfjeoiruouroerldfd\",\"CustomerDetails\":\"670816060105-5555555555-608314-9999999999\",\"TransactionName\":\"AEPS\",\"TimeSeconds\":54300633,\"TPin\":null,\"Reason\":null,\"VendorId\":null,\"ClientOrderId\":null,\"Process\":null,\"VendorCharges\":null,\"VendorGST\":null,\"balanceAmount\":100.0,\"bankRRN\":4384729847923}"

                        }
                    }, 
                    
                     {
                        id: 1,
                        info: "",
                        code: {

  responseCode: 201,
  responseMessage: "Transaction Pending",
  data: "Token",
  responseData: "{\"MobileNumber\":\"\",\"Amount\":1000,\"ProductId\":\"\",\"OperatorId\":\"\",\"VendorRefNumber\":\"167766779645810042\",\"TransactionMode\":\"\",\"ExecutionMode\":\"1\",\"StatusId\":\"3\",\"SPTransactionRef\":\"ORD123456DFDSFSADFGDh\",\"CustomerDetails\":\"123412341234-5555555555-608314-9999999999\",\"TransactionName\":\"AEPS\",\"TimeSeconds\":\"54227365\",\"TPin\":\"\",\"Reason\":\"\",\"VendorId\":\"\",\"ClientOrderId\":\"\",\"Process\":\"\",\"VendorCharges\":\"\",\"VendorGST\":\"\"}"

}
 
                    },
                    {
                        id: 2,
                        info: "",
                        code: {

                            responseCode: 204,
                            responseMessage: "Transaction Failed - Amount is less than the minimum limit (MIN LIMIT : 99.0 )",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBStR5VZwFd56FShg6YyGGF3z6HKwYKvhzdLfvqZwJqAkgfXVWHmYz+gMDRsF85ezYqRZM5UKJZ6xG1R9lZmbW4kBlrAcWdmQ9Qi8yIL9BgxdjNpwiNJ+ktBjq6Ndk57qXudCHQAts7sGCDy42AQAj0Q=",
                            responseData: "{\"MobileNumber\":null,\"Amount\":\"10\",\"ProductId\":null,\"OperatorId\":null,\"VendorRefNumber\":\"167766779645810041\",\"TransactionMode\":null,\"ExecutionMode\":\"1\",\"StatusId\":\"0\",\"SPTransactionRef\":\"ORD123456DFDSFSADFGDG\",\"CustomerDetails\":\"670816060105-5555555555-608314-9999999999\",\"TransactionName\":\"AEPS\",\"TimeSeconds\":\"54227365\",\"TPin\":null,\"Reason\":null,\"VendorId\":null,\"ClientOrderId\":null,\"Process\":null,\"VendorCharges\":null,\"VendorGST\":null}"

                        }
                    }
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            },
            table: {
  responseKeysTable: {
    id: 7,
    title: "Cash withdrawal Response Parameters",
    tableData: [
      { key: "MobileNumber", description: "Customer mobile number" },
      { key: "Amount", description: "Transaction amount" },
      { key: "VendorRefNumber", description: "Vendor reference number" },
      { key: "TransactionMode", description: "Mode of transaction" },
      { key: "ExecutionMode", description: "Execution type/mode" },
      { key: "StatusId", description: "Transaction status ID" },
      { key: "SPTransactionRef", description: "Service provider transaction reference" },
      { key: "CustomerDetails", description: "Combined customer transaction details" },
      { key: "TransactionName", description: "Name of transaction" },
      { key: "TimeSeconds", description: "Transaction processing time (in seconds)" },
      { key: "TPin", description: "Transaction PIN" },
      { key: "Reason", description: "Failure or status reason" },
      { key: "ClientOrderId", description: "Client order reference ID" },
      { key: "Process", description: "Process type" },
      { key: "VendorCharges", description: "Charges applied by vendor" },
      { key: "VendorGST", description: "GST on vendor charges" },
      { key: "balanceAmount", description: "Remaining balance amount" },
      { key: "bankRRN", description: "Bank reference number" }
    ]
  }
}
        }, {
            title: " Balance Enquiry",
            notes : ["Balance Enquiry For Uat Testing :",`For Success Use  MerchantPhoneNumber = "9999999999"`,`For Failed  Use MerchantPhoneNumber = "5555555555"`],
            subInforamtion: "This AEPS Balance Enquiry API is used to retrieve the customer’s available bank account balance using Aadhaar authentication. The request is processed through biometric verification (fingerprint/iris) along with bank and Aadhaar details Upon successful authentication, it returns the available account balance along with basic transaction and customer details.",
            request: "All headers Required",
            topText: " {AEPS Base URL}/BalanceEnquiryApiUser",
            post: {

                "latitude": "19.1144",
                "longitude": "73.0172",
                "merchantPhoneNumber": "9999999999",
                "customerPhoneNumber": "5555555555",
                "requestRemarks": "Test transaction",
                "transactionAmount": "0",
                "pidDatatype": "X",
                "piddata": "",
                "ci": "ci123456789",
                "dc": "dc987654321",
                "dpID": "MANTRA.MSIPL",
                "errCode": "00",
                "errInfo": "Success.",
                "fCount": "1",
                "fType": "2",
                "iType": "0",
                "hmac": "a1b2c3d4e5f67890123456789abcdef0",
                "iCount": "0",
                "mc": "",
                "mi": "MFS110",
                "nmPoints": "44",
                "pCount": "0",
                "pType": "0",
                "qScore": "98",
                "rdsID": "RENESAS.MANTRA.001",
                "rdsVer": "1.4.1",
                "sessionKey": "",
                "adhaarNumber": "123412341234",
                "nationalBankIdentificationNumber": "608314",
                "deviceIMEI": "356789012345678",
                "clientOrderId": "ORD123456DFDSFSADFGDG"

            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {

                            responseCode: 200,
                            responseMessage: "Transaction Success",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBQa5f5xIg2AqR6NJJNiRHWiaVj7HggEr+OFsc0GmCK/0Mv3NrJpK43UQ8kfZ49rZJ2tr0+wVj/1B4ozisff+BJ/jgK7djkoy7QJVCduMutS93fsFEyt/jN3sv27CbipsaxkOr9bo0dcmmvQhDiqPELo=",
                            responseData: "{\"terminalId\":\"AB100829\",\"requestTransactionTime\":\"16/04/2026 11:46:57\",\"transactionAmount\":0.0,\"transactionStatus\":\"successful\",\"balanceAmount\":107.26,\"bankRRN\":\"610611614482\",\"transactionType\":\"BE\",\"fpTransactionId\":\"BEN77262926106114657468I\",\"merchantTxnId\":null,\"errorCode\":null,\"errorMessage\":null,\"merchantTransactionId\":null,\"responseCode\":\"00\",\"FingpayTransactionId\":null}"

                        }
                    },
                    {
                        id: 2,
                        info: "",
                        code: {

                            responseCode: 204,
                            responseMessage: "Transaction Failed - Error message",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBbGfnbtPMRlbwKfg32umBjt4Ij0fnsjXAwBNRPgyefInBd2QaoVPKaMhEfLMUW1XkAJzdR9f4iE6UAN+D6jPW306AZOJcK+CpR6gh8tF6BkdChHqA2DjSq/+GsMhEafdSuDyirX5tfbzc1saTQiBOFE=",
                            responseData: "null"

                        }
                    }
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }
        }, {
            title: "Mini Statement",
              notes : ["Mini Statement For Uat Testing :",`For Success Use  MerchantPhoneNumber = "9999999999"`,`For Failed  Use MerchantPhoneNumber = "5555555555"`],
            subInforamtion: "This API fetches the mini statement of a customer’s bank account using Aadhaar and biometric authentication. It returns recent transaction history along with balance details and transaction status after successful validation.",
            topText: "{AEPS Base URL}/MiniStatementApiUser",
            request: "All headers Required",
            post: {
                "PidDatatype": "X",
                "Piddata": "HNa89J8OOv2GhgJNdvSqg1IyAtD0y5",
                "Ci": "20280813",
                "Dc": "fceebd0c-1f97-4891-9ac1-083f12db6af2",
                "DpID": "MANTRA.MSIPL",
                "ErrCode": "0",
                "ErrInfo": "Success",
                "FCount": "1",
                "FType": "2",
                "IType": "",
                "Hmac": "tU5Yr40KFik9s59h645SIqGoh8MbF0B1bCjHWLg0+fitGeXGuSWA5I58HTJy82xU",
                "ICount": "",
                "Mc": "MJOaQAeSWT86OzJ+/dFHNmYmfiFZnlfV0mFNvI=",
                "Mi": "MFS110",
                "NmPoints": "35",
                "PCount": "",
                "PType": "",
                "QScore": "87",
                "RdsID": "RENESAS.MANTRA.001",
                "RdsVer": "1.4.1",
                "SessionKey": "b8gu2DOL48esg==",
                "DeviceIMEI": "8424185",
                "Latitude": "19.11472",
                "Longitude": "73.0168309",
                "MerchantPhoneNumber": "9999999999",
                "CustomerPhoneNumber": "5555555555",
                "RequestRemarks": "",
                "AdhaarNumber": "670816060105",
                "NationalBankIdentificationNumber": "608314",
                "TransactionAmount": "0",
                "ClientOrderId": "dskjfhery9845984ioers"
            },
            response: {
                success: [
                    {
                        id: 1,
                        info: "",
                        code: {
                            "responseCode": 200,
                            "responseMessage": "MiniStatement Done Successfully",
                            "data": "Token",
                            "responseData": "{\"terminalId\":\"AB097092\",\"requestTransactionTime\":\"20/04/2026 18:43:24\",\"transactionStatus\":\"successful\",\"balanceAmount\":101.36,\"bankRRN\":\"611018739628\",\"transactionType\":\"MS\",\"fpTransactionId\":\"MSN77074126110184324828I\",\"merchantTxnId\":\"167766908038050122\",\"errorCode\":null,\"errorMessage\":null,\"miniStatementStructureModel\":[{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"0.9\",\"narration\":\" GST of AEPS Non \"},{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"5.0\",\"narration\":\" AEPS Non-Financ \"},{\"date\":\"   -   \",\"txnType\":\"Cr\",\"amount\":\"100.0\",\"narration\":\" UPI~88146603037 \"},{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"1500.0\",\"narration\":\" UPI~93913788802 \"},{\"date\":\"   -   \",\"txnType\":\"Cr\",\"amount\":\"1500.0\",\"narration\":\" APBCR-APB-Ladki \"},{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"20.0\",\"narration\":\" UPI~41326984598 \"},{\"date\":\"   -   \",\"txnType\":\"Cr\",\"amount\":\"1.0\",\"narration\":\" 032910204986:In \"},{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"3.6\",\"narration\":\" AEPS_RONUS_CBS_ \"},{\"date\":\"   -   \",\"txnType\":\"Dr\",\"amount\":\"20.0\",\"narration\":\" AEPS_RONUS_CBS_ \"}]}"
                        }
                    }, {
                        id: 2,
                        info: "",
                        code: {

                            responseCode: 204,
                            responseMessage: "Transaction Failed - ERR:WADH validation fail in RD",
                            data: "++Ap6Msdf5vGrJk+W7MFWIpa1c+2wHK1S+NYCiAV0biGhrYs52Lx0mcwj9hgGDA7+JJ47bmBnUJb3vgjs2+adjdLCKwSU4Ge4BZA7BFxkntANImeJ6ijjGzNCGnSk00DnbR/hEHqPwRFy2trfrZsE5rMc2LVvHgqMXyPQl7DtXhpobnMSmvA/QAB0SCsl82AY7aOq+G9Iyq/rSY8L8hPBfn5CNuBf453QoQCl+jDzzv58gD4mpX7ID2En9Ir+U6898PvnTBRR7m6Vh45J+P3K3PsBbAkNOVsDXwAVRjvgw56uRcfj2PqoX6yTh1wOyugD3Rh0NPGOQTwZEDMmUdWoKhdKOezS4OR6w9Y0wZnny8=",
                            responseData: null

                        }
                    }
                ],
                error: [
                    {
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
                            responseMessage: "Token Expired, Re-Generate Token",
                            data: null,
                            responseData: null,
                            signalR: null,
                        },
                    },
                ],
            }
        }
    ],

};

