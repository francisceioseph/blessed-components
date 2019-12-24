import { View, Screen, Text, Layout } from "./components/atoms";

const text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;
const textProps = {
  content: text,
  width: "20%",
  shrink: true,
  style: {
    fg: "white"
  }
};

const text1 = Text({ ...textProps });

const text2 = Text({
  align: "center",
  ...textProps
});

const text3 = Text({
  align: "right",
  ...textProps
});

const text4 = Text({
  align: "right",
  ...textProps
});

const container = Layout({
  width: "99%",
  height: "90%",
  children: [text1, text2, text3, text4]
});

const window = View({
  label: "Texts Labels",
  top: "center",
  left: "center",
  width: "100%",
  height: "100%",
  scrollable: true,
  keys: true,
  mouse: true,
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: "green",
    bg: "black",
    border: {
      fg: "green"
    },
    scrollbar: {
      bg: "blue"
    }
  },
  children: [container]
});

Screen.append(window);
Screen.render();
