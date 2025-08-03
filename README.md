# 📤 Share to ChatGPT – Chrome Extension

This Chrome extension lets you quickly share any webpage to ChatGPT. Concept is that you have a 'everything' project in your chatgpt plus account, that you post all your webpages(bookmark urls). 

When you click the extension icon:

1. The current tab’s URL is **copied to your clipboard**.
2. A new tab opens to [https://chat.openai.com](https://chat.openai.com).
3. You can simply **paste (`Ctrl+V` / `Cmd+V`)** the URL into the ChatGPT prompt box.

Perfect for sending articles, docs, or reference links to ChatGPT with minimal effort.

---

## 🔧 Installation

1. Clone or download this repository.
2. In Chrome, go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked** and select the extension folder.
5. Pin the extension to your toolbar for easy access.

---

## 🧠 How It Works

- Uses the Chrome `tabs` and `scripting` APIs to grab the active tab’s URL.
- Writes the URL to the clipboard using `navigator.clipboard`.
- Opens a new tab to ChatGPT, where you can immediately paste.

---

## 🛡️ Permissions

- `tabs`: To read the current tab’s URL.
- `scripting`: To inject clipboard logic into the page.
- `clipboardWrite`: To write to your system clipboard.

---

## ✅ Example Use Case

You’re reading an article and want ChatGPT to summarize it.

1. Click the extension icon.
2. ChatGPT opens in a new tab.
3. Paste (`Ctrl+V`) and hit enter.
4. Done.

---

## 📌 Roadmap Ideas (PRs welcome)

- [ ] Add keyboard shortcut
- [ ] Add right-click context menu: “Share to ChatGPT”
- [ ] Include selected text or page title in the prompt

---

## 🧑‍💻 Author

Bill Winslow — [ebwinslow.com](https://ebwinslow.com)

---

## 📜 License

MIT
