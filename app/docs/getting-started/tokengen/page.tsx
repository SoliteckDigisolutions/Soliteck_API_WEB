import BaseUrls from "@/components/common-components/BaseUrl";
import { RiTokenSwapLine } from "react-icons/ri";

export default function page() {
  return (
    <div className="mt-16 p-2">
      {/* GENERATE TOKEN */}
      <section id="generate-token  ">
        <BaseUrls />
        <h2 className="flex items-center gap-2 text-xl font-light mb-3 text-foreground">
          <RiTokenSwapLine className="text-primary" /> Generate Token
        </h2>

        <div className="bg-muted p-3 rounded-md w-80 font-mono text-sm text-foreground border border-border">
          POST /GenerateUATToken
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Token valid for <strong className="text-foreground">20 minutes</strong>
        </p>
      </section>
    </div>
  );
}
