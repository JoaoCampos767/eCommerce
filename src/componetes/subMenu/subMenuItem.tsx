import classNames from "classnames";
import React from "react";

interface ISubMenuItemProps {
  icon?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  title: string;
  style?: string;
}

export default class SubMenuItem extends React.Component<
  ISubMenuItemProps,
  {}
> {
  render() {
    return (
      <div
        className={classNames("submenu-wrapper", {
          active: this.props.active,
        })}
        // style ={this.props.style}
      >
        <div onClick={this.props.onClick} className={"submenu-item"}>
          <div className="submenu-item-icon">
            <i className={"fas fa-" + this.props.icon}></i>
          </div>
          <div style={{}} className="submenu-item-text">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}
