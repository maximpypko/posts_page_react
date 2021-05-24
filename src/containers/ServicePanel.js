import {forwardRef} from 'react';
import Form from "../components/Form";
import Order from "../components/Order";
import Quantity from "../components/Quantity";
import View from "../components/View";

const ServicePanel = forwardRef((props, ref) => {
 
  const {setInputValue,
    timeRequest,
    setTimeRequest,
    setIdentifier,
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
        setIdentifier={setIdentifier}
        ref={ref}
      />
      <Order setOrder={setOrder}
      />
      <Quantity
        setAmountPosts={setAmountPosts}
        setCurrentPage={setCurrentPage}
      />
      <View
        view={view}
        setView={setView}
      />
    </div>    
  );
})

export default ServicePanel;