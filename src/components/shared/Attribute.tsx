import type { AttributeType } from '../../definitions';
import { attributeComponentMap } from '../../utils/AttributeComponentMap';
import { toKebabCase } from '../../utils/helpers';

type AttributeProps = {
    attribute: AttributeType;
    selected: string | undefined;
    onSelect: (itemId: string) => void;
    context: 'product' | 'cart-item';
};

export default function Attribute({
    attribute,
    selected,
    onSelect,
    context,
}: AttributeProps) {
    const Block = attributeComponentMap[attribute.type];

    if (!Block) {
        console.warn(`Unsupported attribute type: ${attribute.type}`);
        return null;
    }
    const testId = `${context}-attribute-${toKebabCase(attribute.name)}`;

    return (
        <div className="flex flex-col gap-1" data-testid={testId}>
            <h2 className="font-bold">{attribute.name}</h2>
            <div className="flex gap-2">
                {attribute.items.map((item) => (
                    <Block
                        key={item.itemId}
                        value={item.value}
                        selected={selected === item.itemId}
                        onClick={() => onSelect(item.itemId)}
                        testId={
                            selected === item.itemId
                                ? `${testId}-${item.value}-selected`
                                : `${testId}-${item.value}`
                        }
                    />
                ))}
            </div>
        </div>
    );
}
