import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Session } from 'meteor/session';
import { Products } from '../../api/collections.js';
import { PriceRegisters } from '../../api/collections.js';
import { Stores } from '../../api/collections.js';
import { Wishlists } from '../../api/collections.js';
import '../../api/methods.js'
import '../css/main.css'

import '../pages/About.html';
import '../pages/Account.html';
import '../pages/SignUp.html';
import '../pages/Login.html';
import '../pages/SignUp2.html';
import '../pages/Dashboard.html';
import '../pages/Ecommerce.html';
import '../pages/Enroll.html';
import '../pages/Home.html';
import '../pages/HomeLoggedIn.html';
import '../pages/Invite.html';
import '../pages/Help.html';
import '../pages/Privacy.html';
import '../pages/Profile.html';
import '../pages/Support.html';
import '../pages/Wishlist.html';

import '../partials/AboutUs.html';
import '../partials/HeaderCenter.html';
import '../partials/Header.html';
import '../partials/PopUpNav.html';
import '../partials/BoxArea.html';
import '../partials/ChangePasswordForm.html';
import '../partials/Confirmation.html';
import '../partials/ContactForm.html';
import '../partials/EcommerceContactForm.html';
import '../partials/Explanation.html';
import '../partials/FAQ.html';
import '../partials/Footer.html';
import '../partials/ForgotPasswordForm.html';
import '../partials/IllustrationBox.html';
import '../partials/InviteForm.html';
import '../partials/HelpForm.html';
import '../partials/Jumbotron.html';
import '../partials/LoginForm.html';
import '../partials/PrivacyForm.html';
import '../partials/ProfileForm.html';
import '../partials/SideMenu.html';
import '../partials/SignUpForm.html';
import '../partials/SignUp2Form.html';
import '../partials/ProductsPopUp.html';
import '../partials/Wish.html';
import '../partials/WishBox.html';
import '../partials/WishDetails.html';

BlazeLayout.setRoot('body');

if(Meteor.isClient){
    Template.Jumbotron.events({
        'click a[id=testbutton]': function(){
            Meteor.call('runScrape');
        }
    }),
    Template.Wishlist.helpers({
        'user-wishlist': function(){
            Meteor.subscribe('current-user-wishlist');
        }
    });
};