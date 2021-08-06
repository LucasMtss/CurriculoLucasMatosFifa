interface ISkill {
  name: string;
  value: string;
}

export default interface ISkillGroup {
  title: string;
  percentage: string;
  skills: Array<ISkill>;
}
