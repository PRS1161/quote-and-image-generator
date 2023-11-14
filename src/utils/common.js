const cardBackgroundColor = () => {
  return (
    "#" +
    (Math.floor(Math.random() * 128) + 128).toString(16) +
    (Math.floor(Math.random() * 128) + 128).toString(16) +
    (Math.floor(Math.random() * 128) + 128).toString(16)
  );
};

const getButtonBackAndFontColor = () => {
  const backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  const hexColor = backgroundColor.replace("#", "");
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return { backgroundColor, color: brightness > 128 ? "#000000" : "#FFFFFF" };
};

export { cardBackgroundColor, getButtonBackAndFontColor };
