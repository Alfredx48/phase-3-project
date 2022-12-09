import { createGlobalStyle } from "styled-components"

const BestBooksStyle = createGlobalStyle`

body {
  font-family: Zen Dots;
  background: tomato;
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
  background-color: rgb(250, 250, 210);
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid black;

}

img {
  height: 300px;
  width: 225px;
  margin: 0 auto;
}

button {
  cursor: pointer;
  padding: 8px;
  border: none;
  top: 50%;
  width: 160px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
}

button:hover {
  background-color: papayawhip;
}

.link {
  font-family: Zen Dots;
  display: inline-block;
  padding: 12px;
  margin: 0 6px 6px;
  text-decoration: none;
  color: black;
  border-radius: 10px;
}
`

export default BestBooksStyle