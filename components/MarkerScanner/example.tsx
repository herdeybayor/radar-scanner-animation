import { View, Dimensions } from "react-native";
import { MarkerScanner } from "./index";

const _windowWidth = Dimensions.get("window").width;
const _canvasWidth = _windowWidth * 0.8;

export default function MarkerScannerExample() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <MarkerScanner
                size={_canvasWidth}
                // Optional custom colors
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
                // Optional custom timing
                timing={{
                    scanDuration: 5000, // 5 seconds per rotation
                    ringDuration: 2000, // 2 seconds per ring animation
                    ringDelay: 300, // 300ms delay between rings
                }}
            />
        </View>
    );
}
