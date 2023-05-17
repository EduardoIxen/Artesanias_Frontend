import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './routes/App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement).render(<App tab="home" />);