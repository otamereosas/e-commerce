import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }

  html, body{
    overflow-x: hidden;
  }

  body{
    background: whitesmoke;
  }

  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .Nav:focus {
    color: #462686;
    border-bottom: 3px dashed white;
    padding-bottom:10px;
  }

  button{
    background: black;
    color: white;
    text-transform: capitalize;
    font-size: 15px;
    padding: 10px 1rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
  }

  button:hover{
    background: #333;
  }

  span{
    color: red;
    font-weight: bolder;
  }
`




export default GlobalStyles