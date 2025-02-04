export const DEFAULT_SCANNER_CONFIG = {
    size: 200,
    colors: {
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
    },
    timing: {
        scanDuration: 5000,
        ringDuration: 2000,
        ringDelay: 300,
    },
} as const;

export const SCANNER_PATH_ANGLES = {
    start: 105,
    end: 75,
} as const;

export const CIRCLE_SIZES = {
    outer: 0.08,
    middle: 0.055,
    inner: 0.05,
} as const;
