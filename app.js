document.addEventListener('DOMContentLoaded', function() {
    var body = document.querySelector('p');
    var textContent = body.textContent.trim(); // Trim to remove leading/trailing whitespaces

    // Extract the first word separately
    var words = textContent.split(' ');
    var firstWord = words.shift(); // Remove and get the first word

    // Split the content into sentences
    var sentences = textContent.split('. ');

    // Wrap and modify the first word of the entire content
    sentences[0] = '<span style="color:crimson">' + firstWord + '</span>' + sentences[0].substring(firstWord.length);

    for (var i = 1; i < sentences.length; i++) {
        words = sentences[i].split(' ');

        if (words.length > 0) {
            // Get the first word
            var currentFirstWord = words[0];

            // Wrap the first word with a span and add a class
            words[0] = '<span style="color:crimson">' + currentFirstWord + '</span>';

            // Update the sentence with the modified words
            sentences[i] = words.join(' ');
        }
    }

    // Join the sentences with '.' and update the body
    body.innerHTML = sentences.join('. ');
    
    
            // Audio button and element
        var audioButtonHTML = '<button id="playButton">𝄞</button>';
        var audioElementHTML = `
            <audio id="ambientSound" loop>
                <source src="music.mp3" type="audio/mp3">
            </audio>
        `;

        body.innerHTML += audioButtonHTML + audioElementHTML;
    
    var playButton = document.getElementById('playButton');
    var audio = document.getElementById('ambientSound');

    playButton.style.display = 'block';

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.innerText = '⚝';
        } else {
            audio.pause();
            audio.currentTime = 0;
            playButton.innerText = '𝄞';
        }
    });
    
     document.querySelector('#ambientSound').volume = 0.5
});


/*

function removeSessionCookie(cookieName, cookiePath) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=" + cookiePath + ";";
}
// Example usage
removeSessionCookie("exampleCookie", "/path"); // Set the correct path



function removeSessionCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}
// Example usage
removeSessionCookie("exampleCookie");



function removeSessionCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}
// Example usage
removeSessionCookie('bookmark');
*/