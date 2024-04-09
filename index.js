setTimeout(() => {
  const imgs = document.getElementsByTagName('img');

  for (const img of imgs) {
    img.src = 'https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/433447553_719977140332239_8859953692449968340_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1MdSRhJ0JEoAb6q6Zjy&_nc_ht=scontent-hkg1-1.xx&oh=00_AfCAwm9VS8eWkpNzVdUEa4GreARwh8VgoZvTIO7anXr9pg&oe=661B162D';
  }
}, 5000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "change-text") {
    // Example: Change the selected text
    const selection = window.getSelection();
    console.log({ message });
    console.log({ selection });
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      console.log({ range });
      range.deleteContents();
      range.insertNode(document.createTextNode(message.selectText)); // Change text to uppercase
    }
  }
});