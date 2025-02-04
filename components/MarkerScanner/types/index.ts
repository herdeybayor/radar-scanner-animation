export interface MarkerScannerProps {
    size?: number;
    colors?: {
        rings?: string;
        gradient?: {
            start: string;
            end: string;
        };
        center?: {
            outer: string;
            middle: string;
            inner: string;
        };
    };
    timing?: {
        scanDuration?: number;
        ringDuration?: number;
        ringDelay?: number;
    };
}

export interface MarkerScannerRingProps {
    size: number;
    index: number;
    color: string;
    timing: {
        duration: number;
        delay: number;
    };
}
