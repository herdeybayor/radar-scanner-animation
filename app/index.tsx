import RadarScannerExample from "@/components/RadarScanner/example";
import { Canvas, Circle, Group, Points, Path, Skia, vec, LinearGradient } from "@shopify/react-native-skia";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";
import { useDerivedValue, useSharedValue, withRepeat, withTiming, withDelay, Easing } from "react-native-reanimated";

export default function Index() {
    return <RadarScannerExample />;
}
