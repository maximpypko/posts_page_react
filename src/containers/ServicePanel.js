import Form from "../components/Form";
import Order from "../components/Order";
import Quantity from "../components/Quantity";
import View from "../components/View";

const ServicePanel = () => {

  return (
    <div className="uk-section">
      <div className="uk-container">
        <div className="uk-margin-medium-bottom uk-flex">
          <Form/>
          <Order/>
          <Quantity/>
          <View/>
        </div>
      </div>
    </div> 
  );
}

export default ServicePanel;