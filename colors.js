const colors = [
  /* Backgrounds */
  "color-bg","color-bg-dark","color-bg-dark1","color-bg-float","color-bg-highlight","color-bg-popup","color-bg-search","color-bg-sidebar","color-bg-statusline","color-bg-visual",
  /* Basic colors */
  "color-black","color-blue","color-blue0","color-blue1","color-blue2","color-blue5","color-blue6","color-blue7","color-border","color-border-highlight","color-comment","color-cyan","color-dark3","color-dark5",
  /* Diff colors */
  "color-diff-add","color-diff-change","color-diff-delete","color-diff-text",
  /* Text / Foreground */
  "color-error","color-fg","color-fg-dark","color-fg-float","color-fg-gutter","color-fg-sidebar",
  /* Git colors */
  "color-git-add","color-git-change","color-git-delete","color-git-ignore",
  /* Accents */
  "color-accent-green","color-accent-green1","color-accent-green2","color-accent-hint","color-accent-info","color-accent-magenta","color-accent-magenta2","color-accent-orange","color-accent-purple","color-accent-red","color-accent-red1","color-accent-teal","color-accent-yellow","color-accent-warning","color-accent-todo",
  /* Rainbow */
  "color-rainbow-1","color-rainbow-2","color-rainbow-3","color-rainbow-4","color-rainbow-5","color-rainbow-6","color-rainbow-7","color-rainbow-8",
  /* Terminal colors */
  "color-terminal-black","color-terminal-black-bright","color-terminal-blue","color-terminal-blue-bright","color-terminal-cyan","color-terminal-cyan-bright","color-terminal-green","color-terminal-green-bright","color-terminal-magenta","color-terminal-magenta-bright","color-terminal-red","color-terminal-red-bright","color-terminal-white","color-terminal-white-bright","color-terminal-yellow","color-terminal-yellow-bright"
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('div.color-grid');

  colors.forEach(name => {
    const block = document.createElement("div");
    block.className = "color-block";
    block.style.backgroundColor = `var(--${name})`;
    block.innerHTML = `<div class="color-name">${name}</div><div class="color-hex">${getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim()}</div>`;
    grid.appendChild(block);
  });
});
