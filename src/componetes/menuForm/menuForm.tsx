import React from "react";
import MenuFormFilter from "./menuFormFilter";
import MenuFormShow from "./menuFormShow";

let a = false;

export default class MenuForm extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };

  render() {
    let menuFilter = [
      { title: "Useless first" },
      { title: "Condition" },
      { title: "Delivery" },
    ];

    let menuShow = [
      { title: "Useless first" },
      { title: "Condition" },
      { title: "Delivery" },
    ];

    return (
      <>
        <div className="menuform">
          <div className="menuform-filter">
            <div className="menuform-filter-first">
              {menuFilter.map((item, index) => {
                return (
                  <MenuFormFilter
                    title={item.title}
                    key={index}
                    onClick={() => {
                      this.setState({ activeItem: index });
                      console.log(a === true ? "true" : "false");
                      a = !a;
                    }}
                    active={this.state.activeItem === index}
                  />
                );
              })}
            </div>
          </div>

          <div className="menuform-show">
            <div className="menuform-filter-second">
              {menuShow.map((item, index) => {
                return (
                  <MenuFormShow
                    title={item.title}
                    key={index}
                    onClick={() => {
                      this.setState({ activeItem: index });
                      console.log(a === true ? "true" : "false");
                      a = !a;
                    }}
                    active={this.state.activeItem === index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
