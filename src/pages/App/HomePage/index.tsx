import { useEffect, useState } from 'react';
import mbappe from 'assets/images/img/mbappe.png';
import educationIcon from 'assets/images/img/Svg/education.svg';
import profile from 'assets/images/img/Svg/profile.svg';
import skillsIcon from 'assets/images/img/Svg/skills.svg';
import code from 'assets/images/img/Svg/code.svg';

import { Menu } from 'components/Menu';
import { Container, ContainerCards, Card } from './styles';

export function HomePage(): JSX.Element {
  const [skills, SetSkills] = useState<Array<string>>([]);

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
      <Menu currentPage="Home" />
      <ContainerCards>
        <Card className="profile">
          <span>Lucas Matos</span>
          <img src={mbappe} alt="Mbappé" />
        </Card>
        <Card className="education">
          <div className="texts">
            <p>Sistemas para internet - IFSEMG Barbacena</p>
            <p>
              Estágio em desenvolvimento front-end na smarti9 communications
            </p>
          </div>
          <div className="image">
            <img src={educationIcon} alt="" />
          </div>
        </Card>
        <Card className="contacts">
          <div className="texts">
            <p>20 anos</p>
            <p>(32) 99186-4842</p>
            <p>lucasrmts@gmail.com</p>
          </div>
          <div className="image">
            <img src={profile} alt="" />
          </div>
        </Card>
        <Card className="skills">
          <ul>
            {skills.map(obj => (
              <li key={obj}>{obj}</li>
            ))}
          </ul>
          <div className="image">
            <img src={skillsIcon} alt="" />
          </div>
        </Card>
        <Card className="projects">
          <div className="texts">
            <a href="https://github.com/LucasMtss" target="blank">
              https://github.com/LucasMtss
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-matos-92b37a1b2/"
              target="blank"
            >
              https://www.linkedin.com/in/lucas-matos-92b37a1b2/
            </a>
          </div>
          <div className="image">
            <img src={code} alt="" />
          </div>
        </Card>
      </ContainerCards>
    </Container>
  );
}
