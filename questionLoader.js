
// QuestionLoader.js
// Determines correct questions based on grade, land, and building type (hospital/lab)

function getQuestionSet({ grade, land, building, callback }) {
  const landDifficulty = {
    1: "hard_below",
    2: "easy",
    3: "medium",
    4: "hard",
    5: "plus1"
  };

  const difficultyTier = landDifficulty[land];
  const safeGrade = parseInt(grade || "1");

  let script = document.createElement("script");
  let targetGrade = safeGrade;

  if (difficultyTier === "plus1") {
    targetGrade = Math.min(safeGrade + 1, 6);  // cap at Grade 6
  }

  const file = `grade_${targetGrade}_${building}.js`;
  script.src = file;
  script.onload = () => {
    const pool = window[`grade_${targetGrade}_${building}`];

    let selected = [];
    if (difficultyTier === "hard_below") {
      const below = Math.max(safeGrade - 1, 0);
      selected = window[`grade_${below}_${building}`]?.hard || pool.hard;
    } else if (difficultyTier === "easy") {
      selected = pool.easy;
    } else if (difficultyTier === "medium") {
      selected = pool.medium;
    } else if (difficultyTier === "hard") {
      selected = pool.hard;
    } else if (difficultyTier === "plus1") {
      selected = [...(pool.easy || []), ...(pool.medium || [])].slice(0, 50);
    }

    callback(selected.slice(0, 50));
  };

  script.onerror = () => {
    alert("Question file not found for grade " + targetGrade + ", building " + building);
    callback([]);
  };

  document.head.appendChild(script);
}
