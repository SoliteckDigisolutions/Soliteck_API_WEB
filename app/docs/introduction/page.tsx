import BaseUrls from "@/app/components/BaseUrl";
import FlowInegartion from "../../components/FlowInegartion";
import { LuWaypoints } from "react-icons/lu";
import { IoBuildOutline } from "react-icons/io5";
export default function IntroductionPage() {
  // const stats = [
  //   { title: "API Endpoints", value: "35+" },
  //   { title: "Supported Services", value: "8+" },
  //   { title: "Daily Transactions", value: "1M+" },
  //   { title: "Uptime", value: "99.99%" },
  // ];

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6 py-10 bg-white">
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

      {/* Statistics
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="border rounded-xl p-6 bg-gray-50 hover:shadow-md transition"
          >
            <p className="text-3xl font-bold text-blue-600 mb-1">
              {stat.value}
            </p>

            <p className="text-sm text-gray-500">
              {stat.title}
            </p>
          </div>
        ))}
      </div> */}

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

        {/* Base URL */}
        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Base API URL
          </h2>

          <div className="bg-gray-900 text-green-400 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            https://api.soliteck.com/v1
          </div>

          <p className="text-sm text-gray-500 mt-2">
            All API requests should be made to this base URL.
          </p>

          <div className="mt-6">
            <BaseUrls />
          </div>
        </section> */}
      </div>
    </div>
  );
}
