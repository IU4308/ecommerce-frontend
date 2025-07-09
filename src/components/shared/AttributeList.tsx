import Attribute from './Attribute';
import type { AttributeType } from '../../definitions';
import _ from 'lodash';

type Props = {
    attributes: AttributeType[];
    selected: Record<string, string>;
    onSelect: (attributeName: string, itemId: string) => void;
    context: 'product' | 'cart-item';
};

export default function AttributeList({
    attributes,
    selected,
    onSelect,
    context,
}: Props) {
    return (
        <div className="flex flex-col gap-4">
            {attributes.map((attr) => (
                <Attribute
                    key={attr.name}
                    attribute={attr}
                    selected={selected[attr.name]}
                    onSelect={(itemId) => onSelect(attr.name, itemId)}
                    context={context}
                />
            ))}
        </div>
    );
}
