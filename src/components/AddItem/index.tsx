import './styles.scss';

interface AddItemProps {
  itemType: string
  icon: string
  openModal: (itemType: string) => void
}
function AddItem({ itemType, icon, openModal } : AddItemProps) {
  return (
    <div className="section-items__item">
      <button type="button" className="item__button-add" onClick={() => openModal(itemType)}>
        <img src={icon} alt={`${itemType} icon`} className="item__icon" />
        <span>{`Add ${itemType}`}</span>
      </button>
    </div>
  );
}

export default AddItem;
