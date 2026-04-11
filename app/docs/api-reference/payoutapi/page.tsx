import MainPage from "@/app/components/mainPageComp/MainPage";
import { Globalintroinfo } from "@/app/constants/GlobalApiInfo";
import { payoutDocs } from "@/app/constants/payOut";


export default function Page() {
  return (
    <MainPage
      data={payoutDocs}
     
      
    />
  );
}
