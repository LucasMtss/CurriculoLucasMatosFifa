import styled from 'styled-components';
import backgroundImage from 'assets/images/img/background.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerInformation = styled.div`
  background-color: var(--blue);
  border: solid 1px var(--green);
  width: 70%;
  height: 50rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;

  div.texts {
    width: 80%;
  }

  p {
    font-size: 2rem;
    color: var(--light-blue);
    font-weight: 500;
    width: 100%;
    margin-top: 2rem;
  }

  span {
    font-size: 1.5rem;
    color: white;
    font-style: italic;
    font-weight: 500;
    width: 100%;
  }

  div.image {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  img {
    width: 20rem;
  }
`;
