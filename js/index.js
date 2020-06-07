import Highway from '@dogstudio/highway';
import Fade from './transition.js';
import renderer from './renderer.js';

const H = new Highway.Core({
	transitions: {
		default: Fade
	},
	renderers: {
		home: renderer
	}
});