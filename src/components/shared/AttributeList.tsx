import type { AttributeType } from '../../definitions';
import Attribute from './Attribute';

export default function AttributeList({
    attributes,
}: {
    attributes: AttributeType[];
}) {
    return (
        <div className="flex flex-col gap-2">
            {attributes.map((attribute) => (
                <Attribute key={attribute.name} attribute={attribute} />
            ))}
        </div>
    );
}
