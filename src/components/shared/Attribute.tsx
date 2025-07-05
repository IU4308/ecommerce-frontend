import type { AttributeType } from '../../definitions';
import ColorBlock from '../pdp/ColorBlock';
import TextBlock from '../pdp/TextBlock';

export default function Attribute({ attribute }: { attribute: AttributeType }) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-bold">{attribute?.name}</h2>
            <div className="flex gap-2">
                {attribute.items.map((item) =>
                    attribute.type === 'text' ? (
                        <TextBlock key={item.value} value={item.value} />
                    ) : (
                        <ColorBlock key={item.value} value={item.value} />
                    )
                )}
            </div>
        </div>
    );
}
