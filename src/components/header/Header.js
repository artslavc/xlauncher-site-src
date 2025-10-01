import React, { Component } from "react";
import "./style.css";
import xlauncher_logo from "../../img/X.png";
import vk_logo from "../../img/VK_logo.webp";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img id="xlauncher_img" src={xlauncher_logo} alt="XLauncher Logo" />
          <h1>XLauncher</h1>
          {/* Navbar */}
          <nav>
            <div className="header_text-buttons">
              <a href="#ul_scroll" rel="noreferrer" className="btn">
                Особенности
              </a>
              <a href="#footer" className="btn">
                Контакты
              </a>
            </div>
          </nav>
          <a href="https://vk.com" rel="noreferrer" target="_blank">
            <img id="vk_img" src={vk_logo} alt="VK Logo" />
          </a>
          <button><p>Скачать Лаунчер</p></button>
        </div>
      </header>
    );
  }
}

export default Header;
