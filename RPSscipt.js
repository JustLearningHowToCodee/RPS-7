fetch('outcome.json')
    .then(res => res.json())
    .then(data => {
        const player1 = document.getElementById('player1');
        const playBtn = document.getElementById('play');
        const outcome = document.getElementById('outcome');
        const history = document.getElementById('history');
        const playAgainBtn = document.getElementById('play-again');

        let playerScore = 0;
        let computerScore = 0;
        const items = Object.keys(data);

        // Populate Player 1 dropdown
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            player1.appendChild(option);
        });

        // Game logic
        playBtn.addEventListener('click', () => {
            const choice1 = player1.value;
            const choice2 = items[Math.floor(Math.random() * items.length)];

            const beats = data[choice1] ? .find(i => i.target === choice2);
            const loses = data[choice2] ? .find(i => i.target === choice1);

            let resultText = `🧑 Player: ${choice1} vs 🤖 Computer: ${choice2}<br/>`;

            if (choice1 === choice2) {
                resultText += "It's a tie!";
            } else if (beats) {
                resultText += `${choice1} ${beats.action} ${choice2} — You win! 🎉`;
                playerScore++;
            } else if (loses) {
                resultText += `${choice2} ${loses.action} ${choice1} — Computer wins! 💻`;
                computerScore++;
            } else {
                resultText += `No defined interaction — it's a mystery! 🤔`;
            }

            outcome.innerHTML = resultText;
            history.innerHTML += `<li>${resultText.replace(/<br\/>/g, ' ')}</li>`;
            updateScore();
            playBtn.disabled = true;
            playAgainBtn.style.display = 'inline-block';
        });

        playAgainBtn.addEventListener('click', () => {
            outcome.innerHTML = '';
            playBtn.disabled = false;
            playAgainBtn.style.display = 'none';
        });

        function updateScore() {
            document.getElementById('score').innerHTML = `
        🧑 Player: ${playerScore} | 🤖 Computer: ${computerScore}
      `;
        }
    });