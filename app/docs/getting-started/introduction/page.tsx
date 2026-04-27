import FlowInegartion from "../../../../components/common-components/FlowInegartion";
import { LuWaypoints } from "react-icons/lu";
export default function IntroductionPage() {
  return (
    <div className="max-w-7xl p-4 mx-auto mt-12   py-5 bg-white">
      {/* Page Header */}
      <div className="mb-10 border-b pb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Introduction
        </h1>

        <p className="text-gray-600 text-md leading-relaxed max-w-3xl">
          Welcome to the{" "}
          <span className="font-semibold text-gray-900">
            Soliteck API documentation
          </span>
          . Our APIs allow developers to integrate secure digital payments,
          payouts, recharge services, and financial operations into their
          applications quickly and reliably.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* What you can build */}
        <section>
          <h2 className="text-2xl flex gap-2 items-center font-semibold text-gray-900 mb-3">
            What You Can Build
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Using Soliteck APIs, developers can integrate payment gateways,
            payout systems, mobile recharge services, DTH services, and bill
            payment solutions directly into their platforms. Our APIs are
            designed for reliability, security, and high performance.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div className="flex gap-3">
              <span className="text-blue-600">
                <LuWaypoints />
              </span>
              Secure payment gateway APIs
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600">
                <LuWaypoints />
              </span>
              Instant payout APIs
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600">
                <LuWaypoints />
              </span>
              Recharge and bill payment APIs
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600">
                <LuWaypoints />
              </span>
              Webhook event notifications
            </div>

            <div className="flex gap-3">
              <span className="text-blue-600">
                <LuWaypoints />
              </span>
              Real-time transaction status tracking
            </div>
          </div>
        </section>
        <FlowInegartion />
      </div>
    </div>
  );
}
