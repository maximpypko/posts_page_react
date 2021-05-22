import {forwardRef} from 'react';
import Form from "../components/Form";
import Order from "../components/Order";
import Quantity from "../components/Quantity";
import View from "../components/View";

const ServicePanel = forwardRef((props, ref) => {
 
  const {setInputValue,
    timeRequest,
    setTimeRequest,
    setPassword,
    setOrder,
    setAmountPosts,
    setCurrentPage,
    view,
    setView} = props;
   
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Form
        setInputValue={setInputValue}
        timeRequest={timeRequest}
        setTimeRequest={setTimeRequest}
        setPassword={setPassword}
        ref={ref}
      />
      <Order
        setOrder={setOrder}
        setPassword={setPassword}
      />
      <Quantity
        setAmountPosts={setAmountPosts}
        setCurrentPage={setCurrentPage}
        setPassword={setPassword}
      />
      <View
        view={view}
        setView={setView}
      />
    </div>    
  );
})

export default ServicePanel;