const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function generateAssets() {
  console.log('--- Iniciando generación de activos de marca ---');

  try {
    // 1. Generar opengraph-image.png (1200x630)
    // Usaremos logo-ayso-blanco.png y lo centraremos en un canvas azul corporativo
    const logoBlancoPath = path.join(IMAGES_DIR, 'logo-ayso-blanco.png');
    
    // Crear un fondo azul corporativo (#006489) o blanco. El usuario pidió profesional.
    // Usaremos blanco para que el logo se vea limpio.
    await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 0, g: 100, b: 137, alpha: 1 } // #006489 corporativo
      }
    })
    .composite([
      {
        input: await sharp(logoBlancoPath)
          .resize(800, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'opengraph-image.png'));
    console.log('✅ opengraph-image.png generado (1200x630)');

    // 2. Generar apple-icon.png (180x180)
    // Usaremos el logo procesado (círculo)
    const logoCirclePath = path.join(IMAGES_DIR, 'logo-ayso-processed.png');
    await sharp(logoCirclePath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(PUBLIC_DIR, 'apple-icon.png'));
    console.log('✅ apple-icon.png generado (180x180)');

    // 3. Generar icon.png y favicon.ico (32x32)
    // Nota: favicon.ico suele ser un conjunto de tamaños, pero icon.png es suficiente para Next.js
    await sharp(logoCirclePath)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(PUBLIC_DIR, 'icon.png'));
    console.log('✅ icon.png generado (32x32)');

    // Copiar icon.png a favicon.ico (truco simple si no tenemos conversor ico)
    fs.copyFileSync(path.join(PUBLIC_DIR, 'icon.png'), path.join(PUBLIC_DIR, 'favicon.ico'));
    console.log('✅ favicon.ico copiado desde icon.png');

    console.log('--- Proceso completado con éxito ---');
  } catch (error) {
    console.error('❌ Error generando activos:', error);
  }
}

generateAssets();
