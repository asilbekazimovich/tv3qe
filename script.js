const questions = [
    { question: "Savol 1: flag1 ni kiriting", answer: "flag{one}" },
    { question: "Savol 2: flag2 ni kiriting", answer: "flag{two}" },
    { question: "Savol 3: flag3 ni kiriting", answer: "flag{three}" },
    { question: "Savol 4: flag4 ni kiriting", answer: "flag{four}" },
    { question: "Savol 5: flag5 ni kiriting", answer: "flag{five}" },
    { question: "Savol 6: flag6 ni kiriting", answer: "flag{six}" },
    { question: "Savol 7: flag7 ni kiriting", answer: "flag{seven}" },
    { question: "Savol 8: flag8 ni kiriting", answer: "flag{eight}" },
    { question: "Savol 9: flag9 ni kiriting", answer: "flag{nine}" },
    { question: "Savol 10: flag10 ni kiriting", answer: "flag{ten}" },
  ];

  let currentIndex = 0;

  function loadQuestion() {
    document.getElementById("questionTitle").innerText = questions[currentIndex].question;
    document.getElementById("answerInput").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("result").className = "result";
    document.getElementById("progress").innerText = `Savol ${currentIndex + 1} / ${questions.length}`;
  }

  function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (userAnswer === questions[currentIndex].answer) {
      resultDiv.textContent = "✅ To'g'ri javob!";
      resultDiv.className = "result correct";
    } else {
      resultDiv.textContent = "❌ Noto‘g‘ri. Yana urinib ko‘ring.";
      resultDiv.className = "result wrong";
    }
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      loadQuestion();
    }
  }

  function prevQuestion() {
    if (currentIndex > 0) {
      currentIndex--;
      loadQuestion();
    }
  }

  // Boshlang'ich yuklash
  loadQuestion();