import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import './methods.js';

export const Stores = new Mongo.Collection('stores');
export const PriceRegisters = new Mongo.Collection('priceregisters');
export const Products = new Mongo.Collection('products');
export const Wishlists = new Mongo.Collection('wishlists');

const StoreSchema = new SimpleSchema({
    url: {
        type: String,
        label: "URL"
    },
    name: {
        type: String,
        label: "Name"
    },
    trustworthy: {
        type: Boolean,
        label: "Trustworthy"
    }
});

Stores.attachSchema(StoreSchema);

const PriceRegisterSchema = new SimpleSchema({
    url: {
        type: String,
        label: "URL"
    },
    date: {
        type: Date,
        label: "Date"
    },
    price: {
        type: Number,
        label: "Price"
    },
    currency: {
        type: String,
        label: "Currency"
    },
    store: {
        type: Stores
    }
});

PriceRegisters.attachSchema(PriceRegisterSchema);

const ProductSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    brand: {
        type: String,
        label: "Brand",
        optional: true
    },
    image: {
        type: String,
        label: "Image",
        optional: true
    },
    priceRegisters: {
        type: Array,
        optional: true
    },
    'priceRegisters.$': {
        type: PriceRegisters,
    }
});

Products.attachSchema(ProductSchema);

const WishlistSchema = new SimpleSchema({
    userId: {
        type: String,
        label: "UserId"
    },
    productList: {
        type: Array,
        label: "ProductList",
        optional: true
    },
    'productList.$': {
        type: Products,
    }
});

Wishlists.attachSchema(WishlistSchema);

SimpleSchema.extendOptions(['autoform']);