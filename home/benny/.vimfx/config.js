let map = (shortcuts, command, custom=false) => {
  vimfx.set(`${custom ? 'custom.' : ''}mode.normal.${command}`, shortcuts)
}

let map_caret = (shortcuts, command) => {
  vimfx.set(`mode.caret.${command}`, shortcuts)
}

map('<late><left>',  'scroll_left')
map('<late><right>', 'scroll_right')
map('<late><down>',  'scroll_down')
map('<late><up>',    'scroll_up')
map('<late><space>',  'scroll_full_page_down')
map('<late><s-space>', 'scroll_full_page_up')
map('<late>>H', 'scroll_half_page_down')
map('<late>T', 'scroll_half_page_up')

map('D',  'tab_select_previous')
map('N',  'tab_select_next')
map('gD', 'tab_move_backward')
map('gN', 'tab_move_forward')
map('e',  'tab_close')
map('E',  'tab_restore')
map('t', 'tab_new')
map('e', 'tab_close')

map('i',  'follow')
map('I',  'follow_in_tab')

map('o', 'focus_location_bar')

map('yy', 'copy_current_url')
map('p', 'paste_and_go'*
map('P', 'paste_and_go_in_tab')

map('r',  'reload')
map('R',  'reload_force')
map('ar',  'reload_all')
map('aR',  'reload_all_force')

map('>', 'history_back')
map('C', 'history_forward')

map('v',  'enter_mode_ignore')
map('V',  'exit_mode_ignore')

map_caret('d',  'move_left')
map_caret('n', 'move_right')
map_caret('h',  'move_down')
map_caret('t',    'move_up')



let set = (pref, valueOrFunction) => {
  let value = typeof valueOrFunction === 'function'
    ? valueOrFunction(vimfx.getDefault(pref))
    : valueOrFunction
  vimfx.set(pref, value)
}

set('hint_chars', 'fjdkslaghrueiwovncm')
set('prevent_autofocus', true)



let {Preferences} = Cu.import('resource://gre/modules/Preferences.jsm', {})

Preferences.set({
  'accessibility.blockautorefresh': true,
  'browser.fixup.alternate.enabled': false,
  'browser.search.suggest.enabled': false,
  'browser.tabs.animate': false,
  'browser.tabs.closeWindowWithLastTab': false,
  'browser.tabs.warnOnClose': false,
  'browser.urlbar.formatting.enabled': false,
  'devtools.chrome.enabled': true,
  'devtools.command-button-eyedropper.enabled': true,
  'devtools.command-button-rulers.enabled': true,
  'devtools.selfxss.count': 0,
  'privacy.donottrackheader.enabled': true,
})


