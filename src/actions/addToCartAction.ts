import { client } from '../apollo';
import { GET_PRODUCT_ATTRIBUTES } from '../graphql/queries/getProductAttributes';
import { useCartStore } from '../store/useCartStore';

export async function addToCartAction({ request }: { request: Request }) {
    const formData = await request.formData();
    const raw = formData.get('product') as string;
    const product = JSON.parse(raw); // contains id, name, price, etc.

    // Fetch attributes for the given product ID
    const { data } = await client.query({
        query: GET_PRODUCT_ATTRIBUTES,
        variables: { id: product.id },
    });

    const attributes = data.productAttributes;

    // Select first item of each attribute as default
    const selectedAttributes = Object.fromEntries(
        attributes.map((attr: any) => [attr.name, attr.items[0].itemId])
    );

    // Add to cart using Zustand
    useCartStore.getState().addItem({
        ...product,
        attributes,
        selectedAttributes,
    });

    return null;
}
