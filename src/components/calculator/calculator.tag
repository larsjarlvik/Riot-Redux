import store from './store.js';

<rr-calculator>
	<h2>Calculator</h2>
	<p>Sum: {state.sum}</p>
	<input onkeyup={sum} type="string" name="num1">
	<input onkeyup={sum} type="string" name="num2">

	<script>

		this.sum = () => {
			let num1 = isNaN(parseInt(this.num1.value)) ? 0 : this.num1.value;
			let num2 = isNaN(parseInt(this.num2.value)) ? 0 : this.num2.value;

			store.dispatch({ 
				type: 'add',
				num1,
				num2
			});

			return true;
		};

		this.stateChange = () => {
			this.state = store.getState();
		};

		this.on('unmount', () => {
			store.unsubscribe(this.stateChange);
		});

		store.subscribe(this.stateChange);
		store.dispatch({ type: 'init' });

	</script>
</rr-calculator>