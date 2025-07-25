import { client } from '../apollo';
import type { AttributeType } from '../definitions';
import { GET_PRODUCT_ATTRIBUTES } from '../graphql/queries/getProductAttributes';
import { useCartStore } from '../store/useCartStore';

export async function addToCartAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const raw = formData.get('product') as string;
    const product = JSON.parse(raw);

    const { data } = await client.query({
        query: GET_PRODUCT_ATTRIBUTES,
        variables: { id: product.id },
    });

    const attributes = data.productAttributes;

    const selectedAttributes = Object.fromEntries(
        attributes.map((attr: AttributeType) => [
            attr.name,
            attr.items[0].itemId,
        ])
    );

    useCartStore.getState().addItem({
        ...product,
        attributes,
        selectedAttributes,
    });

    useCartStore.getState().openCart();

    return null;
}
