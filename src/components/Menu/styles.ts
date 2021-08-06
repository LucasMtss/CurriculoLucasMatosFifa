import styled from 'styled-components';

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

  @media (max-width: 1000px) {
    width: 13rem;
  }
  @media (max-width: 830px) {
    width: 10rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 7rem;
    font-size: 1.3rem;
    height: 3rem;
  }
  @media (max-width: 400px) {
    width: auto;
    padding: 0 1rem;
  }

  :hover {
    color: var(--green);
    border-bottom: solid 4px var(--orange);
    background-color: var(--blue);

    @media (max-width: 600px) {
      border-bottom: solid 2px var(--orange);
    }
  }
`;

export const ButtonActive = styled(Button)`
  color: var(--green);
  border-bottom: solid 4px var(--orange);
  background-color: var(--blue);
`;
