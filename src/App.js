import { ToastProvider } from 'react-toast-notifications';
import RouterComponent from './router/routes';
import { title } from 'process'


export default function App() {
  return (
    <div className='App'>
       <ToastProvider autoDismiss={true}>
        <RouterComponent title={title} />
      </ToastProvider>
    </div>
  )
}
