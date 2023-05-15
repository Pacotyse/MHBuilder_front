/* eslint-disable max-len */
import { Skill } from '../../@types/armor';
import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

interface ISkillList {
  name: string
  level: number
}

function SkillStats() {
  const headSkill = useAppSelector((state) => (state.builder.head ? state.builder.head.skills : null));
  const chestSkill = useAppSelector((state) => (state.builder.chest ? state.builder.chest.skills : null));
  const armsSkill = useAppSelector((state) => (state.builder.arms ? state.builder.arms.skills : null));
  const waistSkill = useAppSelector((state) => (state.builder.waist ? state.builder.waist.skills : null));
  const legsSkill = useAppSelector((state) => (state.builder.legs ? state.builder.legs.skills : null));

  // initialize an array with data
  const itemListSkills = [headSkill, chestSkill, armsSkill, waistSkill, legsSkill];

  function setSkills(armorsSkills: (Skill[] | null)[]) {
    // Create an empty array to initiate the list of different skills an armor provide
    const totalSkills: ISkillList[] = [];

    armorsSkills.forEach((skillList) => {
      skillList?.map((skill) => {
        const isInTotal = totalSkills.find((skillInTotal) => skillInTotal.name === skill.name);
        if (!isInTotal) {
          totalSkills.push({ name: skill.name, level: skill.level });
        } else {
          const skillIndex = totalSkills.findIndex((skillInTotal) => skill.name === skillInTotal.name);
          totalSkills[skillIndex].level += skill.level;
        }
        return totalSkills;
      });
    });
    return totalSkills;
  }

  // Array of unique combined skills
  const totalSkillsStats = setSkills(itemListSkills);

  return (
    <div className="stats-container">
      <h3 className="stats-title">Skills</h3>
      {totalSkillsStats.map((skill) => (
        <div key={skill.name}>
          {skill.name}
          {' '}
          :
          {' '}
          <span className="stats-value">
            lv.
            {skill.level}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SkillStats;
