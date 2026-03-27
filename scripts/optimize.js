const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const clientesDir = path.join(projectRoot, 'public/images/clientes');
const outClientesDir = path.join(projectRoot, 'public/clientes_optimizado');
const imagesDir = path.join(projectRoot, 'public/images');

if (!fs.existsSync(outClientesDir)) {
  fs.mkdirSync(outClientesDir, { recursive: true });
}

async function removeWhiteBackgroundAndSave(inputPath, outputPath, height, toWebp) {
  try {
    const image = sharp(inputPath);
    if (height) {
      image.resize({ height, withoutEnlargement: true });
    }

    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    // Fuzziness threshold for white
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] > 235 && data[i+1] > 235 && data[i+2] > 235) {
        data[i+3] = 0; // transparent
      }
    }

    let processed = sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    });

    if (toWebp) {
      await processed.webp({ quality: 85 }).toFile(outputPath);
    } else {
      await processed.png({ quality: 90 }).toFile(outputPath);
    }
    return true;
  } catch (err) {
    console.error('Error processing:', inputPath, err);
    return false;
  }
}

async function makeSolidWhite(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    for (let i = 0; i < data.length; i += 4) {
      // If background is white, make transparent
      if (data[i] > 235 && data[i+1] > 235 && data[i+2] > 235) {
        data[i+3] = 0; 
      } else {
        // Foreground becomes pure white
        data[i] = 255;
        data[i+1] = 255;
        data[i+2] = 255;
        // Boost alpha slightly to ensure solid edges if they were anti-aliased
        if (data[i+3] > 0) {
            data[i+3] = Math.min(255, data[i+3] + 50);
        }
      }
    }

    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    }).png().toFile(outputPath);
    return true;
  } catch (err) {
    console.error('Error processing solid white file:', err);
    return false;
  }
}

async function main() {
  let successCount = 0;
  
  // 1. Process client logos
  const files = fs.readdirSync(clientesDir);
  console.log(`Found ${files.length} potential client assets...`);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const outFilename = path.basename(file, ext) + '.webp';
      const outPath = path.join(outClientesDir, outFilename);
      const inPath = path.join(clientesDir, file);
      
      const success = await removeWhiteBackgroundAndSave(inPath, outPath, 60, true);
      if (success) successCount++;
    }
  }
  console.log(`✅ Processed ${successCount} client logos.`);

  // 2. Process AYSO Logo (Color)
  const aysoLogoPath = path.join(imagesDir, 'ayso-logo-1.jpeg');
  if (fs.existsSync(aysoLogoPath)) {
    const outAysoColor = path.join(imagesDir, 'logo-ayso-processed.png');
    await removeWhiteBackgroundAndSave(aysoLogoPath, outAysoColor, 80, false);
    console.log('✅ Processed A&SO logo (Color)');
    
    const outAysoWhite = path.join(imagesDir, 'logo-ayso-blanco.png');
    await makeSolidWhite(aysoLogoPath, outAysoWhite);
    console.log('✅ Processed A&SO logo (White)');
  } else {
    console.log('⚠️ Could not find ayso-logo-1.jpeg');
  }
}

main();
