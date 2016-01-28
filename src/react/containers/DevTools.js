import React from 'react';

import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
		<LogMonitor theme="ashes" />
	</DockMonitor>
);

console.log('Redux DevTools loaded! Hit ctrl-h to see it.');

export default DevTools;
