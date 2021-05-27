import Dropdown from "./Dropdown";

function ButtonLike () {

    return (
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <button
            className="uk-button z"
            type="button"
            uk-icon="icon: heart; ratio: 2"
          ></button>
          <Dropdown/>
        </div>
      </div>
    );
}

export default ButtonLike;