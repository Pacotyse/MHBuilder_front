/* eslint-disable max-len */
import { useAppSelector } from '../../hooks/redux';
import './styles.scss';

function SkillStats() {
  const stats = useAppSelector((state) => state.builder.stats);
  const skills = stats?.skills;

  return (
    <div className="stats-container">
      <h3 className="stats-title">Skills</h3>
      {skills?.map((skill) => (
        <div key={skill.id}>
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
