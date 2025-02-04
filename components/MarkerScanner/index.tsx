import { Canvas, Circle, Group, Path, vec, LinearGradient } from "@shopify/react-native-skia";
import { useEffect } from "react";
import { useDerivedValue, useSharedValue, withRepeat, withTiming, Easing } from "react-native-reanimated";
import { MarkerScannerRing } from "./MarkerScannerRing";
import { DEFAULT_SCANNER_CONFIG, CIRCLE_SIZES } from "./constants";
import { createScannerPath, getCenterPoint, createVectorPoint } from "./utils";
import type { MarkerScannerProps } from "./types";

export function MarkerScanner({ size = DEFAULT_SCANNER_CONFIG.size, colors = DEFAULT_SCANNER_CONFIG.colors, timing = DEFAULT_SCANNER_CONFIG.timing }: MarkerScannerProps) {
    const center = getCenterPoint(size);
    const path = createScannerPath(size);
    const rotate = useSharedValue(0);

    const transform = useDerivedValue(() => {
        return [{ rotate: rotate.value }];
    });

    useEffect(() => {
        rotate.value = withRepeat(
            withTiming(2 * Math.PI, {
                duration: timing?.scanDuration ?? DEFAULT_SCANNER_CONFIG.timing.scanDuration,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    }, [rotate, timing?.scanDuration]);

    const ringColor = colors?.rings ?? DEFAULT_SCANNER_CONFIG.colors.rings;
    const ringDuration = timing?.ringDuration ?? DEFAULT_SCANNER_CONFIG.timing.ringDuration;
    const ringDelay = timing?.ringDelay ?? DEFAULT_SCANNER_CONFIG.timing.ringDelay;
    const gradientStart = colors?.gradient?.start ?? DEFAULT_SCANNER_CONFIG.colors.gradient.start;
    const gradientEnd = colors?.gradient?.end ?? DEFAULT_SCANNER_CONFIG.colors.gradient.end;
    const centerOuter = colors?.center?.outer ?? DEFAULT_SCANNER_CONFIG.colors.center.outer;
    const centerMiddle = colors?.center?.middle ?? DEFAULT_SCANNER_CONFIG.colors.center.middle;
    const centerInner = colors?.center?.inner ?? DEFAULT_SCANNER_CONFIG.colors.center.inner;

    return (
        <Canvas style={{ width: size, height: size }}>
            {[0, 1, 2].map((index) => (
                <MarkerScannerRing
                    key={index}
                    size={size}
                    index={index}
                    color={ringColor}
                    timing={{
                        duration: ringDuration,
                        delay: ringDelay,
                    }}
                />
            ))}

            <Group origin={center} transform={transform} opacity={0.4}>
                <LinearGradient
                    colors={[gradientStart, gradientEnd]}
                    origin={vec(size / 2, size / 2)}
                    start={createVectorPoint(size, 0.5, 0)}
                    end={createVectorPoint(size, 0.5, 1)}
                    positions={[0.2, 1]}
                />
                <Path path={path} />
            </Group>

            <Group origin={center}>
                <Circle color={centerOuter} cx={size / 2} cy={size / 2} r={size * CIRCLE_SIZES.outer} />
                <Circle color={centerMiddle} cx={size / 2} cy={size / 2} r={size * CIRCLE_SIZES.middle} />
                <Circle color={centerInner} cx={size / 2} cy={size / 2} r={size * CIRCLE_SIZES.inner} />
            </Group>
        </Canvas>
    );
}

export type { MarkerScannerProps } from "./types";
