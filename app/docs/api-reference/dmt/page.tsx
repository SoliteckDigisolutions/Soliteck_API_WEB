import MainPage from "@/components/common-components/MainPage";
import { dmtDocs } from "@/app/docs/api-reference/dmt/dmtDocs";

export default function Page() {
    return <MainPage data={dmtDocs} />;
}
