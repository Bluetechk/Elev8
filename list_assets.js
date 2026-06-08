import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const dirs = fs.readdirSync(assetsDir);
console.log('DIRS IN ASSETS:', dirs);

const targetDirName = dirs.find(d => d.includes('Man_interacting'));
if (targetDirName) {
  const subDir = path.join(assetsDir, targetDirName);
  const files = fs.readdirSync(subDir);
  console.log('TARGET DIRECTORY:', targetDirName);
  console.log('TOTAL FILES:', files.length);
  console.log('SAMPLE FILES:', files.slice(0, 5));
} else {
  console.log('Target directory not found starting with Man_interacting');
}
