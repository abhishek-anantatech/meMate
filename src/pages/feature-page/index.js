import Layout from "../../layout";
import {
  QuestionAnswer,
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment
} from "../../components/sale";
import NextStep from "../../components/next-step";
const FeaturePage = () => {
  return (
    <Layout>
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
      <QuestionAnswer />
      <NextStep text="Book a demo"/>
    </Layout>
  );
};

export default FeaturePage;
