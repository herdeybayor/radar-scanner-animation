import { Skia, vec } from "@shopify/react-native-skia";
import { SCANNER_PATH_ANGLES } from "../constants";

export const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

export const createScannerPath = (size: number) => {
    const center = size / 2;
    const path = Skia.Path.Make();

    path.moveTo(center, center);
    path.lineTo(center * Math.cos(degreesToRadians(SCANNER_PATH_ANGLES.start)) + center, center * Math.sin(degreesToRadians(SCANNER_PATH_ANGLES.start)) + center);
    path.lineTo(center * Math.cos(degreesToRadians(SCANNER_PATH_ANGLES.end)) + center, center * Math.sin(degreesToRadians(SCANNER_PATH_ANGLES.end)) + center);
    path.lineTo(center, center);
    path.close();

    return path;
};

export const getCenterPoint = (size: number) => ({ x: size / 2, y: size / 2 });

export const createVectorPoint = (size: number, x: number, y: number) => vec(size * x, size * y);
