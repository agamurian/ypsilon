
<script>
import { notesStored } from '/stores.js';
  let notes = [
    {
    'title':'title',
    'content':'content'
    },
    {
    'title':'title',
    'content':'content'
    },
  ];

  function addNote(notes){
	let newNotes = $notesStored;
    newNotes.push({
    'title':'title',
    'content':'content'
    });
notesStored.set(newNotes)
return newNotes
  }
</script>

<style>

  .fira-sans {
    font-family: 'Fira Sans';
  }
  h4 {
    font-weight: 900;
    text-decoration:underline 3px #8884;
    transition: 0.2s ease;
    border-radius: 0.125em;
    font-size: 20px;
    padding: 0.25em 0.5em;
    line-height: 1.5;
    margin: 0;
  }
  h4:focus {
    text-decoration:underline 3px #4545;
    border: none;
    outline: none;
    background-color: #eee5;
  }

  .fira-code {
    font-family: 'Fira Code';
}
  p {
    font-weight: bold;
    line-height: 1.5;
    margin: 0;
    border-radius: 0.25em;
    padding: 0.25em;
  }
  p:focus{
    border: none;
    outline: none;
    background-color: #eee2;
  }

  .box {
    transition: 0.1s ease;
    margin: 0.5em;
    border-radius: 0.25em;
    background-color: #0002;
    padding: 0.25em;
  }
  .box:hover {
    background-color: #4545;
  }
  .box:active {
    border: none;
    outline: none;
    background-color: #4444;
  }

  .container {
    margin: auto;
    width: 100%;
    max-width: 1000px;
    padding: calc(0.25em + 15vw - 10vh);
  }

  .code {
	font-size: 10px;
  }
  .button {
	font-size: 10px;
    padding: 0.5em 0.75em;
    border-radius: 0.5em;
    margin: 0.75em;
    text-align: center;
    font-weight: bold;
  }
</style>

<div class='container'>
<div class="helloSvelte">
  {#each $notesStored as note}
<div class="box">
	<h4 class='fira-sans' bind:innerHTML={note['title']} contenteditable="true"></h4>
    <div class="box">
	    <p class='code fira-code' bind:innerHTML={note['content']} contenteditable="true"></p>
    </div>
</div>
  {/each}
  <div class='box fira-sans button' on:click={() => (notes = addNote(notes))}> + add note</div>

</div>
</div>
