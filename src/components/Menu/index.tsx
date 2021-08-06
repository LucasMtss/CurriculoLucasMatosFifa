import { useHistory } from 'react-router-dom';

import { ContainerButtons, Button, ButtonActive } from './styles';

interface IProps {
  currentPage: string;
}

export function Menu({ currentPage }: IProps): JSX.Element {
  const history = useHistory();

  return (
    <ContainerButtons>
      {currentPage === 'Home' ? (
        <ButtonActive onClick={() => history.push('home')}>HOME</ButtonActive>
      ) : (
        <Button onClick={() => history.push('home')}>HOME</Button>
      )}

      {currentPage === 'Profile' ? (
        <ButtonActive onClick={() => history.push('perfil')}>
          PERFIL
        </ButtonActive>
      ) : (
        <Button onClick={() => history.push('perfil')}>PERFIL</Button>
      )}

      {currentPage === 'Skills' ? (
        <ButtonActive onClick={() => history.push('habilidades')}>
          SKILLS
        </ButtonActive>
      ) : (
        <Button onClick={() => history.push('habilidades')}>SKILLS</Button>
      )}

      {currentPage === 'Experience' ? (
        <ButtonActive onClick={() => history.push('experiencia')}>
          EXPERIÊNCIA
        </ButtonActive>
      ) : (
        <Button onClick={() => history.push('experiencia')}>EXPERIÊNCIA</Button>
      )}
    </ContainerButtons>
  );
}
