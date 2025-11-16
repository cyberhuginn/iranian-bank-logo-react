// scripts/build-icons.js
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../icons');
const outputFile = path.join(__dirname, '../src/iconMap.js');

const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));

let output = 'export const iconMap = {\n';

files.forEach(file => {
    const name = file.replace('.svg', '');
    const content = fs.readFileSync(path.join(iconsDir, file), 'utf8');
    const base64 = Buffer.from(content).toString('base64');
    output += `  "${name}": "data:image/svg+xml;base64,${base64}",\n`;
});

output += '};\n';

fs.writeFileSync(outputFile, output);
console.log('✅ Icons built successfully!');