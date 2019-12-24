import { screen } from "blessed";

export const Screen = screen({
  smartCSR: true
});

Screen.key(["escape", "C-c"], function(ch, key) {
  return process.exit(0);
});
