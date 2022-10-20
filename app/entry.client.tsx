import { RemixBrowser } from '@remix-run/react';
import { hydrate } from 'react-dom';

// react v17 only to enable styled-components ssr.
hydrate(<RemixBrowser />, document);
