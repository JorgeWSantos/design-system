import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { processSourceDir } from './process.js';
import { updateIndexFile } from './updateIndex.js';

// Corrigir __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos
const iconsDir = path.resolve(__dirname, '../src/_icons');
const imagesDir = path.resolve(__dirname, '../src/_images');
const logosDir = path.resolve(__dirname, '../src/_logos');
const iconsSeqmDir = path.resolve(__dirname, '../src/_iconsSEQM');
const finalDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');

// Verifica se as pastas temporárias existem
if (
  !fs.existsSync(iconsDir) &&
  !fs.existsSync(imagesDir) &&
  !fs.existsSync(logosDir) &&
  !fs.existsSync(iconsSeqmDir)
) {
  console.log(
    '⚠️  Nenhuma pasta src/_icons, src/_images, src/_logos ou src/_iconsSEQM existe. Rode "npm run generate" antes.'
  );
  process.exit(0);
}

// Cria a pasta final se necessário
if (!fs.existsSync(finalDir)) {
  fs.mkdirSync(finalDir, { recursive: true });
}

// Processa os diretórios de origem normalmente
const results = [
  processSourceDir(iconsDir, finalDir + '/icons'),
  processSourceDir(logosDir, finalDir + '/logos', /^svg/i),
  processSourceDir(iconsSeqmDir, finalDir + '/iconsSEQM', /^svg/i, 'SEQM'),
  processSourceDir(imagesDir, finalDir + '/images', /^svg/i, 'IMG'),
];

// Log separado: primeiro os ignorados (já existem), depois os gerados
const ignored = results.flatMap((result) => result.ignored);
const generated = results.flatMap((result) => result.generated);

if (ignored.length > 0) {
  console.log('\nIgnorado:');
  ignored.forEach((name) => console.log(`⏩ Ignorado (já existe): ${name}`));
}

console.log('\nGerado:');
if (generated.length > 0) {
  generated.forEach((name) => console.log(`✅ Movido e renomeado: ${name}`));
} else {
  console.log('(nenhum ícone novo)');
}
console.log('');

// Atualiza index.ts para garantir que todos os componentes estejam exportados
updateIndexFile(finalDir, indexFile);
