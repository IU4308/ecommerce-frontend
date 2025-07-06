import type { AttributeType } from '../../definitions';
import ColorBlock from '../pdp/ColorBlock';
import TextBlock from '../pdp/TextBlock';

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
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-bold">{attribute?.name}</h2>
            <div className="flex gap-2">
                {attribute.items.map((item) =>
                    attribute.type === 'text' ? (
                        <TextBlock
                            key={item.value}
                            value={item.value}
                            selected={selected === item.itemId}
                            onClick={() => onSelect(item.itemId)}
                        />
                    ) : (
                        <ColorBlock
                            key={item.value}
                            value={item.value}
                            selected={selected === item.itemId}
                            onClick={() => onSelect(item.itemId)}
                        />
                    )
                )}
            </div>
        </div>
    );
}
