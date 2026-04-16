// ******************************** Informatio Type ********************************

interface Section {
  title?: string | undefined;
  content?: string | undefined;
}
interface introinterface extends Section {}
interface authenticationinterface extends Section {
  GenerateToken: string;
  VerifyToken: string;
}

interface BankandifscInfo extends Section {
  GetBanksForPayout: string;
  GetMasterIFSCForPayout: string;
}

interface RemitterManag extends Section {
  remitterlogin: string;
  RemitterRegistration: string;
}
interface BenificiaryManagement extends Section {
  AddBeneficiary: string;
  DeleteBeneficiary: string;
  VerifyBeneficiary: string;
}
interface TransactionProcessing extends Section {
  PayoutTransfer: string;
  CheckTransactionStatus: string;
}

interface WebHook extends Section {
  Webhook: string;
}

interface DTHRechargeService extends Section {
  contentoptions: string[];
}

interface DTHRechargeinterface extends Section {
  intro: introinterface;
  Authentication: authenticationinterface;
  DTHRechargeService: DTHRechargeService;
  keyfeatures: string[];
}

interface successresponse extends Section {
  amounts: number[];
}

interface Apitesting extends Section {
  successresponse: successresponse;
}

interface RechargeService extends Section {
  content: string;
}

interface pendingresponse extends Section {
  content: string;
}
interface FailedResponse extends Section {}

export interface MobileRechargeapi extends Section {
  intro: introinterface;
  Authentication: authenticationinterface;
  RechargeService: RechargeService;
  Apitesting: Apitesting;
  pendingresponse: pendingresponse;
  FailedResponse: FailedResponse;
  keyfeatures: string[];
}

interface BBPSAPIinterface extends Section {
  intro: introinterface;
  Authentication: authenticationinterface;
  BillValidation: {
    GetBBPSBillValidations: string;
  };
  BillInfornmation: {
    BillFetch: string;
  };
  BillPayment: {
    Billpay: string;
  };
  WebhookNotifications: {
    Webhook: string;
  };
  KeyFeatures: string[];
}
interface BBPSonlineinterface extends Section {
  id?: number;
}

interface payoutapiinterface extends Section {
  id: number;
  intro: introinterface;
  Authentication: authenticationinterface;
  BankandifscInfo: BankandifscInfo;
  RemitterManagement: RemitterManag;
  BenificiaryManagement: BenificiaryManagement;
  TransactionProcessing: TransactionProcessing;
  WebhookNotifications: WebHook;
  keyBenifits: string[];
}

export interface Infointerface {
  payoutapi: payoutapiinterface;
  BBPSAPI: BBPSAPIinterface;
  MobileRechargeAPI: MobileRechargeapi;
  DTHAPI: DTHRechargeinterface;
  bbpsonline: BBPSonlineinterface;
}

// ******************************** MainPage ***************************************
//You can see ? this every where, some data have key , some have not thats why i used the optional like optional channing

interface CommonSectionResponse {
  responseCode?: number | any;
  responseMessage?: string;
  TransactionMode?: any;
  data?: string | null;
  responseData?: boolean | string | null | any;
  signalR?: boolean | null;
}

interface CommonSection {
  title?: string;
}



interface ResponseInterface {
  success:  ResponseDataInterface[];
  error?:  ResponseDataInterface[];
}

export interface ResponseDataInterface {
  id: number;
  info?: string;
  code : CommonSectionResponse;
}



interface EndpointInterface extends CommonSection {
  // Page data interface
  id?: number;
  topText?: string;
  post?: string | Record<string, unknown>; //only accepts object, string
  request?: string | object;
  response?: ResponseInterface;
  note?: any;
  table?: any;
  info?: [];
}

interface BaseUrlsInterface {
  // This page wise BaseUrl and Auth.
  link: string;
  auth: string;
}

export interface MainInterface extends CommonSection {
  // This is the all page interface
  BaseUrls: BaseUrlsInterface;
  Endpoints: EndpointInterface[];
  note: string;
}
