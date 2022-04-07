import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from './context/AppContext';

import App from './App';
import './index.scss';




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </StrictMode>
);