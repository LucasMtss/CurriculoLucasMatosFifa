import code from 'assets/images/img/Svg/codeIcon.svg';

import { Menu } from 'components/Menu';
import { Container, ContainerInformation } from './styles';

export function Experience(): JSX.Element {
  return (
    <Container>
      <Menu currentPage="Experience" />
      <ContainerInformation>
        <div className="texts">
          <p>Experiência</p>
          <span>
            Estágio na Smarti9 Communications - Desenvolvedor Front-end - 04/21
            - atualmente
          </span>
          <ul>
            <li>Criação de sites</li>
            <li>Aplicações web</li>
            <li>Integração com API</li>
            <li>Testes automatizados</li>
            <li>Metodologias ágeis</li>
            <li>Versionamento de código</li>
          </ul>

          <p>Contato</p>
          <span>(32) 99186-4842</span>
          <span>lucasrmts2@gmail.com</span>

          <p>Idiomas</p>
          <span>Português - nativo</span>
          <span>Inglês - técnico</span>
        </div>

        <div className="image">
          <img src={code} alt="" />
        </div>
      </ContainerInformation>
    </Container>
  );
}
