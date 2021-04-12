import React from 'react';
import ReactDOM from 'react-dom';
import { Padre } from './components/07-tarea-memo/Padre';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEfect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEfect/SimpleForm';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { HookApp } from './HookApp';
// import GifExpertApp from './GifExpertApp';
import './index.css';
// import PrimerApp from './PrimerApp';
// import App from './App';
// import CouterApp from './CouterApp/CouterApp';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CouterApp ></CouterApp> */}
    {/* <PrimerApp saludo="Hola soy, Goku"></PrimerApp> */}
    {/* <GifExpertApp></GifExpertApp> */}
    {/* <HookApp></HookApp> */}
    {/* <CounterApp></CounterApp> */}
    {/* <CounterWithCustomHook></CounterWithCustomHook> */}
    {/* <SimpleForm></SimpleForm> */}
    {/* <FormWithCustomHook></FormWithCustomHook> */}
    {/* <MultipleCustomHooks></MultipleCustomHooks> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <RealExampleRef></RealExampleRef> */}
    {/* <Layout></Layout> */}
    {/* <Memorize></Memorize> */}
    {/* <MemoHook></MemoHook> */}
    {/* <CallbackHook></CallbackHook> */}
    <Padre></Padre>
  </React.StrictMode>,
  document.getElementById('root')
);

