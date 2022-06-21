import React from "react";
import MenuProductsFilter from "./menuProductsFilter";

let a = false;

export default class MenuProducts extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };

  render() {
    let menuFilter = [
      { title: "Useless first" },
      { title: "Condition" },
      { title: "Delivery" },
    ];

    return (
      <>
        <div className="menuproducts">
          <div className="menuproducts-filter">
            <div className="menuproducts-filter-first">
              {menuFilter.map((item, index) => {
                return (
                  <MenuProductsFilter
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
          <div className="menuproducts-show"></div>
          <div className="menuproducts-list"></div>
        </div>
      </>
    );
  }
}
