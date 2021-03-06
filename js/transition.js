import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
	in({from, to, done}) {
		const tl = new TimelineLite();
		tl.fromTo(to, 0.5, { left: '-100%', top: '50vh' }, { left: '0%' })
			.fromTo(to, 0.5, { height: '2vh' }, { height: '100vh', top: '0vh', onComplete: () => {
				from.remove();
				done();
			} })
			.fromTo(to.children, 1, { opacity: '0' }, { opacity: '1' })
	}
	out({from, done}) {
		done();
	}
}

export default Fade;