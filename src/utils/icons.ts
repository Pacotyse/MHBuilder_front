// In this file, we importe all the image assets
import helmet_1 from '../assets/icons/helmet-1.png';
import chest_1 from '../assets/icons/chest-1.png';
import waist_1 from '../assets/icons/waist-1.png';
import gloves_1 from '../assets/icons/gloves-1.png';
import feet_1 from '../assets/icons/feet-1.png';
import bow_1 from '../assets/icons/bow-1.png';
import bow_gun_1 from '../assets/icons/bow-gun-1.png';
import charge_blade_1 from '../assets/icons/charge-blade-1.png';
import dual_blades_1 from '../assets/icons/dual-blades-1.png';
import great_sword_1 from '../assets/icons/great-sword-1.png';
import hammer_1 from '../assets/icons/hammer-1.png';
import heavy_bow_gun_1 from '../assets/icons/heavy-bow-gun-1.png';
import hunter_horn_1 from '../assets/icons/hunter-horn-1.png';
import insect_glaive_1 from '../assets/icons/insect-glaive-1.png';
import lance_1 from '../assets/icons/lance-1.png';
import lance_gun_1 from '../assets/icons/lance-gun-1.png';
import long_sword_1 from '../assets/icons/long-sword-1.png';
import switch_axe_1 from '../assets/icons/switch-axe-1.png';
import sword_shield_1 from '../assets/icons/sword-shield-1.png';
import decoration_1 from '../assets/icons/decoration.png';
import attack from '../assets/icons/sub-attack.png';
import defense from '../assets/icons/sub-defense.png';
import affinity from '../assets/icons/sub-affinity.png';

interface IIcons {
  helmet_1: string
  chest_1: string
  waist_1: string
  gloves_1: string
  feet_1: string
  bow_1: string
  bow_gun_1: string
  charge_blade_1: string
  dual_blades_1: string
  great_sword_1: string
  hammer_1: string
  heavy_bow_gun_1: string
  hunter_horn_1: string
  insect_glaive_1: string
  lance_1: string
  lance_gun_1: string
  long_sword_1: string
  switch_axe_1: string
  sword_shield_1: string
  decoration_1: string
  attack: string
  defense: string
  affinity: string
}
// Listing all the images in an object
const icons: IIcons = {
  helmet_1,
  chest_1,
  waist_1,
  gloves_1,
  feet_1,
  bow_1,
  bow_gun_1,
  charge_blade_1,
  dual_blades_1,
  great_sword_1,
  hammer_1,
  heavy_bow_gun_1,
  hunter_horn_1,
  insect_glaive_1,
  lance_1,
  lance_gun_1,
  long_sword_1,
  switch_axe_1,
  sword_shield_1,
  decoration_1,
  attack,
  defense,
  affinity,
};

// This fonction will return the image basec on the key passed
function getIconByKey(key: keyof IIcons): string {
  return icons[key];
}

export default getIconByKey;
