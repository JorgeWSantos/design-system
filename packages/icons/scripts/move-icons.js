import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Corrigir __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos
const tempDir = path.resolve(__dirname, '../src/_temp');
const finalDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');

// Verifica se a pasta temporária existe
if (!fs.existsSync(tempDir)) {
  console.log('⚠️  Pasta src/_temp não existe. Rode "npm run generate" antes.');
  process.exit(0);
}

// Cria a pasta final se necessário
if (!fs.existsSync(finalDir)) {
  fs.mkdirSync(finalDir, { recursive: true });
}

const tempFiles = fs.readdirSync(tempDir).filter((f) => f.endsWith('.tsx'));
const exports = [];

for (const file of tempFiles) {
  const baseName = path.basename(file, '.tsx');
  const cleanedName = baseName.replace(/^svg/i, ''); // Remove prefixo svg
  const componentName = `${cleanedName}Icon`;

  const fromPath = path.join(tempDir, file);
  const toPath = path.join(finalDir, `${componentName}.tsx`);

  if (fs.existsSync(toPath)) {
    console.log(`⏩ Ignorado (já existe): ${componentName}`);
    continue;
  }

  // Lê e modifica o conteúdo
  let fileContent = fs.readFileSync(fromPath, 'utf-8');

  // Remove a linha de importação do React
  fileContent = fileContent.replace(
    /import\s+\*\s+as\s+React\s+from\s+['"]react['"];?\n?/g,
    ''
  );

  // Renomeia o nome do componente
  const regex = new RegExp(`const\\s+Svg${cleanedName}\\b`, 'g');
  fileContent = fileContent.replace(regex, `const ${componentName}`);

  // Atualiza o export default
  fileContent = fileContent.replace(
    new RegExp(`export\\s+default\\s+Svg${cleanedName}\\b`, 'g'),
    `export default ${componentName}`
  );

  // Escreve novo arquivo e remove o antigo
  fs.writeFileSync(toPath, fileContent);
  fs.unlinkSync(fromPath);

  console.log(`✅ Movido e renomeado: ${componentName}`);
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
