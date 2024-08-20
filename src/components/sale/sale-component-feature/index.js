import CRMSalesTool from './crm-sales-tool';
import PipeLineTool from './pipeline-tool';
import SalesManagement from './sales-management';
import './style.css';
const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapper'>
      <div className='sales-component-feature'>
        <h2>Memate</h2>
        <h1>features</h1>
       
      </div>
      <div className="sales-feature-wrapper">
         <SalesManagement/>
          <CRMSalesTool/>
          <PipeLineTool/>
        </div>
    </div>
  )
}

export default SalesComponentFeature;
