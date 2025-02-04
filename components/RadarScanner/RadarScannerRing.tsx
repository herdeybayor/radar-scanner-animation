import { Circle, Group, mix } from "@shopify/react-native-skia";
import { useEffect } from "react";
import { useDerivedValue, useSharedValue, withRepeat, withTiming, withDelay, Easing } from "react-native-reanimated";
import type { RadarScannerRingProps } from "./types";

export function RadarScannerRing({ size, index, color, timing }: RadarScannerRingProps) {
    const progress = useSharedValue(0);

    const transform = useDerivedValue(() => {
        return [{ scale: mix(progress.value, 0.03, 1) }];
    });

    const opacity = useDerivedValue(() => mix(progress.value, 1, 0));

    useEffect(() => {
        progress.value = 0;
        progress.value = withDelay(
            index * timing.delay,
            withRepeat(
                withTiming(1, {
                    duration: timing.duration,
                    easing: Easing.out(Easing.ease),
                }),
                -1,
                true
            )
        );
    }, [progress, index, timing]);

    return (
        <Group origin={{ x: size / 2, y: size / 2 }} transform={transform} opacity={opacity}>
            <Circle color={color} cx={size / 2} cy={size / 2} r={size / 2} />
        </Group>
    );
}
