import React from "react";
import SubMenuItem from "./subMenuItem";

let a = false;

export default class SubMenu extends React.Component<any, {}> {
  public state = {
    activeItem: 0 as any,
  };

  render() {
    let menus = [
      { icon: "tshirt", title: "Clothing Shoes" },
      { icon: "music", title: "Musics" },
      { icon: "futbol", title: "Sports" },
      { icon: "bone", title: "Pets" },
      { icon: "cut", title: "Acessories" },
      { icon: "binoculars", title: "Equipment" },
      { icon: "leaf", title: "Garden" },
      { icon: "bolt", title: "Electrical" },
      { icon: "gamepad", title: "Toys" },
      { icon: "compact-disc", title: "Vintage" },
    ];

    return (
      <>
        <div className="submenu">
          <div className="submenu-list">
            {menus.map((item, index) => {
              return (
                <SubMenuItem
                  title={item.title}
                  key={index}
                  // style={}
                  onClick={() => {
                    this.setState({ activeItem: index });
                    console.log(a === true ? "true" : "false");
                    a = !a;
                  }}
                  active={this.state.activeItem === index}
                  icon={item.icon}
                />
              );
            })}
            {/* minWidth: 100 / (menus.length + 2)  + "%" */}
          </div>
        </div>
      </>
    );
  }
}
