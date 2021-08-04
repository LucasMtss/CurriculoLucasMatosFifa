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

export const ContainerButtons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  height: 6rem;
`;

export const Button = styled.button`
  width: 16rem;
  height: 5rem;
  padding: 0.7rem 0;
  font-size: 2rem;
  color: var(--white);
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  transition: all 200ms;

  :hover {
    color: var(--green);
    border-bottom: solid 4px var(--orange);
    background-color: var(--blue);
  }
`;

export const ContainerInformation = styled.div`
  background-color: var(--blue);
  border: solid 1px var(--green);
  width: 70%;
  height: 50rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  div {
    width: 40%;
  }

  p {
    font-size: 2rem;
    color: var(--light-blue);
    font-weight: 500;
    width: 100%;
    margin-top: 2rem;
  }

  span {
    font-size: 1.8rem;
    color: white;
    font-style: italic;
    font-weight: 500;
    width: 100%;
  }

  img {
    width: 20rem;
    align-self: flex-end;
    margin-bottom: 10rem;
    display: inline-block;
  }
`;
