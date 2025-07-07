import type { AttributeType } from '../../definitions';
import { attributeComponentMap } from '../../utils/AttributeComponentMap';

type AttributeProps = {
    attribute: AttributeType;
    selected: string | undefined;
    onSelect: (itemId: string) => void;
};

export default function Attribute({
    attribute,
    selected,
    onSelect,
}: AttributeProps) {
    const Block = attributeComponentMap[attribute.type];

    if (!Block) {
        console.warn(`Unsupported attribute type: ${attribute.type}`);
        return null;
    }

    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-bold">{attribute.name}</h2>
            <div className="flex gap-2">
                {attribute.items.map((item) => (
                    <Block
                        key={item.itemId}
                        value={item.value}
                        selected={selected === item.itemId}
                        onClick={() => onSelect(item.itemId)}
                    />
                ))}
            </div>
        </div>
    );
}
