<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { writable } from 'svelte/store';

	export const user = writable({
		carBrand: '',
		zipCode: '',
		firstName: '',
		lastName: '',
		carModel: '',
		firstRegistartion: ''
	});

	/**
	 * @type {HTMLElement}
	 */
	let section1;
	/**
	 * @type {HTMLElement}
	 */
	let section2;

	const carBrands = [
		{ id: 1, text: `Audi` },
		{ id: 2, text: `BMW` },
		{ id: 3, text: `Nissan` }
	];
	const zipCodes = [
		{ id: 1, text: `65000` },
		{ id: 2, text: `66000` },
		{ id: 3, text: `67000` },
		{ id: 4, text: `68000` }
	];
	let step = 1;

	function handleFirstSubmit() {
		step += 1;
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section bind:this={section1} style={`display: ${step === 1 ? 'block' : 'none'}`}>
	<h1>Form 1</h1>
	<form class="content" on:submit|preventDefault={handleFirstSubmit}>
		<div class="row">
			<label class="row__label" for="car-brand">Car brand</label>
			<select id="car-brand" class="row__input" bind:value={$user.carBrand}>
				{#each carBrands as brand}
					<option value={brand.text}>
						{brand.text}
					</option>
				{/each}
			</select>
			<!-- <input class="row__input" id="car-brand" type="text" bind:value={$user.carBrand} /> -->
		</div>
		<div class="row">
			<label class="row__label" for="zip-code">Zip code</label>
			<select
				id="zip-code
			"
				class="row__input"
				bind:value={$user.zipCode}
			>
				{#each zipCodes as code}
					<option value={code.text}>
						{code.text}
					</option>
				{/each}
			</select>
		</div>
		<button class="btn">Next</button>
	</form>
</section>

<section
	bind:this={section2}
	class="section2"
	style={`transform: ${step === 2 ? 'translateX(-50%)' : 'translateX(50%)'}; opacity: ${
		step === 2 ? '1' : '0'
	}`}
>
	<h1>Form 2</h1>
	<form class="content">
		<div class="row">
			<label class="row__label" for="first-name">First Name</label>
			<input class="row__input" id="first-name" type="text" bind:value={$user.firstName} />
		</div>
		<div class="row">
			<label class="row__label" for="last-name">Last </label>
			<input class="row__input" id="last-name" type="text" bind:value={$user.lastName} />
		</div>
		<div class="row">
			<label class="row__label" for="car-model">Car Model</label>
			<input class="row__input" id="car-model" type="text" bind:value={$user.carModel} />
		</div>
		<div class="row">
			<label class="row__label" for="first-registration">First Registration</label>
			<input
				class="row__input"
				id="first-registration"
				type="text"
				bind:value={$user.firstRegistartion}
			/>
		</div>

		<button class="btn">Next</button>
	</form>
</section>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
		max-width: 400px;
	}
	.row {
		display: flex;
		flex-direction: column;
		margin-bottom: 16px;
		&__label {
			font-size: 16px;
			font-weight: 500;
			margin-bottom: 8px;
		}
		&__input {
			padding: 8px 12px;
			border: none;
			border-radius: 8px;
			outline: none;
		}
	}

	.btn {
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		text-transform: uppercase;
		background-color: rgb(66, 165, 245);
		color: white;
		cursor: pointer;
	}

	.section2 {
		// opacity: 0;
		min-width: 400px;
		position: absolute;
		left: 50%;
		transform: translateX(50%);
		transition: all 1s ease-in-out;
	}
</style>
