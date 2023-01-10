import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { store } from "./store/store";

interface Props {
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Root;

//   <Provider store={store}>
//       <Router basename="/globallogic-js-basecamp-2021/react/04-redux/build">
//       <Router>{children}</Router>
//     </Provider>
