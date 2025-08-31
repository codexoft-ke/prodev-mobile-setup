# Quick Reference: Expo Go Mobile Development

## Essential Commands

```bash
# Create new Expo project
npx create-expo-app ProjectName

# Create with specific template
npx create-expo-app --template blank MyApp
npx create-expo-app --template tabs MyApp
npx create-expo-app --template typescript MyApp

# Start development server
npx expo start

# Start with specific options
npx expo start --clear          # Clear cache
npx expo start --localhost      # Local network only
npx expo start --tunnel         # Use tunnel for external access
npx expo start --web           # Open in web browser
```

## Expo Go Installation Links

### Android
- **Google Play Store**: [Install Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)

### iOS  
- **Apple App Store**: [Install Expo Go for iOS](https://apps.apple.com/app/expo-go/id982107779)

## Device Testing Workflow

1. **Start Development Server**
   ```bash
   cd YourProject
   npx expo start
   ```

2. **Connect Device**
   - Open Expo Go app
   - Scan QR code from terminal/browser
   - Or manually enter the development URL

3. **Development Mode Features**
   - Live reload on file changes
   - Error overlays for debugging
   - Remote debugging capabilities
   - Performance monitoring

## Common File Structure

```
YourExpoProject/
├── App.js                 # Main app component
├── app.json              # App configuration
├── package.json          # Dependencies
├── babel.config.js       # Babel config
├── assets/               # Static assets
│   ├── icon.png         # App icon
│   ├── splash.png       # Splash screen
│   └── adaptive-icon.png # Android adaptive icon
├── components/           # Reusable components
├── screens/             # Screen components
├── navigation/          # Navigation setup
└── utils/              # Helper functions
```

## Useful Expo APIs for Mobile Development

- **Camera**: `expo-camera`
- **Location**: `expo-location`
- **Push Notifications**: `expo-notifications`
- **File System**: `expo-file-system`
- **SQLite**: `expo-sqlite`
- **Sensors**: `expo-sensors`
- **Audio/Video**: `expo-av`

## Development Tips

- Use `console.log()` for debugging (visible in terminal)
- Shake device to open developer menu
- Use TypeScript for better development experience
- Test on multiple device sizes
- Consider device orientation changes
- Test offline functionality when applicable

## Next Steps for Production

1. **Build for Production**
   ```bash
   npx expo build:android
   npx expo build:ios
   ```

2. **App Store Deployment**
   - Configure app.json for store requirements
   - Generate appropriate icons and splash screens
   - Test thoroughly on target devices
   - Follow platform-specific submission guidelines
