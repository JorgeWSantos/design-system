import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrigir __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos corrigidos
const tempDir = path.resolve(__dirname, '../src/_temp'); // <-- AQUI!
const finalDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');

// Verifica se a pasta temporária existe
if (!fs.existsSync(tempDir)) {
  console.log('⚠️  Pasta src/_temp não existe. Rode "npm run generate" antes.');
  process.exit(0);
}

// Cria pasta de destino se necessário
if (!fs.existsSync(finalDir)) {
  fs.mkdirSync(finalDir, { recursive: true });
}

const tempFiles = fs.readdirSync(tempDir).filter((f) => f.endsWith('.tsx'));
const exports = [];

for (const file of tempFiles) {
  const fromPath = path.join(tempDir, file);
  const toPath = path.join(finalDir, file);
  const componentName = path.basename(file, '.tsx');

  if (fs.existsSync(toPath)) {
    console.log(`⏩ Ignorado (já existe): ${componentName}`);
    continue;
  }

  fs.renameSync(fromPath, toPath);
  console.log(`✅ Movido: ${componentName}`);
  exports.push(
    `export { default as ${componentName} } from './components/${componentName}';`
  );
}

// Atualiza index.ts
if (exports.length > 0) {
  let indexContent = '';
  if (fs.existsSync(indexFile)) {
    indexContent = fs.readFileSync(indexFile, 'utf-8');
  }

  const newExports = exports.filter((e) => !indexContent.includes(e));
  if (newExports.length > 0) {
    fs.appendFileSync(indexFile, '\n' + newExports.join('\n') + '\n');
    console.log('📦 index.ts atualizado');
  }
} else {
  console.log('✅ Nenhum novo componente a mover');
}
