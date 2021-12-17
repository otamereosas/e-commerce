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

  button {
      border-radius: 5px;
      font-family: "Avenir Next";
      font-size: 13px;
      font-weight: 400;
      padding: 5px 1rem;
      color: black;
      box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
      border: solid 1.999px transparent;
      /* background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
         ),
         linear-gradient(101deg, #ffb800, #ff7a00);
         background-image: linear-gradient(81.64deg, Rgba(6, 148, 42, 0.4) 34.46%, Rgba(6, 148, 42, 0.6) 87.54%); */
         background-image: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0)
         ),
         linear-gradient(101deg, Rgba(6, 148, 42, 0.4), Rgba(6, 148, 42, 0.6));
      background-origin: border-box;
      background-clip: content-box, border-box;
      box-shadow: 2px 1000px 1px #fff inset;
      outline: none;
   }
   button:hover {
      box-shadow: none;
      color: white;
   }

  span{
    font-weight: bolder;
  }

  .admin{
    display: flex;
  }

  .formRow {
  display: inline-block;
  width: 100%;
  }

  label {
    display: block;
    width: 100%;
    text-align: left;
  }

  select {
    display: block;
    width: auto;
    float: left;
    font-size: 1rem;
    line-height: 1;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    margin: 10px auto;
    border: none;
    outline: none;
    cursor: pointer;
  }

  input,
  &.checkoutInput select {
    display: block;
    width: 100%;
    font-size: 1rem;
    line-height: 1;
    font-weight: bold;
    text-align: left;
    padding: 10px 5px;
    margin: 10px auto;
    border: 1px solid #9e9e9e;
    outline: none;
  }
  .modal{
    width: 60%;
    margin: auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0.2px 2px gray;
    padding: 2rem;
    min-width: 300px;

    button{
      margin-top: 1rem;
    }
  }
  table{
    width: 100%;
    height: auto;
    color: black;
    font-weight: bolder;
    text-transform: capitalize;

    .Adminproduct{
      padding: 10px;
    }

    img{
      height: 100px;
      width: 100px;
      object-fit: cover;
    }

    button{
      background: #b00404
    }
  }

  #naira{
    color: black;
    text-decoration: line-through;
  }

`;

export default GlobalStyles;
