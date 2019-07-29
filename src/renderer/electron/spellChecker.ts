// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { ContextMenuBuilder, ContextMenuListener, SpellCheckHandler } from "electronSpellchecker";

import { getLang } from "./ipcRenderer/senders";

declare global {
	interface Window {
		spellCheckHandler: any;
	}
}

const lang = getLang();

/**
 * Set up spell checker and context menus
 */
export function initSpellChecker(): void {
	window.spellCheckHandler = new SpellCheckHandler();
	window.spellCheckHandler.attachToInput();
	window.spellCheckHandler.switchLanguage(lang);
	const contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const contextMenuListener = new ContextMenuListener((info: any): void => {
		contextMenuBuilder.showPopupMenu(info);
	});
}
