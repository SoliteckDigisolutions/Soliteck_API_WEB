export default function CodeSection() {
  return (
    <div className="flex flex-col gap-4 p-2">

      <div className="flex flex-col gap-6">

        {/* 1 Install SDK */}
        <div className="w-full rounded-md overflow-hidden border border-gray-700 bg-[#1e1e1e]">
          <div className="px-4 py-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Install Soliteck  SDK
          </div>

          <pre className="p-4 text-sm text-gray-200 font-mono">
{`npm install @arpay/sdk`}
          </pre>
        </div>


        {/* 2 Authentication */}
        <div className="w-full rounded-md overflow-hidden border border-gray-700 bg-[#1e1e1e]">
          <div className="px-4 py-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Authentication Header
          </div>

          <pre className="p-4 text-sm text-gray-200 font-mono">
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
          </pre>
        </div>


        {/* 3 Create Payment */}
        <div className="w-full rounded-md overflow-hidden border border-gray-700 bg-[#1e1e1e]">
          <div className="px-4 py-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Create Payment
          </div>

          <pre className="p-4 text-sm text-gray-200 font-mono">
{`POST https://api.arpay.com/v1/payments

{
  "amount": 500,
  "currency": "USD",
  "customer_email": "customer@email.com",
  "description": "Payment for Order #1023"
}`}
          </pre>
        </div>


        {/* 4 Success Response */}
        <div className="w-full rounded-md overflow-hidden border border-gray-700 bg-[#1e1e1e]">
          <div className="px-4 py-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Success Response
          </div>

          <pre className="p-4 text-sm text-gray-200 font-mono">
{`{
  "id": "pay_9827349827",
  "status": "succeeded",
  "amount": 500,
  "currency": "USD",
  "created_at": "2026-03-31T10:15:00Z"
}`}
          </pre>
        </div>


        {/* 5 Error Response */}
        <div className="w-full rounded-md overflow-hidden border border-gray-700 bg-[#1e1e1e]">
          <div className="px-4 py-2 bg-[#2d2d2d] text-gray-400 text-sm">
            Error Response
          </div>

          <pre className="p-4 text-sm text-gray-200 font-mono">
{`{
  "error": {
    "code": "invalid_api_key",
    "message": "The API key provided is invalid."
  }
}`}
          </pre>
        </div>

      </div>

    </div>
  );
}