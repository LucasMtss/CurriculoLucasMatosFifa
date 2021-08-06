import profile from 'assets/images/img/Svg/perfilCard.svg';

import { Menu } from 'components/Menu';
import { Container, ContainerInformation } from './styles';

export function Profile(): JSX.Element {
  return (
    <Container>
      <Menu currentPage="Profile" />
      <ContainerInformation>
        <div className="texts">
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
        <div className="image">
          <img src={profile} alt="" />
        </div>
      </ContainerInformation>
    </Container>
  );
}
