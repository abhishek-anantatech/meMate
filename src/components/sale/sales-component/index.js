import "./style.css";
const SalesComponent = () => {
  return (
    <div className="sales-component-wrapper">
      <h1 className="sales-heading">sales</h1>

      <div className="sales-componet-content-wrapper">
        <p>Sales funnels</p>
        <div className="sales-component-content">
          <span>
            Our software provides a sales pipeline, simple and easy to use for
            small businesses. You can<br></br> see all your active quotes and
            prospects in one organised place.
          </span>
        </div>

        <div className="sales-component-button-wrapper">
            <button>Book a demo</button>
        </div>  
      </div>
    </div>
  );
};

export default SalesComponent;
