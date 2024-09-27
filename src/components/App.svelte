<script>
  import Notes from '~/components/Notes.svelte';
  import Navbar from '~/components/Navbar.svelte';

  // A component prop
  export let appName = 'Ypsilon';

  // Not exported so private to this instance. Declarec with 'const' so it's readonly
  const name = 'Svelte';
</script>

<style>
  :global(*) {
	  transition: 0.25s ease;
	}
  :global(button) {
	font-face: 'Fira Sans'
  }
  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-face: 'Fira Sans'
  }

  h1 {
    text-align: center;
    margin-bottom: 6vh;
  }
</style>

<svelte:head>
  <title>{appName}</title>
</svelte:head>

<div class="appRoot">

  <Notes/>
  <Navbar/>

</div>
