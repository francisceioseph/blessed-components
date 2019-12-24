import * as ui from "blessed";

export const View = (props: ui.Widgets.BoxOptions) => {
  return ui.box({
    ...props
  });
};
