import SInfo from 'react-native-sensitive-info';

export const saveToken = async (token) => {
  await SInfo.setItem('userToken', token, {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};

export const getToken = async () => SInfo.getItem('userToken', {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
});
  // console.log(token)
  // return token

export const deleteToken = async () => {
  await SInfo.deleteItem('userToken', {
    sharedPreferencesName: 'mySharedPrefs',
    keychainService: 'myKeychain',
  });
};
