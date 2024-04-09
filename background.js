chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'text-select',
    title: 'Let change text',
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, { action: 'change-text', selectText: 'Vu yeu Chui mlem mlemmmm' })
});
