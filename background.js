chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.id || !tab.url) return;

  // Inject the clipboard copier content script
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['copy.js']
  });

  // Open ChatGPT in a new tab
  chrome.tabs.create({ url: "https://chat.openai.com/" });
});

