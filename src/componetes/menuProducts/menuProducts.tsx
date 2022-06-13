import React from "react";

let a = false;

export default class MenuProducts extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };

  render() {
    let menus = [];

    return (
      <>
        <div className="menuproducts">
          <div className="menuproducts-filter">Ola</div>
          <div className="menuproducts-list"></div>
        </div>
      </>
    );
  }
}
