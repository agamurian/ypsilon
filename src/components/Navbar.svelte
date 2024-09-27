<nav>
	<nav-title>Ypsylon</nav-title>
	<separator/>
	<nav-item>about</nav-item>
	<nav-item>get</nav-item>
	<nav-item>set</nav-item>
</nav>
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
		cursor: pointer;
		display: flex;
		flex: 0;
		width: auto;
		padding: 0.15em 0.3em 0.15em 0.3em;
		margin: 0.45em;
		background-color: #4f44;
		border: 3px dotted #8884;
		font-size: 0.75em;
	}
	nav {
		display: flex;
		position: fixed;
		top: 0;
		width: 100vw;
		margin: 0;
		padding: 0;
		border-bottom: 3px dotted #8884;
		border-top: 3px solid #000;
		background-color: black;
		color: white;
		font-face: 'Fira Code';
		font-weight: bold;
	}
</style>
