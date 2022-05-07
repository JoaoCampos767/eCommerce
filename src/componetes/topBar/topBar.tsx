// import classNames from "classnames";
import React from "react";
import IconInput from "../iconInput/iconInput";

export default class TopBar extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div className="topbar-content">
          <div className="topbar-left">
            <div className="topbar-logo">
              <i className="fas fa-home"></i>
            </div>
            <div className="topbar-sell">Sell here</div>
            <div className="topbar-register">Register</div>
          </div>
          <div className="topbar-center">
            <div className="topbar-search">
              <IconInput value={this.props.value} />
            </div>
            <div className="topbar-custumer">Consumer Eletronics</div>
          </div>
          <div className="topbar-right">
            <div className="topbar-singin">Sing In</div>
            <div className="topbar-cart">My cart</div>
            <div className="topbar-icon">
              <img src="https://picsum.photos/200/300" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
