import React from "react";

export default class SubMenu extends React.Component<any, {}> {
  render() {
    return (
      <>
        <div className="submenu">
          <div className="submenu-clothing-shoes">
            Clothing Shoes
            <div className="submenu-icon-clothing">
              <i className="fas fa-tshirt" />
            </div>
          </div>
          <div className="submenu-musics">
            Musics
            <div className="submenu-icon-musics">
              <i className="fas fa-music" />
            </div>
          </div>
          <div className="submenu-sports">
            Sports
            <div className="submenu-icon-sports">
              <i className="fas fa-futbol"></i>
            </div>
          </div>
          <div className="submenu-pets">
            Pets
            <div className="submenu-icon-pets">
              <i className="fas fa-bone"></i>
            </div>
          </div>
          <div className="submenu-acessories">
            Acessories
            <div className="submenu-icon-acessories">
              <i className="fas fa-cut"></i>
            </div>
          </div>
          <div className="submenu-equipment">
            Equipment
            <div className="submenu-icon-equipment">
              <i className="fas fa-binoculars"></i>
            </div>
          </div>
          <div className="submenu-garden">
            Garden
            <div className="submenu-icon-garden">
              <i className="fas fa-leaf"></i>
            </div>
          </div>
          <div className="submenu-electrical">
            Electrical
            <div className="submenu-icon-eletrical">
              <i className="fas fa-bolt"></i>
            </div>
          </div>
          <div className="submenu-toys">
            Toys
            <div className="submenu-icon-toys">
              <i className="fas fa-gamepad"></i>
            </div>
          </div>
          <div className="submenu-vintage">
            Vintage
            <div className="submenu-icon-vintage">
              <i className="fas fa-compact-disc"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
