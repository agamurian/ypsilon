import App from '~/components/App.svelte';

const app = new App({
  target: document.body,
  props: {
    appName: 'Ypsilon',
  },
});

window.app = app;

export default app;
