import React from "react";

export default class SubMenu extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div className="submenu">
          <div className="submenu-item submenu-clothing-shoes">
            Clothing Shoes
            <div className="submenu-item-icon submenu-icon-clothing">
              <i className="fas fa-tshirt" />
            </div>
          </div>
          <div className="submenu-item submenu-musics">
            Musics
            <div className="submenu-item-icon submenu-icon-musics">
              <i className="fas fa-music" />
            </div>
          </div>
          <div className="submenu-item submenu-sports">
            Sports
            <div className="submenu-item-icon submenu-icon-sports">
              <i className="fas fa-futbol"></i>
            </div>
          </div>
          <div className="submenu-item submenu-pets">
            Pets
            <div className="submenu-item-icon submenu-icon-pets">
              <i className="fas fa-bone"></i>
            </div>
          </div>
          <div className="submenu-item submenu-acessories">
            Acessories
            <div className="submenu-item-icon submenu-icon-acessories">
              <i className="fas fa-cut"></i>
            </div>
          </div>
          <div className="submenu-item submenu-equipment">
            Equipment
            <div className="submenu-item-icon submenu-icon-equipment">
              <i className="fas fa-binoculars"></i>
            </div>
          </div>
          <div className="submenu-item submenu-garden">
            Garden
            <div className="submenu-item-icon submenu-icon-garden">
              <i className="fas fa-leaf"></i>
            </div>
          </div>
          <div className="submenu-item submenu-electrical">
            Electrical
            <div className="submenu-item-icon submenu-icon-eletrical">
              <i className="fas fa-bolt"></i>
            </div>
          </div>
          <div className="submenu-item submenu-toys">
            Toys
            <div className="submenu-item-icon submenu-icon-toys">
              <i className="fas fa-gamepad"></i>
            </div>
          </div>
          <div className="submenu-item submenu-vintage">
            Vintage
            <div className="submenu-item-icon submenu-icon-vintage">
              <i className="fas fa-compact-disc"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
