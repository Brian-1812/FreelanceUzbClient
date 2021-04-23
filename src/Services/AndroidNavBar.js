import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';

export const setNavigationColor = (color) => {
  changeNavigationBarColor(color);
};
export const hideNavigation = () => {
  hideNavigationBar();
};

export const showNavigation = () => {
  showNavigationBar();
};

export const testSetTranslucent = () => {
  changeNavigationBarColor('translucent', true);
};

export const testSetTransparent = () => {
  changeNavigationBarColor('transparent', true);
};
