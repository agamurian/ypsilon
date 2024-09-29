<script>
    export let isOpen = false;
    export let onClose;

    const closeModal = () => {
        isOpen = false;
        if (onClose) {
            onClose();
        }
    };
</script>

{#if isOpen}
    <div class="modal-overlay" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <slot></slot>
            <button on:click={closeModal}>Close</button>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    button {
	    outline: 0;
		border-radius: 0.5em;
		transition: 0.125s ease;
		cursor: pointer;
		display: flex;
		flex: 0;
		width: auto;
		padding: 0.35em 0.75em 0.05em 0.75em;
		background-color: #663;
		border: none;
		border-bottom: 3px solid #442;
		font-size: 0.75em;
		font-family: 'Fira Sans';
		font-weight: bold;
    }
</style>

