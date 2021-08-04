import { useHistory } from 'react-router-dom';
import profile from 'assets/images/img/Svg/perfilCard.svg';

import {
  Container,
  ContainerButtons,
  Button,
  ContainerInformation,
} from './styles';

export function Profile(): JSX.Element {
  const history = useHistory();

  return (
    <Container>
      <ContainerButtons>
        <Button onClick={() => history.push('home')}>HOME</Button>
        <Button>PERFIL</Button>
        <Button>SKILLS</Button>
        <Button>EXPERIÊNCIA</Button>
      </ContainerButtons>
      <ContainerInformation>
        <div>
          <p>Formação</p>
          <span>
            Ensino médio completo - E.E. Francisco Antônio Pires - 2018
          </span>
          <span>
            Sistemas para Internet - IFSEMG Barbacena - 2019/atualmente
          </span>

          <p>Contato</p>
          <span>(32) 99186-4842</span>
          <span>lucasrmts2@gmail.com</span>

          <p>Idiomas</p>
          <span>Português - nativo</span>
          <span>Inglês - técnico</span>
        </div>

        <img src={profile} alt="" />
      </ContainerInformation>
    </Container>
  );
}
