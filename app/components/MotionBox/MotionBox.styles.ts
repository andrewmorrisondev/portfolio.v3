/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    background-color: #0070f3;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #005bb5;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;

    h1 {
      font-size: 1.5rem;
    }
  }
`;
