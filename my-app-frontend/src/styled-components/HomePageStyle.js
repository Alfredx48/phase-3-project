import { createGlobalStyle } from "styled-components"

const HomePageStyle = createGlobalStyle`

body {
  background: #778C97;
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

.reviews {
  background-color: rgba(100, 149, 237, .5);
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid black;

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

.link {
  display: inline-block;
  padding: 12px;
  margin: 0 6px 6px;
  font-size: 25px;
  text-decoration: none;
  color: black;
  border-radius: 10px;
}
`

export default HomePageStyle