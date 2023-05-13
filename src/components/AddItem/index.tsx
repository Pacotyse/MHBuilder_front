import { useAppSelector } from '../../hooks/redux';
import getIconByKey, { IIcons } from '../../utils/icons';
import './styles.scss';

interface AddItemProps {
  itemType: 'weapon' | 'head' | 'arms' | 'legs' | 'waist' | 'chest'
  icon: string
  openModal: (itemType: string) => void
}
function AddItem({ itemType, icon, openModal }: AddItemProps) {
  // Get the item stocked in the state
  const itemInState = useAppSelector((state) => state.builder[itemType]);
  // if an item exist in the state, format the type to fit the function getIconByKey()
  const snakeCaseTypeItem = itemInState?.type.split('-').join('_').concat('_1');
  return (
    <div className="section-items__item">
      <button type="button" className="item__button-add" onClick={() => openModal(itemType)}>
        {/* if an item is added to the builder, displays its related icon */}
        <img src={itemInState ? getIconByKey(snakeCaseTypeItem as keyof IIcons) : icon} alt={`${itemType} icon`} className="item__icon" />
        <span>
          {/* if an item is added to the builder, displays its name */}
          {itemInState ? itemInState.name : `Add ${itemType}`}
        </span>
      </button>
    </div>
  );
}

export default AddItem;
