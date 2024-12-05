import { Color } from "../types";

export function colorToHex(color: Color) {
    const rHex = color.r.toString(16);
    const gHex = color.g.toString(16);
    const bHex = color.b.toString(16);
    return `#${rHex}${gHex}${bHex}`;
}

export function randomColor(color: Color, specificColor?: "r" | "g" | "b") {
    if (!specificColor) {
        const rRand = Math.floor(Math.random() * 256);
        const gRand = Math.floor(Math.random() * 256);
        const bRand = Math.floor(Math.random() * 256);

        return { r: rRand, g: gRand, b: bRand } as Color;
    }
    switch (specificColor) {
        case "r":
            return {
                r: Math.floor(Math.random() * 256),
                g: color.g,
                b: color.b,
            } as Color;
        case "g":
            return {
                r: color.r,
                g: Math.floor(Math.random() * 256),
                b: color.b,
            } as Color;
        case "b":
            return {
                r: color.r,
                g: color.g,
                b: Math.floor(Math.random() * 256),
            } as Color;
        default:
            return { r: color.r, g: color.g, b: color.b } as Color;
    }
}
