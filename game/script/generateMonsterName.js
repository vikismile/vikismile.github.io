import {random} from "./generateMonster"

export function generateMonsterName(){
    const namePart1 = ['Angry', 'Grumpy', 'Snuffy', 'Sinister', 'Harmful', 'Terrible', 'Awful', 'Horrible', 'Disgusting'];
    const namePart2 = ['Gnome', 'Ogre', 'Dwarf', 'Pygmy'];
    const namePart3 = ['Tom', 'Bobby', 'Johny', 'Ronald', 'Harry', 'Paul'];

    return namePart1[random(0,8)] + ' ' + namePart2[random(0,3)] + ' ' + namePart3[random(0,5)];
}