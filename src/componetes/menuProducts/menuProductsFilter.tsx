import classNames from "classnames";
import React from "react";

interface ISubMenuItemProps {
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: string;
}

export default class MenuProductsFilter extends React.Component<
  ISubMenuItemProps,
  {}
> {
  render() {
    return (
      <div
        className={classNames("menuproducts-wrapper", {
          active: this.props.active,
        })}
      >
        <div onClick={this.props.onClick} className={"menuproducts-item"}>
          <div style={{}} className="menuproducts-text">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}
