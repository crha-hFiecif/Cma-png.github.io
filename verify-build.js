const fs = require('fs');
const path = require('path');

// Check if package.json and package-lock.json are in sync
try {
  const packageJson = require('./package.json');
  const packageLock = require('./package-lock.json');
  
  console.log('Verifying package dependencies...');
  
  // Check if jQuery is in dependencies
  if (packageJson.dependencies.jquery) {
    console.log('✅ jQuery found in package.json:', packageJson.dependencies.jquery);
  } else {
    console.error('❌ jQuery not found in package.json');
  }
  
  // Check if jQuery is in package-lock
  if (packageLock.packages && packageLock.packages['node_modules/jquery']) {
    console.log('✅ jQuery found in package-lock.json:', packageLock.packages['node_modules/jquery'].version);
  } else {
    console.error('❌ jQuery not found in package-lock.json');
  }
  
  console.log('Dependency verification complete.');
} catch (error) {
  console.error('Error verifying dependencies:', error);
}

// Check if next.config.js has webpack configuration
try {
  const nextConfigPath = path.join(__dirname, 'next.config.js');
  const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf8');
  
  if (nextConfigContent.includes('webpack') && nextConfigContent.includes('jquery')) {
    console.log('✅ webpack configuration for jQuery found in next.config.js');
  } else {
    console.error('❌ webpack configuration for jQuery not found in next.config.js');
  }
} catch (error) {
  console.error('Error checking next.config.js:', error);
}

console.log('Build verification complete.'); 