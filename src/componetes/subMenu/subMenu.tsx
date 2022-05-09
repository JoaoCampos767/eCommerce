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
          <div className="submenu-musics">Musics</div>
          <div className="submenu-sports">Sports</div>
          <div className="submenu-pets">Pets</div>
          <div className="submenu-acessories">Acessories</div>
          <div className="submenu-equipment">Equipment</div>
          <div className="submenu-garden">Garden</div>
          <div className="submenu-electrical">Electrical</div>
          <div className="submenu-toys">Toys</div>
          <div className="submenu-vintage">Vintage</div>
        </div>
      </>
    );
  }
}
