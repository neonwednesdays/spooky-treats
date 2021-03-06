import seedrandom from 'seedrandom';
import randomstring from 'randomstring';

import { defaultStoryNode } from '../content/Constants';

var dev = true;
var randomNumberGenerator = () => {};

export default class Utility {
	/*
		copies defaultStoryNode values and adds additional values
		@param {object} additions - values you want to replace in the defaultStoryNode
		@return {object} - StoryNode data
	*/
	static makeNewNode = (additions = {}) => {
		const newNode = Object.assign({}, defaultStoryNode);
		return Object.assign(newNode, additions);
	};

	/*
		random number generator function
		@return {function} it's the way seedrandom works
	*/
	static rng = () => {
		return randomNumberGenerator();
	};

	/*
		@param {number} between 0-1
		@return {bool} returns true if chance is less than rng
	*/
	static chance = (chance) => {
		return chance >= randomNumberGenerator();
	};

	/*
    	Generates a new Seed
    	@return {string} returns 10 uppercase letters
	*/
	static makeNewSeed = () => {
	    return dev ? 'HELLOWORLD' : randomstring.generate({ length: 10, charset: 'alphabetic', capitalization: 'uppercase' })
	};

	/*
		Does given things with a new seed
			you gotta do this!
		@param {string} seed to pass in
	*/
	static setSeed = (nextSeed) => {
		randomNumberGenerator = seedrandom(nextSeed || 'UNDEFINED_SEED');
	};

	// returns true if in a constant development environment
	static isDev = () => (this.dev);
}