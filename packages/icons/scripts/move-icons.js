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
const logosDir = path.resolve(__dirname, '../src/_logos');
const iconsSeqmDir = path.resolve(__dirname, '../src/_iconsSEQM');
const finalDir = path.resolve(__dirname, '../src/components');
const indexFile = path.resolve(__dirname, '../src/index.ts');

// Verifica se as pastas temporárias existem
if (
  !fs.existsSync(iconsDir) &&
  !fs.existsSync(logosDir) &&
  !fs.existsSync(iconsSeqmDir)
) {
  console.log(
    '⚠️  Nenhuma pasta src/_icons, src/_logos ou src/iconsSEQM existe. Rode "npm run generate" antes.'
  );
  process.exit(0);
}

// Cria a pasta final se necessário
if (!fs.existsSync(finalDir)) {
  fs.mkdirSync(finalDir, { recursive: true });
}

// Processa os diretórios de origem normalmente
processSourceDir(iconsDir, finalDir);
processSourceDir(logosDir, finalDir, /^svg/i);
processSourceDir(iconsSeqmDir, finalDir, /^svg/i, 'SEQM');

// Atualiza index.ts para garantir que todos os componentes estejam exportados
updateIndexFile(finalDir, indexFile);
