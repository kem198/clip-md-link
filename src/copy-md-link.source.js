javascript: (function () {
  (async function () {
    const title = document.title
      .replace(/\[/g, "\\[")
      .replace(/\]/g, "\\]")
      .replace(/\|/g, "\\|")
      .replace(/\#/g, "\\#");

    const url = document.URL.replace(/\(/g, "%2528").replace(/\)/g, "%2529");

    let decodedUrl;
    try {
      decodedUrl = decodeURI(url);
    } catch (e) {
      decodedUrl = url;
    }

    const result = "[" + title + "](" + decodedUrl + ")";
    console.log(result);

    async function writeClipboard(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          return true;
        } catch (e) {
          // fallthrough to fallback method
        }
      }

      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        ta.style.top = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return !!ok;
      } catch (e) {
        return false;
      }
    }

    const ok = await writeClipboard(result);
    if (!ok) {
      alert(
        "Failed: Could not write to clipboard. Try clicking the page and retrying.",
      );
    }
  })();
})();
