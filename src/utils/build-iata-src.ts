export const buildIataSrc = (code: string, options = { width: 99, height: 36 }): string => {
  return `https://pics.avs.io/${options.width}/${options.height}/${code}.png`
}
