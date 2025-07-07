import ColorBlock from '../components/pdp/ColorBlock';
import TextBlock from '../components/pdp/TextBlock';

export const attributeComponentMap = {
    text: TextBlock,
    swatch: ColorBlock,
} as const;

export type AttributeComponentType = keyof typeof attributeComponentMap;
