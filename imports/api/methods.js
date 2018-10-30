import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Wishlists } from './collections.js';
import { Products } from './collections.js';
import { PriceRegisters } from './collections.js';
import { Stores } from './collections.js';
import { HTTP } from 'meteor/http';

const opengraph = require('opengraph-io')({appId: 'My Private Key'});

if(Meteor.isServer){
    
    // Returns all users
    Meteor.publish('all-users',function(){
        return [
            Users.find({})
        ]
    }),

    // Returns specific user based on _id
    Meteor.publish('user-by-id',function(userId){
        check(userId, String)
        return Users.find({_id: userId});
    }),

    // Returns all products
    Meteor.publish('all-products',function(){
        return [
            Products.find({})
        ]
    }),

    // Returns current user's wishlist
    Meteor.publish('current-user-wishlist',function(){
        if(!this.userId){
            return this.ready();
        }
        const currentUserId = this.userId;
        return Users.find({_id: currentUserId},{
            fields: {wishlist}
        });
    });
};

// Subscribe in UI elements

Meteor.methods({
    'runScrape': function(){
        opengraph.getSiteInfo('https://www.uol.com.br/')
            .then(function(result){
                console.log('Site title is', result.hybridGraph.title);
            });
    },
    'runSearch': function(query,location){
        console.log('Ok')
    },
    'addProductToWishlist': function(){
        console.log('Product Added to Wishlist!')
    },
    'removeProductFromWishlist': function(){
        console.log('Product Removed!')
    }
});