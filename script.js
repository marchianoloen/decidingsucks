document.getElementById('decideButton').addEventListener('click', function() {
    var option1 = document.getElementById('option1').value;
    var option2 = document.getElementById('option2').value;

    if (option1 && option2) {
        var decision = Math.random() < 0.5 ? option1 : option2;
        document.getElementById('decisionText').textContent = decision;
        document.querySelector('#mainPage').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Please enter both options.');
    }
});

document.getElementById('makeAnotherDecision').addEventListener('click', function() {
    document.getElementById('result').style.display = 'none';
    document.querySelector('#mainPage').style.display = 'block';
    document.getElementById('option1').value = ''; // Clear input
    document.getElementById('option2').value = ''; // Clear input
});
