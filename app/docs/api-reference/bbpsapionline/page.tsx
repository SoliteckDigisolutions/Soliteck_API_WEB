import MainPage from "@/app/components/mainPageComp/MainPage";
import { bbpsonline } from "@/app/constants/bbpsonline";
import { Globalintroinfo } from "@/app/constants/GlobalApiInfo";


export default function Page() {
  return (
    <MainPage
      title={bbpsonline.title}
      link = {bbpsonline.BaseUrls.link}
      auth = {bbpsonline.BaseUrls.auth}
      info = {Globalintroinfo.bbpsonline}
      endpoints={bbpsonline.Endpoints}
    />
  );
}