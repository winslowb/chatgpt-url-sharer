async function getProjectUrl() {
  const response = await fetch(chrome.runtime.getURL("config.json"));
  const config = await response.json();
  return config.chatgpt_project_url;
}

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab || !tab.url) return;

  const url = tab.url;

  // Copy current tab URL to clipboard
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (text) => {
      navigator.clipboard.writeText(text).then(
        () => console.log("URL copied to clipboard"),
        (err) => console.error("Clipboard write failed:", err)
      );
    },
    args: [url],
  });

  // Open configured ChatGPT project tab
  const chatGPTProjectUrl = await getProjectUrl();
  chrome.tabs.create({ url: chatGPTProjectUrl });
});

