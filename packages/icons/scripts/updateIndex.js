import fs from 'fs';
import path from 'path';

// Gera um index.ts numa pasta, exportando todos os arquivos .tsx dela
function writeIndexForDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.tsx'));
  const exportLines = files.map((f) => {
    const name = path.basename(f, '.tsx');
    return `export { default as ${name} } from './${name}';`;
  });
  fs.writeFileSync(path.join(dir, 'index.ts'), exportLines.join('\n') + '\n');
}

// Atualiza index.ts principal para reexportar os sub-indexes
function updateIndexFile(finalDir, indexFile) {
  const subdirs = ['icons', 'logos', 'iconsSEQM'];
  subdirs.forEach((sub) => {
    writeIndexForDir(path.join(finalDir, sub));
  });
  const exportLines = subdirs.map((sub) => `export * from './components/${sub}';`);
  fs.writeFileSync(indexFile, exportLines.join('\n') + '\n');
  console.log('📦 index.ts atualizado com todos os componentes.');
}

export { updateIndexFile };
