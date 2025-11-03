export const Api_Key = "AIzaSyBWjsuao7jqW7yeJTF3Sx7pcwKfuRGp7gE";

export const value_converter = (val) => {
  if (val >= 1000000000) {
    return (val / 1000000000).toFixed(1) + "B";
  } else if (val >= 1000000) {
    return (val / 1000000).toFixed(1) + "M";
  } else if (val >= 1000) {
    return (val / 1000).toFixed(1) + "K";
  } else {
    return val;
  }
};
