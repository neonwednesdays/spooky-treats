import Utility from './Utility';
import { makeNewMap, addPredefinedMaps } from './MapMaker';
import StoryNodes from './StoryNodes';
import CandyItemManager from './CandyItemManager';
import SkillEffectsManager from './SkillEffectsManager';

var currSeed;
var mapData;
var inventory;

// TODO: global constant variables

export default class GameController {
    /*
        Gets a House by Id
        @param {int} id - id of House
        @return {object} - House
    */
    static getHouseById = (id) => {
        for (var i=0; i<mapData.length; i++) {
            const aHouse = mapData[i];
            if (aHouse.id === id) {
                return aHouse;
            }
        }
        return undefined;
    };

     /*
        Gets a node by Id
        @param {int} id - id of storynode
        @return {object} - StoryNode
    */
    static getNodeById = (id) => {
        return StoryNodes.getNode({ id: id });
    };

    /*
        Gets a random node
        @return {object} - StoryNode
    */
    static getRandomNode = () => {
        return StoryNodes.getNode({ id: 1 });
    };

    /*
        Give the player an item
        @return {object} - StoryNode
    */
    static receiveItem = (id) => {
        const newItem = CandyItemManager.getItem({ id: id });
        inventory.push(newItem);
        return newItem;
    };

    /*
        Give the player an item
        @return {object} - Skill
    */
    static receiveSkill = (id) => {
        const newItem = SkillEffectsManager.getSkill({ id: id });
        inventory.push(newItem);
        return newItem;
    };

    /*
        Sets up a new game
        @param {string} seed - 10 digit seed string
    */
    static initNewGame = (seed) => {
        // init with seed/new seed
        currSeed = seed || Utility.makeNewSeed();
        Utility.setSeed(currSeed);

        // new empty inventory
        inventory = [];

        // new random map data
        mapData = addPredefinedMaps(makeNewMap(5, 0.3));
    };

    /*
        Gets this game's map data
    */
    static getMapData = () => (mapData);

    /*
        Gets this game's map data
    */
    static getInventory = () => (inventory);

    /*
        Gets this game's seed
    */
    static getSeed = () => (currSeed);
}

export {
    mapData,
}