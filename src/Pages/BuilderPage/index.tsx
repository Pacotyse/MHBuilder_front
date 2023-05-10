import AddItem from '../../components/AddItem';
import weaponIcon from '../../assets/icons/great-sword-1.png';
import helmetIcon from '../../assets/icons/helmet-1.png';
import chestIcon from '../../assets/icons/chest-1.png';
import waistIcon from '../../assets/icons/waist-1.png';
import glovesIcon from '../../assets/icons/gloves-1.png';
import feetIcon from '../../assets/icons/feet-1.png';
import './styles.scss';
import Modal from '../../components/Modal';

function BuilderPage() {
  return (
    <main className="main">
      <h2>Builder</h2>
      <section className="section-items">
        <p className="section-items__description">Set your items</p>
        <AddItem item="weapon" icon={weaponIcon} />
        <AddItem item="helmet" icon={helmetIcon} />
        <AddItem item="chest" icon={chestIcon} />
        <AddItem item="waist" icon={waistIcon} />
        <AddItem item="gloves" icon={glovesIcon} />
        <AddItem item="feet" icon={feetIcon} />
      </section>
      <Modal modalXl={false}>
        {/* here goes modal conten : form / cards */}
      </Modal>
      <section className="section-stats">
        <div className="stats-container">
          Weapon
        </div>
        {/* armor infos */}
        <div className="stats-container">Armor</div>
        {/* skills infos */}
        <div className="stats-container">
          <ul className="stats-content__skills">
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
            <li>
              <span>Skill name</span>
              <div>level ***</div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default BuilderPage;
