// src/stores/notesStore.js
import { writable } from 'svelte/store';

// Function to create a persistent writable store
function createPersistentStore(key, initialValue) {
    // Load the initial value from localStorage, or use the provided initialValue
    const storedValue = localStorage.getItem(key);
    const data = storedValue ? JSON.parse(storedValue) : initialValue;

    const store = writable(data);

    // Subscribe to the store and update localStorage whenever it changes
    store.subscribe(value => {
        localStorage.setItem(key, JSON.stringify(value));
    });

    return store;
}

// Create the notesStored store
export const notesStored = createPersistentStore('notesStored', [])

