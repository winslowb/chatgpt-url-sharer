(() => {
  const text = window.location.href;

  navigator.clipboard.writeText(text).then(() => {
    console.log("✅ URL copied to clipboard:", text);
  }).catch(err => {
    console.error("❌ Failed to copy:", err);
  });
})();

