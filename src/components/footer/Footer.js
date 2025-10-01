import React, { Component } from "react";
import "./style.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container" id="footer">
          <p>
            © 2025 XLauncher. Все права защищены. Minecraft, <br />
            логотип Minecraft и все связанные с ним элементы являются товарными{" "}
            <br />
            знаками Mojang AB. Данный проект не одобрен и не спонсируется Mojang
            AB.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
