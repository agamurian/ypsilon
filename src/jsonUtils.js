// src/utils/jsonUtils.js

export function downloadJson(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

export function uploadJson(file, callback) {
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const json = JSON.parse(event.target.result);
            callback(json);
        } catch (e) {
            console.error('Invalid JSON file', e);
        }
    };
    reader.readAsText(file);
}

