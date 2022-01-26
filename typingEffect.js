var app = {
    typingElement: document.getElementById('typing-element'),
    info: [
        'Nguyễn Văn Hào',
        '18 years old'
    ],
    speed: 70,
    indexText: 0,
    start: function() {
        var _this = this
        var indexChar = 0;

        function typing() {
            var txt = _this.info[_this.indexText % _this.info.length];

            function addText() {
                if (indexChar < txt.length) {
                    indexChar++;
                    _this.typingElement.innerHTML = txt.substring(0, indexChar);
                    setTimeout(addText, _this.speed);
                } else
                if (indexChar === txt.length) {
                    setTimeout(removeText, _this.speed * 20);
                }
            };

            function removeText() {
                if (indexChar > 0) {
                    indexChar--
                    _this.typingElement.innerHTML = txt.substring(0, indexChar);
                    setTimeout(removeText, _this.speed);
                } else
                if (indexChar === 0) {
                    _this.indexText++;
                    setTimeout(typing, _this.speed);
                }
            }
            addText()
        }
        typing()
    }
}
app.start()