
import { additionSpec } from './additionSpec.js';
import { subtractionSpec } from './subtractionSpec.js';
import { multiplicationSpec } from './multiplicationSpec.js';
import { divisionSpec } from './divisionSpec.js';

import { generateAdditionQuestion } from './additionBuilder.js';
import { generateSubtractionQuestion } from './subtractionBuilder.js';
import { generateMultiplicationQuestion } from './multiplicationBuilder.js';
import { generateDivisionQuestion } from './divisionBuilder.js';

// Filter available operations based on grade and difficulty
function getValidOperations(grade, difficulty) {
  const valid = [];
  if (additionSpec[grade]?.[difficulty]) valid.push('addition');
  if (subtractionSpec[grade]?.[difficulty]) valid.push('subtraction');
  if (multiplicationSpec[grade]?.[difficulty]) valid.push('multiplication');
  if (divisionSpec[grade]?.[difficulty]) valid.push('division');
  return valid;
}

// Main equation query function
export function generateEquation(grade, difficulty) {
  const availableOps = getValidOperations(grade, difficulty);
  if (availableOps.length === 0) {
    throw new Error(`No valid operations available for grade ${grade} and difficulty ${difficulty}`);
  }

  const operation = availableOps[Math.floor(Math.random() * availableOps.length)];

  switch (operation) {
    case 'addition':
      return generateAdditionQuestion(grade, difficulty);
    case 'subtraction':
      return generateSubtractionQuestion(grade, difficulty);
    case 'multiplication':
      return generateMultiplicationQuestion(grade, difficulty);
    case 'division':
      return generateDivisionQuestion(grade, difficulty);
    default:
      throw new Error('Unsupported operation: ' + operation);
  }
}
