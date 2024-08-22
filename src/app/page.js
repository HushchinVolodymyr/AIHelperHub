import Banner from "@/shared/components/Banner/Banner";
import FirstBlock from "@/shared/components/FirstBlock/FirstBlock";
import SecondBlock from "@/shared/components/SecondBlock/SecondBlock";
import ThirdBlock from "@/shared/components/ThirdBlock/ThirdBlock";
import FourthBlock from "@/shared/components/FourthBlock/FourthBlock";
import FifthBlock from "@/shared/components/FifthBlock/FifthBlock";

export default function Home() {
  return (
  <main style={{ width: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Banner/>
    <FirstBlock/>
    <SecondBlock/>
    <ThirdBlock/>
    <FourthBlock/>
    <FifthBlock/>
  </main>
  );
}
