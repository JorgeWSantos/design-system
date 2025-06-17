import fs from 'fs';
import path from 'path';

// Atualiza index.ts para garantir que todos os componentes estejam exportados
function updateIndexFile(finalDir, indexFile) {
  const componentFiles = fs.readdirSync(finalDir).filter((f) => f.endsWith('.tsx'));
  const exportLines = componentFiles.map((f) => {
    const name = path.basename(f, '.tsx');
    return `export { default as ${name} } from './components/${name}';`;
  });
  fs.writeFileSync(indexFile, exportLines.join('\n') + '\n');

  console.log('📦 index.ts atualizado com todos os componentes.');
}

export { updateIndexFile };
