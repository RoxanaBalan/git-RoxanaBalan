// 2. Show a confirm dialog with the text "Hey are you still there?", every 5 seconds exactly.

function conf() {
  confirm('Hey are you still there?');
  setTimeout(conf, 5000);
}

conf();

