var sentences = ['Semicolons optional.', 'Best viewed in Sublime Text 3.', '#PCMR', 'This text is subject to change.', ];
var counter = 1;
var ticker = $("footer .ticker");
function changeText() {
    var el = ticker
      , text = sentences[counter]
      , oldText = el.text();
    var x = setInterval(function() {
        if (oldText.length != 0) {
            oldText = oldText.slice(0, -1);
            el.text(oldText);
        } else {
            setTimeout(function() {
                var y = setInterval(function() {
                    if (el.text().length != text.length) {
                        el.text(text.slice(0, el.text().length + 1));
                    } else {
                        setTimeout(function() {
                            if (counter >= sentences.length - 1)
                                counter = 0;
                            else
                                counter++;
                            changeText();
                        }, 5000);
                        clearInterval(y);
                    }
                }, 60);
            }, 60);
            clearInterval(x);
        }
    }, 60);
}
ticker.html(sentences[0]);
setTimeout(changeText, 5000);