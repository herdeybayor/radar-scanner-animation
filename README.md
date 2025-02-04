# Radar Scanner Demo 🎯

A demo project showcasing a beautiful and customizable radar scanner animation built with React Native Skia and Expo.

![Demo Preview](./assets/demo.gif)

## Overview

This project demonstrates a reusable radar scanner component that can be used in map interfaces, location markers, or any scanning animation needs. The component features smooth 360° rotation animation, pulsating rings effect, and is fully customizable.

## Try it out

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/radar-scanner-demo.git
    cd radar-scanner-demo
    ```

2. Install dependencies

    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the app
    ```bash
    npx expo start
    ```

You can run the demo on:

-   [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
-   [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
-   [Expo Go](https://expo.dev/go) on your physical device

## Project Structure

-   `/app` - Demo application using Expo Router
-   `/components/RadarScanner` - The reusable radar scanner component (see its [README](./components/RadarScanner/README.md) for component documentation)
-   `/assets` - Images and other static assets

## Using the Component

To use the RadarScanner in your own project, you can:

1. Copy the entire `/components/RadarScanner` directory to your project
2. Follow the installation and usage instructions in the [component's README](./components/RadarScanner/README.md)

Quick example:

```tsx
import { RadarScanner } from "@/components/RadarScanner";

function MyComponent() {
    return (
        <RadarScanner
            size={200}
            colors={{
                rings: "#aa7ce3c5",
                gradient: {
                    start: "#8249C6",
                    end: "#9971CA00",
                },
                center: {
                    outer: "#FFFFFF",
                    middle: "#B882FA",
                    inner: "#6D39AA",
                },
            }}
        />
    );
}
```

## Tech Stack

-   [Expo](https://docs.expo.dev/) - Development platform
-   [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/) - 2D graphics
-   [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) - Animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
