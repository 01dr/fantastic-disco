/**
 * Crafted by Aidar Ibatullin <amazing.space.invader@gmail.com>
 * 08.02.17
 */

const basket = (state = {
    items: [
        {
            name: 'The Chelsea Boot',
            description: 'Black',
            quantity: 1,
            price: 235,
            image: 'http://placehold.it/150x150'
        },
        {
            name: 'The Twill Snap Backpack',
            description: 'Reverse Denim + Brown Leather',
            quantity: 1,
            price: 65,
            image: 'http://placehold.it/150x150'
        },
        {
            name: 'The Twill Zip Tote',
            description: 'Reverse Denim + Brown Leather',
            quantity: 1,
            price: 48,
            image: 'http://placehold.it/150x150'
        }
    ],
    subtotal: '398',
    shipping: 'free',
    taxes: '12.12',
    total: '410.12'
}) => state;

export default { basket };