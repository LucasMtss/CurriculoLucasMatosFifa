import { useEffect, useState } from 'react';
import mbappe from 'assets/images/img/mbappe.png';
import educationIcon from 'assets/images/img/Svg/education.svg';
import profile from 'assets/images/img/Svg/profile.svg';
import skillsIcon from 'assets/images/img/Svg/skills.svg';
import code from 'assets/images/img/Svg/code.svg';
import { useHistory } from 'react-router-dom';

import {
  Container,
  ContainerButtons,
  Button,
  ContainerCards,
  Card,
} from './styles';

export function HomePage(): JSX.Element {
  const [skills, SetSkills] = useState<Array<string>>([]);
  const history = useHistory();

  useEffect(() => {
    SetSkills([
      'HTML',
      'JAVASCRIPT',
      'CSS',
      'REACT',
      'TYPESCRIPT',
      'GIT',
      'CYPRESS',
      'C',
      'SCRUM',
    ]);
  }, []);

  return (
    <Container>
      <ContainerButtons>
        <Button>HOME</Button>
        <Button onClick={() => history.push('perfil')}>PERFIL</Button>
        <Button>SKILLS</Button>
        <Button>EXPERIÊNCIA</Button>
      </ContainerButtons>
      <ContainerCards>
        <Card className="profile">
          <span>Lucas Matos</span>
          <img src={mbappe} alt="Mbappé" />
        </Card>
        <Card className="education">
          <p>Sistemas para internet - IFSEMG Barbacena</p>
          <p>Estágio em desenvolvimento front-end na smarti9 communications</p>
          <img src={educationIcon} alt="" />
        </Card>
        <Card className="contacts">
          <p>20 anos</p>
          <p>(32) 99186-4842</p>
          <p>lucasrmts@gmail.com</p>
          <img src={profile} alt="" />
        </Card>
        <Card className="skills">
          <ul>
            {skills.map(obj => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
          <img src={skillsIcon} alt="" />
        </Card>
        <Card className="projects">
          <a href="https://github.com/LucasMtss" target="blank">
            https://github.com/LucasMtss
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-matos-92b37a1b2/"
            target="blank"
          >
            https://www.linkedin.com/in/lucas-matos-92b37a1b2/
          </a>
          <img src={code} alt="" />
        </Card>
      </ContainerCards>
    </Container>
  );
}
