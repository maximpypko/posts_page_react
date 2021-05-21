import Form from "../components/Form";
import Order from "../components/Order";
import Quantity from "../components/Quantity";
import View from "../components/View";

export default function ServicePanel({
  setInputValue,
  timeRequest,
  setTimeRequest,
  setPassword,
  setActiveQuantity,
  setOrder,
  setAmountPosts,
  setCurrentPage,
  activeQuantity,
  view,
  setView,
  switchView,
  setSwitchView
}) {
  
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <Form
        setInputValue={setInputValue}
        timeRequest={timeRequest}
        setTimeRequest={setTimeRequest}
        setPassword={setPassword}
        setActiveQuantity={setActiveQuantity}
        setSwitchView={setSwitchView}/>
      <Order
        setOrder={setOrder}
        setPassword={setPassword}
        switchView={switchView}
      />
      <Quantity
        setAmountPosts={setAmountPosts}
        setCurrentPage={setCurrentPage}
        setPassword={setPassword}
        activeQuantity={activeQuantity}/>
      <View
        view={view}
        setView={setView}
        switchView={switchView}
      />
    </div>    
  );
}
