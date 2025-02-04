# MarkerScanner Component

A beautiful and customizable animated marker scanner component built with React Native Skia. Perfect for map interfaces, location markers, or any scanning animation needs.

## Features

-   Smooth 360° rotation animation
-   Pulsating rings effect
-   Customizable colors and timing
-   Built with React Native Skia for optimal performance
-   Fully typed with TypeScript

## Installation

1. Make sure you have the required dependencies:

```bash
npm install @shopify/react-native-skia react-native-reanimated
# or
yarn add @shopify/react-native-skia react-native-reanimated
```

2. Copy the `MarkerScanner` folder to your components directory.

## Usage

```tsx
import { MarkerScanner } from "./components/MarkerScanner";

function MyComponent() {
    return (
        <MarkerScanner
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
            timing={{
                scanDuration: 5000, // 5 seconds per rotation
                ringDuration: 2000, // 2 seconds per ring animation
                ringDelay: 300, // 300ms delay between rings
            }}
        />
    );
}
```

## Props

| Prop   | Type   | Required | Default   | Description                             |
| ------ | ------ | -------- | --------- | --------------------------------------- |
| size   | number | No       | 200       | Width and height of the component       |
| colors | Colors | No       | See below | Object containing color configurations  |
| timing | Timing | No       | See below | Object containing timing configurations |

### Default Colors

```tsx
{
    rings: "#aa7ce3c5",
    gradient: {
        start: "#8249C6",
        end: "#9971CA00",
    },
    center: {
        outer: "#FFFFFF",
        middle: "#B882FA",
        inner: "#6D39AA",
    }
}
```

### Default Timing

```tsx
{
    scanDuration: 5000, // 5 seconds per rotation
    ringDuration: 2000, // 2 seconds per ring animation
    ringDelay: 300, // 300ms delay between rings
}
```

## License

MIT
