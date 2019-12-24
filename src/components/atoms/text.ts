import { text, Widgets } from "blessed";

export const Text = (props: Widgets.TextOptions) => {
  return text({
    ...props
  });
};
