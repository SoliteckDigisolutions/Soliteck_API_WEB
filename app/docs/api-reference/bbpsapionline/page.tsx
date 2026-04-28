import MainPage from "@/components/common-components/MainPage";
import { bbpsonline } from "@/app/docs/api-reference/bbpsapionline/bbpsonline";

export default function Page() {
    return <MainPage data={bbpsonline} />;
}
