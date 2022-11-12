import ClipboardJS from 'clipboard';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
let clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
  e.trigger.textContent = 'Copied!';
});
