import classNames from "classnames";
import React from "react";

interface IMenuFormFilterProps {
  title: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: string;
}

export default class MenuFormFilter extends React.Component<
  IMenuFormFilterProps,
  {}
> {
  render() {
    return (
      <div
        className={classNames("menuform-wrapper", {
          active: this.props.active,
        })}
      >
        <div onClick={this.props.onClick} className={"menuform-item"}>
          <div style={{}} className="menuform-text">
            {this.props.title}
          </div>
        </div>
      </div>
    );
  }
}
