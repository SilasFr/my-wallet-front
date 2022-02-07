import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8c11be;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #8c11be;
  display: flex;

  gap: 13px;
  flex-direction: column;
  align-items: center;
  .header {
    min-width: 326px;
    max-width: 100%;
    margin: 20px 24px 9px 24px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    ion-icon {
      font-size: 30px;
      color: #fff;
    }
  }

  .menu {
    min-width: 326px;
    max-width: 100%;
    margin: 0 24px;
    display: flex;
    gap: 15px;
    button {
      width: 155px;
      height: 114px;
      padding: 10px;
      display: flex;
      gap: 32px;
      flex-direction: column;
      justify-content: space-between;
      background: #a328d6;
      border-radius: 5px;
      border: none;

      font-weight: medium;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
      p {
        text-align: justify;
        width: 64px;
      }
    }
  }
`;

const Forms = styled.form`
  margin-top: 24px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  input {
    width: 326px;
    height: 58px;
    padding: 15px;
    background: #ffffff;
    border-radius: 5px;
    border: none;

    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
  button {
    width: 326px;
    height: 58px;
    background-color: #a328d6;
    border-radius: 5px;
    border: none;
    color: #fff;
    p {
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;

      color: #ffffff;
    }
  }
`;

const Footnote = styled.p`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;

const Feed = styled.div`
  width: 326px;
  height: 67%;
  background-color: #fff;
  border-radius: 5px;
  p.empty {
    height: 100%;
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

const Extract = styled.div`
  margin-top: 13px;
  padding: 11px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;
  .registry {
    display: flex;
    justify-content: space-between;

    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    .date-description {
      display: flex;
      gap: 8px;
    }
    p {
      color: #000;
    }
    span {
      color: #c6c6c6;
    }
    .deposit {
      p {
        color: #03ac00;
      }
    }
    .withdrawal {
      p {
        color: #c70000;
      }
    }
  }
  .extract {
    width: 93%;
    display: flex;
    justify-content: space-between;

    position: absolute;
    bottom: 20px;
    p {
      font-weight: bold;
    }
  }
`;

export { MainContainer, Container, Forms, Footnote, Feed, Extract };
