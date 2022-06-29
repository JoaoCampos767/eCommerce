import classNames from "classnames";
import React from "react";

interface IMenuFormShowProps {
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: string;
}

export default class MenuFormShow extends React.Component<
  IMenuFormShowProps,
  {}
> {
  render() {
    return (
      <div
        className={classNames("menuform-wrapper-show", {
          active: this.props.active,
        })}
      >
        <div onClick={this.props.onClick} className={"menuform-item-show"}>
          <div style={{}} className="menuform-text-show">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}
