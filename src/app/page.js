import styles from './page.module.css'

import Banner from "@/shared/components/HomePageCompnents/1.Banner/Banner";
import BenefitsBlock from "@/shared/components/HomePageCompnents/6.BenefitsBlock/BenefitsBlock";
import OverallBlock from "@/shared/components/HomePageCompnents/7.OverallBlock/OverallBlock";
import BusinessCaseBlock from "@/shared/components/HomePageCompnents/2.BusinessCaseBlock/BusinessCaseBlock";
import ProblemsBlock from "@/shared/components/HomePageCompnents/3.ProblemsBlock/ProblemsBlock";
import WhatWeDoBlock from "@/shared/components/HomePageCompnents/4.WhatWeDoBlock/WhatWeDoBlock";
import KeyFunctionBlock from "@/shared/components/HomePageCompnents/5.KeyFunctionBlock/KeyFunctionBlock";


export default function Home() {
  return (
  <main className={styles.container}>
    <Banner/>
    <BusinessCaseBlock/>
    <ProblemsBlock/>
    <WhatWeDoBlock/>
    <KeyFunctionBlock/>
    <BenefitsBlock/>
    <OverallBlock/>
  </main>
  );
}
