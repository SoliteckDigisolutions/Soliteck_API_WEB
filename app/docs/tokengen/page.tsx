import BaseUrls from "@/app/components/BaseUrl";
import { RiTokenSwapLine } from "react-icons/ri";

export default function page() {
  return (
    <div className="mt-16 p-2">
      {/* GENERATE TOKEN */}
      <section id="generate-token  ">
        <BaseUrls />
        <h2 className="flex items-center gap-2 text-xl font-light mb-3">
          <RiTokenSwapLine /> Generate Token
        </h2>

        <div className="bg-gray-100 p-3 rounded-md w-80 font-sans text-sm">
          POST /GenerateUATToken
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Token valid for <strong>20 minutes</strong>
        </p>
      </section>
    </div>
  );
}
