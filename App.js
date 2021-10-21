// import React from 'react';
// import Index from './src';
// import {Provider} from 'react-redux';
// import {store} from './src/app/store';
// const App = () => {
//   return (
//     <Provider store={store}>
//       <Index />
//     </Provider>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import { View ,Text} from "react-native";

function SimpleUseEffect() {
  
  useEffect(() => {
    alert("Component Rendered")
  },[]);
  
  return (
    <View>
      <Text>A Simple use of useEffect...</Text>
    </View>
  )
}
export default SimpleUseEffect
