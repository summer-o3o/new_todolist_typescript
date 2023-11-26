import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './pages/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
