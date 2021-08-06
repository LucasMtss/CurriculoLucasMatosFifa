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

  @media (max-width: 1350px) {
    justify-content: flex-start;
    padding-top: 3rem;
  }
`;

export const ContainerCards = styled.div`
  width: 70%;
  height: 40rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1750px) {
    width: 80%;
  }
  @media (max-width: 1550px) {
    width: 90%;
  }
  @media (max-width: 1350px) {
    justify-content: center;
  }

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
    @media (max-width: 1350px) {
      width: 60%;
    }

    @media (max-width: 1000px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    span {
      font-family: 'Sedgwick Ave', cursive;
      color: var(--green);
      font-size: 3.5rem;
      width: 4rem;
      margin-top: 2rem;
      margin-left: 2rem;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);

      @media (max-width: 415px) {
        font-size: 3rem;
      }
    }

    img {
      align-self: flex-end;
      justify-self: flex-end;
      width: 28rem;
      height: 17rem;
      margin-right: -3rem;

      @media (max-width: 550px) {
        width: 23rem;
        height: 15rem;
      }

      @media (max-width: 415px) {
        width: 20rem;
        height: 12rem;
        position: absolute;
      }
    }
  }
  div.education {
    width: 58%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1350px) {
      width: 60%;
    }

    @media (max-width: 1000px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    div.texts {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    div.image {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
    }

    p {
      font-size: 1.5rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;

      @media (max-width: 530px) {
        font-size: 1.2rem;
      }

      :last-of-type {
        margin-top: 2rem;
      }
    }

    img {
      width: 10rem;
      height: 8rem;
    }
  }
  div.contacts {
    width: 32.5%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1350px) {
      width: 60%;
    }

    @media (max-width: 1000px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    div.texts {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    div.image {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
    }

    p {
      font-size: 1.5rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;

      @media (max-width: 530px) {
        font-size: 1.2rem;
      }
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

    @media (max-width: 1350px) {
      width: 60%;
    }

    @media (max-width: 1000px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    ul {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-end;
    }
    li {
      font-size: 1.5rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;
      margin-right: 3rem;

      @media (max-width: 530px) {
        font-size: 1.2rem;
      }
    }

    div.image {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
    }

    img {
      width: 7rem;
      align-self: flex-end;
      margin-left: 7rem;

      @media (max-width: 500px) {
        margin-left: 0;
      }
    }
  }
  div.projects {
    width: 32.5%;
    height: 50%;
    background: linear-gradient(180deg, #010037 0%, #350088 100%);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1350px) {
      width: 60%;
    }

    @media (max-width: 1000px) {
      width: 80%;
    }

    @media (max-width: 500px) {
      width: 90%;
    }

    a {
      text-decoration: none;
      font-size: 1.5rem;
      color: var(--light-blue);
      font-style: italic;
      font-weight: 500;
      width: 100%;

      @media (max-width: 530px) {
        font-size: 1.2rem;
      }

      :last-of-type {
        margin-top: 2rem;
      }
    }

    div.texts {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    div.image {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      justify-self: flex-end;
    }

    img {
      justify-content: flex-end;
      width: 6rem;
      height: 6rem;
    }
  }
`;

export const Card = styled.div`
  border: solid 1px var(--green);
  margin: 5px;
`;
