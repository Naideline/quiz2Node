const fs = require("fs");

function copyFile(sourceFile, destinationFile) {
  fs.readFile(sourceFile, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo de origen ${sourceFile}:`, err);
      return;
    }

    fs.writeFile(destinationFile, data, "utf-8", (err) => {
      if (err) {
        console.error(
          `Error al escribir en el archivo de destino ${destinationFile}:`,err
        );
        return;
      }

      console.log(
        `El archivo ${sourceFile} ha sido copiado exitosamente en ${destinationFile}.`
      );
    });
  });
}

copyFile("origen.txt", "destino.txt");
