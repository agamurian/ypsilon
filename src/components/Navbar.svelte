<script>
    import { notesStored } from '/stores.js';
    import { downloadJson, uploadJson } from '/jsonUtils.js';
    import { onMount } from 'svelte';
    import Modal from './Modal.svelte';

    let jsonFile;

    const getJson = () => {
        notesStored.subscribe(value => {
            downloadJson(value, 'notes.json');
        })();
    };

    const setJson = () => {
        if (jsonFile) {
            uploadJson(jsonFile, (data) => {
                notesStored.set(data);
            });
        }
    };

    let showModal = false;

    const openModal = () => {
        showModal = true;
    };

    const closeModal = () => {
        showModal = false;
    };
</script>


<nav>
	<nav-title>Ypsylon</nav-title>
	<separator/>
	<nav-item on:click={openModal}>about</nav-item>
    <nav-item on:click={getJson}>Get</nav-item>
    <nav-item>
        <input type="file" accept=".json" on:change="{(e) => jsonFile = e.target.files[0]}" />
        <button on:click={setJson}>Set</button>
    </nav-item>

</nav>
<Modal isOpen={showModal} onClose={closeModal}>
    <h2>Hello from the Modal!</h2>
    <p>This is a simple modal example using Svelte.</p>
</Modal>
<style>
	nav-title {
		cursor: pointer;
		display: flex;
		font-weight: black;
		width: auto;
		flex: 0;
		border-radius: 50%;
		padding: 0.5em;
		font-size: 1em;
	}
	separator {
		display: flex;
		flex: 1;
		width: 100%
	}
	nav-item {
		border-radius: 0.5em;
		transition: 0.125s ease;
		cursor: pointer;
		display: flex;
		flex: 0;
		width: auto;
		padding: 0.35em 0.75em 0.05em 0.75em;
		margin: 0.45em;
		background-color: #663;
		border-bottom: 3px solid #442;
		font-size: 0.75em;
	}
	nav-item:hover {
		background-color: #884;
		padding: 0.35em 0.75em 0.05em 0.75em;
	}
	nav {
		display: flex;
		position: fixed;
		top: 0;
		width: 100vw;
		margin: 0;
		padding: 0;
		border-bottom: 3px dotted #8884;
		border-top: 3px solid #884;
		background-color: black;
		color: white;
		font-face: 'Fira Code';
		font-weight: bold;
	}
</style>
