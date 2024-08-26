import Banner from "@/shared/components/HomePageCompnents/Banner/Banner";
import FirstBlock from "@/shared/components/HomePageCompnents/FirstBlock/FirstBlock";
import SecondBlock from "@/shared/components/HomePageCompnents/SecondBlock/SecondBlock";
import ThirdBlock from "@/shared/components/HomePageCompnents/ThirdBlock/ThirdBlock";
import FourthBlock from "@/shared/components/HomePageCompnents/FourthBlock/FourthBlock";
import FifthBlock from "@/shared/components/HomePageCompnents/FifthBlock/FifthBlock";
import SixthBlock from "@/shared/components/HomePageCompnents/SixthBlock/SixthBlock";


export default function Home({data}) {
  return (
  <main style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Banner/>
    <FirstBlock/>
    <SecondBlock/>
    <ThirdBlock/>
    <FourthBlock/>
    <FifthBlock/>
    <SixthBlock/>
  </main>
  );
}
