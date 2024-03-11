javascript: (
  function () {
    const title = document.title
      .replace(/\[/g, '\\[')
      .replace(/\]/g, '\\]')
      .replace(/\|/g, '\\|')
      .replace(/\#/g, '\\#');

    const url = document.URL
      .replace(/\(/g, '%2528')
      .replace(/\)/g, '%2529');

    const decodedUrl = decodeURI(url);

    const result = '[' + title + '](' + decodedUrl + ')';
    console.log(result);

    try {
      navigator.clipboard.writeText(result);
    } catch (e) {
      alert('Failed: Could not write to clipboard.\n' + e);
    }
  }
)();
