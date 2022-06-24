import React from "react";
import "./App.css";
import Title from "./assent/RC.svg";
import Cake from "./assent/cake.png";
import Pizza from "./assent/pizza.png";
import Batido from "./assent/peanut banana.png";
import Colher from "./assent/img about.png";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  border:0;
  background-color: white;
}
`;
export default class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <GlobalStyle />
          <img src={Title} alt="" />
          <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ul>
          <h1 className="Titulo">RECIPES</h1>
        </header>
        <main>
          <h2>LATEST RECIPES</h2>
          <div className="linha"></div>
          <section className="recipes">
            <div className="box-mom">
              <img src={Cake} alt="" />
              <div className="box-son">
                <div className="line"></div>
                <h3>Red Velvet Cake</h3>
              </div>
            </div>
            <div className="box-mom">
              <img src={Pizza} alt="" />
              <div className="box-son">
                <div className="line"></div>
                <h3>Margherita Pizza</h3>
              </div>
            </div>
            <div className="box-mom">
              <img src={Batido} alt="" />
              <div className="box-son">
                <div className="line"></div>
                <h3>Peanut Smoothie</h3>
              </div>
            </div>
          </section>
          <section className="info">
            <img src={Colher} alt="" />
            <div className="sobre">
              <h2 className="subt">ABOUT</h2>
              <div className="subline"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
                tincidunt libero velit sit amet velit. Nunc in euismod urna.
                Duis dapibus, elit eu eleifend tincidunt, nulla ipsum
                consectetur lorem, quis tempor lorem justo quis nisi. Nam
                interdum, nisi nec mollis sagittis, enim risus euismod nisi,
                quis rutrum quam augue id mauris. Pellentesque mattis hendrerit
                semper. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et
                ultricies sapien facilisis.
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}
