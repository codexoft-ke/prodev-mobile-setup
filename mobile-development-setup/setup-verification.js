// Mobile Development Environment Verification Script
// This script helps verify that your development environment is properly configured

const os = require('os');
const { execSync } = require('child_process');

console.log('📱 Mobile Development Environment Verification\n');

// System Information
console.log('🖥️  System Information:');
console.log(`   Platform: ${os.platform()}`);
console.log(`   Architecture: ${os.arch()}`);
console.log(`   Node.js Version: ${process.version}`);

// Check npm version
try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`   npm Version: ${npmVersion}`);
} catch (error) {
    console.log('   ❌ npm not found');
}

// Check Expo CLI
try {
    const expoVersion = execSync('npx expo --version', { encoding: 'utf8' }).trim();
    console.log(`   Expo CLI Version: ${expoVersion}`);
} catch (error) {
    console.log('   ❌ Expo CLI not available');
}

console.log('\n✅ Environment Check Complete!');
console.log('\nNext Steps:');
console.log('1. Install Expo Go on your mobile device from:');
console.log('   - Android: Google Play Store');
console.log('   - iOS: Apple App Store');
console.log('2. Create your first Expo project: npx create-expo-app MyFirstApp');
console.log('3. Start development: npx expo start');
console.log('4. Scan QR code with Expo Go app');
