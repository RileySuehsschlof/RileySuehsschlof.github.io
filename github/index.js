var savedVotes = {
    maxwell: 7,
    mona: 4,
    tenley: 6
};

function showVotes() {
    var temp = document.getElementById('temp');
    temp.style.display = 'none';
    var pollResults = document.getElementById('pollResults');
    pollResults.innerHTML = `<p>Maxwell: ${savedVotes.maxwell} votes<br/>Mona: ${savedVotes.mona} votes<br/>Tenley: ${savedVotes.tenley} votes</p>`;
}

function submitForm() {
    var chosenCat = document.querySelector(`input[name="favCat"]:checked`);
    var catV = chosenCat ? chosenCat.value : null;
    var nameInput = document.getElementById('name');
    var name = nameInput.value.trim();

    if (name !== '' && chosenCat) {
        savedVotes[catV]++;
        showVotes();
        nameInput.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var targetElement = document.querySelector(window.location.hash);

    if (targetElement) {
        var headerHeight = 55.6;
        window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }
});