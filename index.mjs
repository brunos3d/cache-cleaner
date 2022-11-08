#!/usr/bin/env zx

await Promise.all([$`npm cache clean --force`, $`yarn cache clean`, $`rm -rf ~/.cache`]);

await $`yay -Scc`;
