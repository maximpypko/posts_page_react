import Form from "../components/InputServicePanel";
import Order from "../components/Order";
import NumberOfVisibleElements from "../components/NumberOfVisibleElements";
import PageViewSwitch from "../components/PageViewSwitch";

const ServicePanel = () => {

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-margin-medium-bottom uk-flex">
          <Form/>
          <Order/>
          <NumberOfVisibleElements/>
          <PageViewSwitch/>
        </div>
      </div>
    </div> 
  );
}

export default ServicePanel;