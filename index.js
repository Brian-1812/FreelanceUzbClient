/**
 * @format
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import { AppRegistry } from 'react-native';
 import { Provider as StoreProvider } from 'react-redux';
 import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
 import { PersistGate } from 'redux-persist/integration/react';
 import App from './App';
 import { name as appName } from './app.json';
 import configureStore from './src/Store/Store';
 
 export default function Main() {
   const { store, persistor } = configureStore();
   const PaperTheme = {
     ...DefaultTheme,
     roundness: 2,
     colors: {
      ...DefaultTheme.colors,
      primary: '#1CA5C9',
      accent: '#4A545D',
      background: '#F5F7ED',
      secondary: '#c94fbd'
     }
   }
   return (
     <StoreProvider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <PaperProvider theme={PaperTheme}>
            <App />
          </PaperProvider>
       </PersistGate>
     </StoreProvider>
   );
 }
 
 AppRegistry.registerComponent(appName, () => Main);
 