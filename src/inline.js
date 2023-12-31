import { createPicker } from 'picmo';

import emojiData from 'emojibase-data/es/data.json';
import messages from 'emojibase-data/es/messages.json';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#picker');
  const selectionContainer = document.querySelector('#selection-outer');
  const emoji = document.querySelector('#selection-emoji');
  const name = document.querySelector('#selection-name');

  const picker = createPicker({
    emojiData,
    messages,
    rootElement
  });

  picker.addEventListener('emoji:select', (selection) => {
    emoji.innerHTML = selection.emoji;
    name.textContent = selection.label;

    selectionContainer.classList.remove('empty');
  });
});
