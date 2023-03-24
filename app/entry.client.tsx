import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  /* const { worker } = require('./services/msw/browser');
  worker.start(); */
}
// react v17 only to enable styled-components ssr.
hydrate(<RemixBrowser />, document);
