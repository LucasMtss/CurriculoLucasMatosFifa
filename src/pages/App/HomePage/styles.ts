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

export const ContainerCards = styled.div`
  width: 70%;
  height: 40rem;
  display: flex;
  flex-wrap: wrap;

  div.profile {
    width: 40%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    background: linear-gradient(
      112.34deg,
      #010037 7.4%,
      #753bea 49.76%,
      #d21ee9 100%
    );

    span {
      font-family: 'Sedgwick Ave', cursive;
      color: var(--green);
      font-size: 3.5rem;
      width: 4rem;
      margin-top: 2rem;
      margin-left: 2rem;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    }

    img {
      align-self: flex-end;
      justify-self: flex-end;
      width: 28rem;
      height: 17rem;
      margin-right: -3rem;
    }
  }
  div.education {
    width: 58%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 2rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;

      :last-of-type {
        margin-top: 2rem;
      }
    }

    img {
      width: 10rem;
    }
  }
  div.contacts {
    width: 32.5%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    p {
      font-size: 2rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;
    }

    img {
      width: 7rem;
    }
  }
  div.skills {
    width: 32.5%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    display: flex;
    padding: 1rem 0;
    padding-left: 4rem;
    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    li {
      font-size: 1.8rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;
      margin-right: 3rem;
    }

    img {
      width: 7rem;
      align-self: flex-end;
      margin-left: 7rem;
    }
  }
  div.projects {
    width: 32.5%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
      text-decoration: none;
      font-size: 1.7rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;

      :last-of-type {
        margin-top: 2rem;
      }
    }

    img {
      width: 7rem;
    }
  }
`;

export const Card = styled.div`
  border: solid 1px var(--green);
  margin: 5px;
`;
