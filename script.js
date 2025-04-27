document.getElementById('magicButton').addEventListener('click', function() {
    const messages = [
        "秘月期POPOO🤚🏻😮",
        "今天你PO了嗎🫵🏻🫵🏻😊",
        "你不知道你下一刻會遇到什麼樣的人😊",
        "我～也不知道🙂‍↔️🤭 "
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('result').innerText = randomMessage;
});
