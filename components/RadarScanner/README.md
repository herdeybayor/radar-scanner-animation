# RadarScanner Component

A beautiful and customizable animated radar scanner component built with React Native Skia. Perfect for map interfaces, location markers, radar effects, or any scanning animation needs.

## Features

-   Smooth 360° rotation animation with customizable speed
-   Pulsating rings with configurable colors and timing
-   Gradient-based scanner beam
-   Centered marker with customizable colors
-   Built with React Native Skia for optimal performance
-   Fully typed with TypeScript

## Installation

1. Make sure you have the required dependencies:

```bash
npm install @shopify/react-native-skia react-native-reanimated
# or
yarn add @shopify/react-native-skia react-native-reanimated
```

2. Copy the `RadarScanner` folder to your components directory.

## Basic Usage

```tsx
import { RadarScanner } from "./components/RadarScanner";

function MyComponent() {
    return <RadarScanner size={200} />;
}
```

## Advanced Usage

```tsx
import { RadarScanner } from "./components/RadarScanner";

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

### Colors Configuration

The `colors` prop allows you to customize all colors in the component:

```tsx
interface Colors {
    rings?: string; // Color of the pulsating rings
    gradient?: {
        // Scanner beam gradient
        start: string; // Start color of the gradient
        end: string; // End color (usually with alpha 0)
    };
    center?: {
        // Center marker colors
        outer: string; // Outer ring color
        middle: string; // Middle ring color
        inner: string; // Inner circle color
    };
}
```

Default colors:

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

### Timing Configuration

The `timing` prop lets you control all animation durations:

```tsx
interface Timing {
    scanDuration?: number; // Full rotation duration in ms
    ringDuration?: number; // Ring pulse animation duration in ms
    ringDelay?: number; // Delay between ring animations in ms
}
```

Default timing:

```tsx
{
    scanDuration: 5000, // 5 seconds per rotation
    ringDuration: 2000, // 2 seconds per ring animation
    ringDelay: 300,     // 300ms delay between rings
}
```

## Implementation Details

The component is built using:

-   React Native Skia for high-performance 2D graphics
-   React Native Reanimated for smooth animations
-   TypeScript for type safety

Key features:

-   Uses shared values for optimal performance
-   Implements proper cleanup in useEffect
-   Maintains consistent 60 FPS
-   Properly handles component unmounting

## License

MIT
