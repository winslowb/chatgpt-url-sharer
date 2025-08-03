chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action !== "injectPrompt" || !message.url) return;

  const promptText = `Summarize this page: ${message.url}`;

  const tryInject = () => {
    const textarea = document.querySelector("textarea");

    if (!textarea) return false;

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
    nativeInputValueSetter.call(textarea, promptText);

    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    const form = textarea.closest("form");
    const sendButton = form?.querySelector('button');

    if (sendButton) {
      sendButton.click();
      return true;
    }

    return false;
  };

  // Retry until input box is available
  const interval = setInterval(() => {
    const success = tryInject();
    if (success) clearInterval(interval);
  }, 500);
});

