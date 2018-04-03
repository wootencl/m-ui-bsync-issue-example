import React from 'react';
import { render } from 'react-dom';

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// It's important to not define HelloWorld component right in this file
// because in that case it will do full page reload on change
import HelloWorld from './HelloWorld';

render(<HelloWorld />, document.getElementById('react-root'));
