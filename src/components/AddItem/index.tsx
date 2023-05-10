import './styles.scss';

interface AddItemProps {
  item: string
  icon: string
  openModal: () => void
}
function AddItem({ item, icon, openModal } : AddItemProps) {
  return (
    <div className="section-items__item">
      <button type="button" className="item__button-add" onClick={openModal}>
        <img src={icon} alt={`${item} icon`} className="item__icon" />
        <span>{`Add ${item}`}</span>
      </button>
    </div>
  );
}

export default AddItem;
