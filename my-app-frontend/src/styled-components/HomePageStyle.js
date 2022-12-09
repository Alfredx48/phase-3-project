import { createGlobalStyle } from "styled-components";

const HomePageStyle = createGlobalStyle`

body {
  background-image
  :url("https://i.imgur.com/PZs6w22.jpg");
  background-position: center;
  background-size: cover;
  font-family: Kenia;
  /* background: #778C97; */
  background-repeat: no-repeat;
  background-position: center top;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  color: black;
  text-align: center;
}

button {
  font-family: Playfair Display;
  cursor: pointer;

  font-size: 18px;
  padding: 1px;
  border: none;
  top: 50%;
  width: 160px;
  height: 25px;
  margin: 0 auto;
  /* border-radius: 5px; */
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
}

button:hover {
  background-color: papayawhip;
}
h1{
  font-size: 60px;
  font-weight: 700;
  font-family: Playball;
}
.link {
  background-color: rgba(214, 214, 214, 0.5);
  font-family: Zen Dots;
  display: inline-block;
  padding: 12px;
  margin: 0 6px 6px;
  text-decoration: none;
  color: black;
  border-radius: 10px;
}
`;

export default HomePageStyle;
