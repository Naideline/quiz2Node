const fs = require('fs');

function copyFile(sourcePath, destinationPath) {
  fs.readFile(sourcePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo de origen:', err);
      return;
    }

    fs.writeFile(destinationPath, data, 'utf-8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de destino:', err);
        return;
      }

      console.log('El archivo ha sido copiado exitosamente.');
    });
  });
}

// Uso de la función copyFile
const sourceFile = 'origen.txt';
const destinationFile = 'destino.txt';

copyFile(sourceFile, destinationFile);
