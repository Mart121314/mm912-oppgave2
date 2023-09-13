let input = document.getElementById("userGuess");
      const MAX_NUMBER = 100;
      const MIN_NUMBER = 1;
      let pastGuesses = [];
      const randomNumber =
        Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

      function GuessGame() {
        const userGuessElement = document.getElementById("userGuess");
        const feedbackElement = document.getElementById("feedback");
        const pastGuessesElement = document.getElementById("pastGuesses");
        const number = parseInt(userGuessElement.value);

        if (number < MIN_NUMBER || number > MAX_NUMBER) {
          feedbackElement.innerHTML = `<li>⛔⛔⛔That's not a number between ${MIN_NUMBER} and ${MAX_NUMBER}, try again</li>`;
          return;
        } else if (isNaN(number)) {
          feedbackElement.innerHTML = `<li> ❓❓❓ That's not a number, try again</li>`;
          return;
        }

        pastGuesses.push(number);

        updateGuessedNumbersList(pastGuessesElement);

        if (number === randomNumber) {
          feedbackElement.innerHTML = `<li>🙌🤩🎊You guessed it: ${userGuessElement.value}</li>`;
        } else if (number < randomNumber) {
          feedbackElement.innerHTML = `<li>⬇️⬇️⬇️ Too low: ${userGuessElement.value}</li>`;
        } else {
          feedbackElement.innerHTML = `<li>⬆️⬆️⬆️ Too High: ${userGuessElement.value}</li>`;
        }
      }
      function updateGuessedNumbersList(listElement) {
        listElement.innerHTML = "";
        for (const guess of pastGuesses) {
          const listItem = document.createElement("li");
          listItem.textContent = guess;
          listElement.appendChild(listItem);
        }
      }

      input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          GuessGame();
        }
      });