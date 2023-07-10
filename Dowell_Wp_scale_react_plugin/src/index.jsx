import React from 'react';
import App from './components/App/App';
import { createRoot } from 'react-dom/client';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('wprt-admin-app');
  const root = createRoot(container);
  root.render(<App />);
});
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('wprt-admin-app')
//   );
//   // let wprtAdminApp = ReactDOM.createRoot(
//   //   document.getElementById('wprt-admin-app')
//   // );
//   // // if (typeof root !== 'undefined' && root !== null) {
//   // wprtAdminApp.render(
//   //   <React.StrictMode>
//   //     <App />
//   //   </React.StrictMode>
//   // );
// });
