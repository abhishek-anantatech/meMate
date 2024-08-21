import Layout from "../../layout";
import {
  SalesComponent,
  SalesComponentFeature,
  SmartInvestment,
} from "../../components/sale";

const FeaturePage = () => {
  return (
    <Layout>
      <SalesComponent />
      <SalesComponentFeature />
      <SmartInvestment />
    </Layout>
  );
};

export default FeaturePage;
