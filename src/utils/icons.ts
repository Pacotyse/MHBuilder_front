// In this file, we importe all the image assets
import head_1 from '../assets/icons/head-1.png';
import chest_1 from '../assets/icons/chest-1.png';
import waist_1 from '../assets/icons/waist-1.png';
import arms_1 from '../assets/icons/arms-1.png';
import legs_1 from '../assets/icons/legs-1.png';
import bow_1 from '../assets/icons/bow-1.png';
import light_bow_gun_1 from '../assets/icons/light_bow-gun-1.png';
import charge_blade_1 from '../assets/icons/charge-blade-1.png';
import dual_blades_1 from '../assets/icons/dual-blades-1.png';
import great_sword_1 from '../assets/icons/great-sword-1.png';
import hammer_1 from '../assets/icons/hammer-1.png';
import heavy_bow_gun_1 from '../assets/icons/heavy-bow-gun-1.png';
import hunting_horn_1 from '../assets/icons/hunting-horn-1.png';
import insect_glaive_1 from '../assets/icons/insect-glaive-1.png';
import lance_1 from '../assets/icons/lance-1.png';
import gunlance_1 from '../assets/icons/gunlance-1.png';
import long_sword_1 from '../assets/icons/long-sword-1.png';
import switch_axe_1 from '../assets/icons/switch-axe-1.png';
import sword_and_shield_1 from '../assets/icons/sword-and-shield-1.png';
import decoration_1 from '../assets/icons/decoration.png';
import attack from '../assets/icons/sub-attack.png';
import defense from '../assets/icons/sub-defense.png';
import affinity from '../assets/icons/sub-affinity.png';
import element_fire from '../assets/icons/element-fire.png';
import element_ice from '../assets/icons/element-ice.png';
import element_water from '../assets/icons/element-water.png';
import element_thunder from '../assets/icons/element-thunder.png';
import element_dragon from '../assets/icons/element-dragon.png';

export interface IIcons {
  head_1: string
  chest_1: string
  waist_1: string
  arms_1: string
  legs_1: string
  bow_1: string
  light_bow_gun_1: string
  charge_blade_1: string
  dual_blades_1: string
  great_sword_1: string
  hammer_1: string
  heavy_bow_gun_1: string
  hunting_horn_1: string
  insect_glaive_1: string
  lance_1: string
  gunlance_1: string
  long_sword_1: string
  switch_axe_1: string
  sword_and_shield_1: string
  decoration_1: string
  attack: string
  defense: string
  affinity: string
  element_fire: string
  element_ice: string
  element_water: string
  element_thunder: string
  element_dragon: string
}
// Listing all the images in an object
const icons: IIcons = {
  head_1,
  chest_1,
  waist_1,
  arms_1,
  legs_1,
  bow_1,
  light_bow_gun_1,
  charge_blade_1,
  dual_blades_1,
  great_sword_1,
  hammer_1,
  heavy_bow_gun_1,
  hunting_horn_1,
  insect_glaive_1,
  lance_1,
  gunlance_1,
  long_sword_1,
  switch_axe_1,
  sword_and_shield_1,
  decoration_1,
  attack,
  defense,
  affinity,
  element_fire,
  element_ice,
  element_water,
  element_thunder,
  element_dragon,
};

// This fonction will return the image based on the key passed
function getIconByKey(key: keyof IIcons): string {
  return icons[key];
}

export default getIconByKey;
