
export const stats = [
    { value: "209K+", label: "Happy Clients", color: "text-blue-600" },
    { value: "99.9%", label: "Uptime SLA", color: "text-emerald-600" },
    { value: "100K+", label: "Daily Transactions", color: "text-violet-600" },
    { value: "<200ms", label: "Avg. Response Time", color: "text-orange-500" },
];

export const processFlow = [
    {
        step: "01",
        title: "Get Endpoint",
        desc: "Obtain the API endpoint from the documentation.",
    },
    {
        step: "02",
        title: "Authenticate",
        desc: "Send API key or credentials in request headers.",
    },
    {
        step: "03",
        title: "Authorize",
        desc: "Server validates the authentication credentials.",
    },
    {
        step: "04",
        title: "Generate Token",
        desc: "A token is generated which is valid for 20 minutes.",
    },
    {
        step: "05",
        title: "Make Request",
        desc: "Use the token to access protected APIs.",
    },
    {
        step: "06",
        title: "Receive Response",
        desc: "Server processes request and returns JSON response.",
    },
];

export const categories = [
    "Payout API",
    "Mobile API",
    "DTH API",
    "Payment Gateway API",
    "FASTag API",
    "BBPS API",
    "CC Bill Payment API",
    "AEPS API",
];



export interface MenuItem {
    name: string;
    href?: string;
    serviceID?: number | string;
    children?: MenuItem[];
}

export interface SidebarSection {
    title: string;
    items: MenuItem[];
}

export const sidebarMenu: SidebarSection[] = [
    {
        title: "Getting Started",
        items: [
            { name: "Introduction", href: "/docs/getting-started/introduction" },
            { name: "Error Codes", href: "/docs/getting-started/errorcodes" },
            {
                name: "Global API Process",
                href: "#",
                children: [
                    {
                        name: "Integration Process",
                        href: "/docs/getting-started/process",
                    },
                    {
                        name: "Authentication",
                        href: "/docs/getting-started/authentication",
                    },
                    // { name: "Generate Token", href: "/docs/getting-started/tokengen" },
                ],
            },
        ],
    },
    {
        title: "API Reference",
        items: [
            {
                name: "Payout API",
                href: "/docs/api-reference/payoutapi",
                serviceID: 47,
            },
            {
                name: "Mobile Recharge API",
                href: "/docs/api-reference/mobileapi",
                serviceID: 43,
            },
            {
                name: "DTH API",
                href: "/docs/api-reference/dthRecharge",
                serviceID: 45,
            },
            {
                name: "BBPS-API Offline",
                href: "/docs/api-reference/bbpsapi",
                serviceID: 63,
            },
            {
                name: "BBPS API Online",
                href: "/docs/api-reference/bbpsapionline",
                serviceID: 44,
            },
            {
                name: "CC BP API",
                href: "/docs/api-reference/ccbpapi",
                serviceID: 59,
            },
            {
                name: "PG API",
                href: "/docs/api-reference/pgapi",
                serviceID: 54,
            },
            { name: "AEPS", href: "/docs/api-reference/aepsapi", serviceID: "AEPS" },
        ],
    },
    {
        title: "Webhooks",
        items: [{ name: "Webhook Events", href: "/docs/webhooks" }],
    },
];



export const httpErrors = [
    {
      code: "400",
      title: "Bad Request",
      desc: "Your request parameters are incorrect.",
    },
    {
      code: "401",
      title: "Unauthorized",
      desc: "Your API key is wrong or missing.",
    },
    {
      code: "403",
      title: "Forbidden",
      desc: "The requested resource is hidden for administrators only.",
    },
    {
      code: "404",
      title: "Not Found",
      desc: "The specified resource could not be found.",
    },
    {
      code: "405",
      title: "Method Not Allowed",
      desc: "You tried to access a resource with an invalid method.",
    },
    {
      code: "406",
      title: "Not Acceptable",
      desc: "You requested a format that isn’t json.",
    },
    {
      code: "410",
      title: "Gone",
      desc: "The resource requested has been removed from our servers.",
    },
    {
      code: "429",
      title: "Too Many Requests",
      desc: "You’re requesting too many resources! Slow down!",
    },
    {
      code: "500",
      title: "Internal Server Error",
      desc: "We had a problem with our server.",
    },
    {
      code: "503",
      title: "Service Unavailable",
      desc: "Server temporarily offline for maintenance.",
    },
  ];

  export const apiErrors = [
    { code: "UDAPI10000", desc: "This request is not supported by API." },
    { code: "UDAPI100016", desc: "Invalid Credentials." },
    { code: "UDAPI10005", desc: "Too many requests sent." },
    { code: "UDAPI100015", desc: "API Version does not exist." },
    { code: "UDAPI100050", desc: "Invalid token used to access API." },
    { code: "UDAPI100067", desc: "API not permitted with extended_token." },
    { code: "UDAPI100036", desc: "Invalid input passed to the API." },
    { code: "UDAPI100038", desc: "Invalid input passed to the API." },
    { code: "UDAPI100073", desc: "Client ID is inactive." },
    { code: "UDAPI100500", desc: "Unexpected server error. Contact support." },
  ];


  
export const categorieses = [
  {
    label: "Payout API",
    href: "",
    color: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
  {
    label: "Mobile Recharge API",
    href: "",
    color: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-500",
  },
  {
    label: "DTH API",
    href: "",
    color: "bg-orange-50 text-orange-700 border-orange-200",
    dot: "bg-orange-400",
  },
  {
    label: "Payment Gateway API",
    href: "",
    color: "bg-green-50 text-green-700 border-green-200",
    dot: "bg-green-500",
  },
  {
    label: "BBPS API",
    href: "",
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    dot: "bg-yellow-500",
  },
  {
    label: "CC Bill Payment API",
    href: "",
    color: "bg-rose-50 text-rose-700 border-rose-200",
    dot: "bg-rose-500",
  },
  {
    label: "AEPS API",
    href: "",
    color: "bg-teal-50 text-teal-700 border-teal-200",
    dot: "bg-teal-500",
  },
];
