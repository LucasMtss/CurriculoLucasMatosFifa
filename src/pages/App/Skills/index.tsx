import card from 'assets/images/img/Svg/card.svg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Menu } from 'components/Menu';
import { colors } from 'styles/colors';
import ISkillGroup from 'interfaces/skills';

import {
  Container,
  Percentage,
  Content,
  ContainerSkills,
  ContentSkills,
  SkillsList,
  Skill,
  Card,
} from './styles';

export function Skills(): JSX.Element {
  const designSkills: ISkillGroup = {
    title: 'DESIGN',
    percentage: '53',
    skills: [
      {
        name: 'UI',
        value: '55',
      },
      {
        name: 'UX',
        value: '55',
      },
      {
        name: 'FIGMA',
        value: '76',
      },
    ],
  };

  const frontendSkills: ISkillGroup = {
    title: 'FRONTEND',
    percentage: '70',
    skills: [
      {
        name: 'HTML',
        value: '78',
      },
      {
        name: 'CSS',
        value: '75',
      },
      {
        name: 'JAVASCRIPT',
        value: '60',
      },
      {
        name: 'JAVASCRIPT',
        value: '60',
      },
      {
        name: 'REACT',
        value: '68',
      },
      {
        name: 'TYPESCRIPT',
        value: '55',
      },
      {
        name: 'CYPRESS',
        value: '45',
      },
    ],
  };
  const othersSkills: ISkillGroup = {
    title: 'OUTROS',
    percentage: '62',
    skills: [
      {
        name: 'GIT',
        value: '55',
      },
      {
        name: 'SCRUM',
        value: '70',
      },
      {
        name: 'EXCEL',
        value: '45',
      },
      {
        name: 'C',
        value: '78',
      },
    ],
  };
  return (
    <Container>
      <Menu currentPage="Skills" />
      <Content>
        <Card src={card} alt="" />
        <ContainerSkills>
          <ContentSkills>
            <h3>{designSkills.title}</h3>
            <Percentage>
              <CircularProgressbar
                value={Number(designSkills.percentage)}
                text={designSkills.percentage}
                circleRatio={0.6}
                styles={buildStyles({
                  rotation: 0.7,
                  strokeLinecap: 'butt',
                  trailColor: colors.gray,
                  backgroundColor: colors.gray,
                  pathColor: colors.greenProgress,
                })}
              />
            </Percentage>
            <SkillsList>
              {designSkills.skills.map(obj => {
                return (
                  <Skill>
                    <span>{obj.name}</span>
                    <span>{obj.value}</span>
                  </Skill>
                );
              })}
            </SkillsList>
          </ContentSkills>
          <ContentSkills>
            <h3>{frontendSkills.title}</h3>
            <Percentage>
              <CircularProgressbar
                value={Number(frontendSkills.percentage)}
                text={frontendSkills.percentage}
                circleRatio={0.6}
                styles={buildStyles({
                  rotation: 0.7,
                  strokeLinecap: 'butt',
                  trailColor: colors.gray,
                  backgroundColor: colors.gray,
                  pathColor: colors.greenProgress,
                })}
              />
            </Percentage>
            <SkillsList>
              {frontendSkills.skills.map(obj => {
                return (
                  <Skill>
                    <span>{obj.name}</span>
                    <span>{obj.value}</span>
                  </Skill>
                );
              })}
            </SkillsList>
          </ContentSkills>
          <ContentSkills>
            <h3>{othersSkills.title}</h3>
            <Percentage>
              <CircularProgressbar
                value={Number(frontendSkills.percentage)}
                text={othersSkills.percentage}
                circleRatio={0.6}
                styles={buildStyles({
                  rotation: 0.7,
                  strokeLinecap: 'butt',
                  trailColor: colors.gray,
                  backgroundColor: colors.gray,
                  pathColor: colors.greenProgress,
                })}
              />
            </Percentage>
            <SkillsList>
              {othersSkills.skills.map(obj => {
                return (
                  <Skill>
                    <span>{obj.name}</span>
                    <span>{obj.value}</span>
                  </Skill>
                );
              })}
            </SkillsList>
          </ContentSkills>
        </ContainerSkills>
      </Content>
    </Container>
  );
}
