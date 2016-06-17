import store from './store.js';

<rr-counter>
	<h2>Counter</h2>
	<p>Count: {state.count}</p>
	<button onclick={increase}>Increase value</button>

	<script>

		this.increase = () => {
			store.dispatch({ type: 'add', amount: 1 });
		};

		this.stateChange = () => {
			this.state = store.getState();
			this.update();
		};

		this.on('unmount', () => {
			store.unsubscribe(this.stateChange);
		});

		store.subscribe(this.stateChange);
		store.dispatch({ type: 'init' });

	</script>
</rr-counter>