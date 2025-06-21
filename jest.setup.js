import { TextEncoder, TextDecoder } from 'util';

// Polyfills globales para TextEncoder y TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
