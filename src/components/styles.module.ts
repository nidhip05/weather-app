import styled from "styled-components";

export const MainWrapper = styled.div`
  ::placeholder {
    color: #fff;
  }
  .iconFont {
    font-size: 130px;
  }
  height: 100vh;
  background: url("/bg.jpg");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  .container {
    width: 35rem;
    background-color: #0a0a0a7d;
    border-radius: 30px;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.8);
    background-blend-mode: overlay;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: absolute;
  }

  .searchArea {
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 1px solid #e5e3e4;
    color: white;
    padding: 8px;
    border-radius: 30px;
    text-align: center;
    width: 80%;
    font-size: 18px;
    background: transparent;
    box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
      rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
      rgb(0 0 0 / 9%) 0px -3px 5px;
  }
  .searchCircle {
    border: 1px solid lavenderblush;
    width: 38px; /* Adjust the width of the circle as needed */
    height: 38px; /* Ensure the height matches the width for a perfect circle */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px,
      rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px,
      rgb(0 0 0 / 9%) 0px -3px 5px;

    > .searchIcon {
      font-size: 20px;
      color: lavenderblush;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 40px 0 0 0;
    color: white;
    gap: 5px;
    > .icon {
      font-size: 10rem;
    }

    > h1 {
      font-size: 3rem;

      font-family: "Bebas Neue", sans-serif;
    }

    > span {
      margin-bottom: 10px;
      font-family: "Inter", sans-serif;
    }

    > h2 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 400;
    }
  }

  .bottomInfo {
    padding: 20px;
    border-radius: 30px;
    display: grid;
    justify-items: center;
    background: #999494;
    margin: 10px;
    grid-gap: 30px;
    box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px inset,
      rgb(0 0 0 / 30%) 0px 18px 36px -18px inset;
  }

  .degree {
    margin-left: 15px;
    font-size: 70px;
  }

  .bottomInfoArea {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
  .humidInfo {
    font-size: 20px;
    margin: 5px 0;
  }
  .humidityLevel,
  .wind {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0 20px;

    > .humidIcon {
      font-size: 3rem;
    }
  }
  .humidIcon {
    font-size: 3rem;
  }
  .windIcon {
    margin: 5px;
    font-size: 2rem;
  }

  .loading {
    height: 580px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: white;
    .loadingIcon {
      font-size: 3rem;
      /* DO LATER NOT WHEN CREATING UI */
      animation: spin 2s linear infinite;
    }
    p {
      font-size: 22px;
      margin-top: 10px;
      font-family: "Josefin Sans", sans-serif;
    }
  }
  .humidName {
    font-size: 18px;
  }

  /* DO LATER NOT WHEN CREATING UI */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      padding: 5px;
      width: calc(100vw - 16px);
    }
    .weatherArea {
      margin: 30px 0 0 0;
    }
    .humidName {
      font-size: 14px;
    }
    .humidInfo {
      font-size: 16px;
    }
    .weatherArea > .icon {
      font-size: 8rem;
    }
    .searchArea > input {
      font-size: 14px;
    }
    .searchCircle {
      height: 28px;
      width: 28px;
      > .searchIcon {
        font-size: 16px;
      }
    }
  }
`;
