import styled from "styled-components";

export const ModalContainer = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: white;
    border: 1px solid;
    padding: 20px;
    //box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 250px;
  }
`;
