<script>
    import { notesStored } from '/stores.js';
    import { title } from '/stores.js';
    import { downloadJson, uploadJson } from '/jsonUtils.js';
    import { onMount } from 'svelte';
    import Modal from './Modal.svelte';

    let jsonFile;

    const getJson = () => {
        notesStored.subscribe(value => {
            downloadJson(value, $title+'.json');
        })();
    };

    const setJson = () => {
        if (jsonFile) {
            uploadJson(jsonFile, (data) => {
                notesStored.set(data);
							title.set(jsonFile.name.replace('.json',''))
            });
        }
    };

    const clear = () => {
        notesStored.set([]);
    };

    let showModal = false;

    const openModal = () => {
        showModal = true;
    };

    const closeModal = () => {
        showModal = false;
		};

	// somthing on change of value: update handler, which clears it from tags
	function removeHtmlTags(str) {
    return str.replace(/<[^>]*>/g, '');
	}
	$: { 
		$title;
			if($title.includes('<') && $title.includes('>')){
			title.set(removeHtmlTags($title))
		}
		console.log($title)
	}
</script>


<nav>
	<nav-title bind:innerHTML={$title} contenteditable="true"/>
	<separator/>
	<nav-item on:click={openModal}>about</nav-item>
	<nav-item on:click={clear}>clear</nav-item>
    <nav-item on:click={getJson}>Get {$title}.json</nav-item>
        <input type="file" accept=".json" on:change="{(e) => jsonFile = e.target.files[0]}" />
        <nav-item on:click={setJson}>Set</nav-item>

</nav>
<Modal isOpen={showModal} onClose={closeModal}>
    <h2>Ypsilon is simple note taking app</h2>
    <hr>
    <p>You can add notes, every note have title and content fields</p>
    <p>Contents of both is html. so you can paste formatted content here</p>
    <p>Notes are persistent via local storage, so if you reload page or open new tab - you still have your notes</p>
    <p>You can download/upload notes in form of json</p>
    <hr>
    <p>its a client side app, so no server needed, it works offline</p>
    <p>so its free forever, as it does not store anything</p>
    <hr>
    <p>Ypsilon is made for fast notes and meant to be so simple, you dont even see its there.</p>
    <hr>
    <p>made by: <a href="https://agamurian.com">agamurian</a></p>
    <p>builded with svelte and parcel, open source: <a href="https://github.com/agamurian/ypsilon">github</a></p>
</Modal>
<style>
	nav-title {
		cursor: pointer;
		display: flex;
		font-weight: black;
		width: 100%;
		flex: 1;
		border-radius: 0.5em;
		padding: 0.25em;
		margin: 0.25em;
		font-size: 1em;
		outline: none;
	}
	nav-title:focus {align-self: start;}
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
		white-space: nowrap;
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
		padding: 0.25em 0.5em;
		border-bottom: 3px dotted #8884;
		border-top: 3px solid #884;
		background-color: black;
		color: white;
		font-face: 'Fira Code';
		font-weight: bold;
	}
</style>
