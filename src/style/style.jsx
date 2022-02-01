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
  height: 446px;
  background-color: #fff;
  border-radius: 5px;
  p {
    height: 100%;
    padding: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
  }
`;

export { Container, Forms, Footnote, Feed };
