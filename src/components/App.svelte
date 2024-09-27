<script>
  import Notes from '~/components/Notes.svelte';
  import Navbar from '~/components/Navbar.svelte';

  // A component prop
  export let appName = 'Ypsilon';

  // Not exported so private to this instance. Declarec with 'const' so it's readonly
  const name = 'Svelte';
</script>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
