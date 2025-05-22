export interface WindowSize {
  width: number;
  height: number;
}

export function getWindowSize(): WindowSize {
  if (typeof globalThis !== 'undefined' && typeof globalThis.window !== 'undefined') {
    return {
      width: globalThis.window.innerWidth,
      height: globalThis.window.innerHeight,
    };
  }

  // Retorno seguro em ambientes sem window (SSR, Node.js, etc)
  return {
    width: 0,
    height: 0,
  };
}
