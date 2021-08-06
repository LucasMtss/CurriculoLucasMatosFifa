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

export const Content = styled.div`
  background-color: var(--blue);
  border: solid 1px var(--green);
  width: 70%;
  height: 40rem;
  padding: 2rem;
  display: flex;
  overflow: auto;

  @media (max-width: 1700px) {
    width: 90%;
  }
  @media (max-width: 1350px) {
    height: auto;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerSkills = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  min-width: 50rem;
  min-height: max-content;

  @media (max-width: 800px) {
    width: 100%;
    align-self: flex-start;
  }
`;
export const ContentSkills = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;

  h3 {
    color: var(--light-blue);
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

export const Percentage = styled.div`
  width: 7rem;
  height: 7rem;
`;

export const SkillsList = styled.ul`
  width: 100%;
  margin-top: 2rem;
`;

export const Skill = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;

  span {
    color: var(--light-blue);
    font-size: 1.5rem;
  }

  border-bottom: solid 2px var(--greenProgress);
`;

export const Card = styled.img`
  width: 25rem;
`;
