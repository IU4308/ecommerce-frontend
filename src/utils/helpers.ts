export function toKebabCase(str: string): string {
    return str
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/([a-z0-9])([A-Z])/g, '$1$2')
        .toLowerCase()
        .replace(/^-+|-+$/g, '');
}
