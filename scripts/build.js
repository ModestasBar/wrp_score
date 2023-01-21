const { execSync } = require('child_process');

execSync('cat ./Dockerfile', { stdio: 'inherit' });
