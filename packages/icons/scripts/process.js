import fs from 'fs';
import path from 'path';
import { toPascalCase } from './utils.js';

// Função para processar arquivos de uma pasta e gerar componentes
function processSourceDir(sourceDir, finalDir, prefixToRemove = /^svg/i, postfix = '') {
  if (!fs.existsSync(sourceDir)) return [];
  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.tsx'));
  const exports = [];

  for (const file of files) {
    const baseName = path.basename(file, '.tsx');
    const cleanedName = baseName.replace(prefixToRemove, '');
    const pascalName = toPascalCase(cleanedName);
    // Adiciona o sufixo SEQM se postfix for passado
    const componentName = `${pascalName}Icon${postfix}`;

    const fromPath = path.join(sourceDir, file);
    const toPath = path.join(finalDir, `${componentName}.tsx`);

    if (fs.existsSync(toPath)) {
      console.log(`⏩ Ignorado (já existe): ${componentName}`);
      continue;
    }

    let fileContent = fs.readFileSync(fromPath, 'utf-8');
    fileContent = fileContent.replace(
      /import\s+\*\s+as\s+React\s+from\s+['"]react['"];?\n?/g,
      ''
    );
    const regex = new RegExp(`const\\s+Svg${cleanedName}\\b`, 'g');
    fileContent = fileContent.replace(regex, `const ${componentName}`);
    fileContent = fileContent.replace(
      new RegExp(`export\\s+default\\s+Svg${cleanedName}\\b`, 'g'),
      `export default ${componentName}`
    );
    fileContent = fileContent.replace(
      /(<path[^>]*?)\sfill="([^"]+)"([^>]*?>)/g,
      (match, before, color, after) => {
        if (before.includes('fill={')) return match;
        return `${before} fill={props?.fill ? props.fill : '${color}'}${after}`;
      }
    );
    fs.writeFileSync(toPath, fileContent);
    fs.unlinkSync(fromPath);

    console.log(`✅ Movido e renomeado: ${componentName}`);
    exports.push(
      `export { default as ${componentName} } from './components/${componentName}';`
    );
  }
  return exports;
}

export { processSourceDir };
