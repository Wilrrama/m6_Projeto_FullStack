import styled from "styled-components";
import { Button } from "../../fragments/Button";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;

  padding-left: 15%;
  padding-right: 15%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  //background-color: #6170e3;
  background-color: ${(props) => props.theme.colors.primary};

  //background-color: var(--color-light-gray);

  Button {
    :hover {
      height: 50px;
    }
    img {
      width: 5rem;
      height: 2rem;
    }
  }

  p {
    font-size: 1rem;

    text-align: center;

    max-width: 25rem;

    color: whitesmoke;

    font-weight: 500;
  }

  @media (max-width: 43.5rem) {
    justify-content: center;

    p {
      max-width: 25rem;
    }
  }
`;
