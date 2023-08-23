import { readable } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
	// setup code goes here
	const interval = setInterval(() => {
		set(new Date());
	}, 1000)

	return function stop() {
		// teardown code goes here
		clearInterval(interval)
	};
});
