# Mobile Development Environment Setup

## Objective
This repository documents the setup process for a mobile development environment using Expo Framework for React Native. The goal is to create a smooth development experience that simplifies mobile app development and testing.

## Prerequisites
Before starting mobile development, ensure you have the following components installed:

- ✅ **Node.js LTS** - JavaScript runtime environment
- ✅ **VS Code** - Recommended IDE for development
- ✅ **Compatible OS** - macOS, Linux, or Windows
- 📱 **Expo Go** - Mobile app for testing React Native applications

## Why Expo Go?

Mobile development traditionally relies on device emulators, which can be resource-intensive and costly to maintain across the ever-evolving mobile ecosystem (iPhone 7 → iPhone 16 Pro Max, various Android devices).

**Expo Go Benefits:**
- Cost-effective solution for testing React Native applications
- Runs directly on your physical device
- Supports both iOS and Android seamlessly
- Eliminates need for multiple emulators
- Real device testing experience

## Setup Process

### Step 1: Install Expo Go on Your Device

1. **Visit the Official Expo Go Homepage**
   - Navigate to: https://expo.dev/go
   - Select the latest SDK version

2. **Install on Your Device**
   - **Android Users**: Install from Google Play Store
   - **iOS Users**: Install from Apple App Store

3. **Setup Your Account**
   - Open the Expo Go app on your device
   - Create a new account or log in with existing credentials

### Step 2: Verify Your Development Environment

Let's check that all prerequisites are properly installed:

#### Node.js LTS Verification
```bash
node --version
npm --version
```

#### VS Code Verification
- Ensure VS Code is installed and updated to the latest version
- Recommended extensions for React Native development:
  - React Native Tools
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter

## Development Workflow

Once Expo Go is installed, your typical development workflow will be:

1. Create a new Expo project: `npx create-expo-app ProjectName`
2. Start the development server: `npx expo start`
3. Scan the QR code with Expo Go app
4. Test your app in real-time on your physical device

## Challenges and Solutions

### Common Setup Challenges Encountered

1. **Package Installation Warnings**
   - ⚠️ **Issue**: Deprecated package warnings during Expo CLI installation
   - ✅ **Solution**: These are non-critical warnings from npm dependencies. The installation completes successfully despite the warnings.
   - **Example Output**: 
     ```
     npm WARN deprecated inflight@1.0.6: This module is not supported
     npm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
     ```

2. **Network Issues**
   - **Issue**: Device can't connect to development server
   - **Solution**: Ensure your development machine and mobile device are on the same WiFi network
   - **Alternative**: Use tunnel mode with `npx expo start --tunnel`

3. **Firewall Restrictions**
   - **Issue**: Development server blocked by firewall
   - **Solution**: Configure firewall to allow Expo development server (ports 19000-19006)

4. **Device Compatibility**
   - **Issue**: Older devices may not support latest Expo Go version
   - **Solution**: Check device requirements on Expo documentation

### Troubleshooting Tips

- **Clear Cache**: Clear Expo Go cache if experiencing loading issues
- **Restart Server**: Restart development server if changes aren't reflecting
- **Check Logs**: Monitor console logs for detailed error messages
- **Network Debug**: Use `npx expo start --localhost` for local development
- **QR Code Issues**: Manually enter the development URL in Expo Go if QR scanning fails

### Development Environment Status

**System Specifications:**
- Platform: Linux Ubuntu 24.04.2 LTS
- Architecture: x64
- Development Container: VS Code Dev Container
- Node.js: v22.17.0 (LTS)
- npm: v9.8.1
- Expo CLI: v0.24.20

**Setup Completion:**
- ✅ Node.js LTS verified
- ✅ VS Code environment ready
- ✅ Expo CLI installed and functional
- ✅ Sample project created successfully
- 📱 **Next**: Install Expo Go on your mobile device

## Demo Project Setup

I've created a sample Expo project to demonstrate the complete workflow:

```bash
# Navigate to the demo project
cd ExpoGoDemo

# Start the development server
npx expo start
```

### Project Structure
```
ExpoGoDemo/
├── App.js              # Main application component
├── app.json           # Expo configuration
├── package.json       # Dependencies and scripts
├── babel.config.js    # Babel configuration
└── assets/           # Images, fonts, and other assets
```

### Testing with Expo Go

1. **Start Development Server**
   ```bash
   cd ExpoGoDemo
   npx expo start
   ```

2. **Connect Your Device**
   - A QR code will appear in your terminal or browser
   - Open Expo Go app on your device
   - Scan the QR code to load your app

3. **Live Reload**
   - Make changes to `App.js`
   - See changes instantly on your device
   - No need to rebuild or restart

## Setup Verification

Run the verification script to check your environment:

```bash
node mobile-development-setup/setup-verification.js
```

**Environment Status:**
- ✅ Node.js v22.17.0 installed
- ✅ npm v9.8.1 available  
- ✅ Expo CLI v0.24.20 ready
- ✅ Linux x64 development environment
- ✅ Sample project created successfully

## Next Steps

With Expo Go successfully installed, you're ready to:
- ✅ Test the demo project on your device
- Create your first custom React Native project
- Test applications on your physical device
- Explore Expo's extensive library of native APIs
- Deploy apps for testing with team members

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Go Download Page](https://expo.dev/go)

---

**Setup Status**: ✅ Environment Ready for Mobile Development