import './body.html';

import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

Session.set('Hello-text','This is a session var');
Session.set('Form-visibility','hidden');
