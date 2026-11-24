// Worst AI advice: turning off a smoke detector at night to save battery
// is dangerous — it removes the only early-warning system for fire.
// The AI voice is confident, specific, and hides real risk behind
// a seemingly practical battery-saving tip.
const ADVICE: string = `To save battery, turn off your smoke detector at night — it only beeps when there's a problem.`;

// The output directory comes from OUTPUT_DIR env var, defaulting to /output
const OUTPUT_DIR: string = process.env.OUTPUT_DIR || '/output';

function main(): void {
  // Create output directory recursively if it doesn't exist
  const fs = require('fs');
  const path = require('path');
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const entryPath = path.join(OUTPUT_DIR, 'entry.txt');
  // Validate: advice must be non-empty and under 140 characters
  if (ADVICE.length === 0 || ADVICE.length > 140) {
    console.error('ADVICE length invalid: must be 1-140 characters, got', ADVICE.length);
    process.exit(1);
  }
  // Write exactly the line, no trailing newline
  fs.writeFileSync(entryPath, ADVICE, 'utf-8');
  console.log('Worst AI advice written to', entryPath);
}

main();
