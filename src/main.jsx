import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d48e468c8df34c2ebbefee6bd4d7be78@o4507373430636544.ingest.de.sentry.io/4507373441187920",
  integrations: [
    Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
