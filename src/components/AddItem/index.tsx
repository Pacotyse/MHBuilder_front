import './styles.scss';

interface AddItemProps {
  item: string
  icon: string
}
function AddItem({ item, icon } : AddItemProps) {
  return (
    <div className="section-items__item">
      <button type="button" className="item__button-add">
        <img src={icon} alt={`${item} icon`} className="item__button-add__icon" />
        <span>{`Add ${item}`}</span>
      </button>
    </div>
  );
}

export default AddItem;
