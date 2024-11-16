/*
FileName: UserData.js
ClassName: UserData
Description: Class for user data
Author: arthiyadevi
*/

const _ = require('lodash');

class UserData {
    constructor() {
        this.userName       = 'student';
        this.password       = '12345';
        this.address        = ['address1', 'address2', 'address3', 'address4']
        this.phoneNo        = ['1234567890','1478523690','3698521470','7894561230']
        this.setRandomAlpha();
        this.setRandomNumber();
    }

    setRandomAlpha() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

        // Use Lodash _.sample() to pick a random letter
        this.randomalpha = _.sample(alphabet);
    }

    setRandomNumber() {
        this.randomValue    = Math.floor(Math.random() * 10000); 
    }

    getUserName() {
        // Example: 'student'+'a'+123
        return this.userName+this.randomalpha+this.randomValue;
    }

    getEmail() {
        // Example: 'student'+'a'+123+'@gmail.com'
        return this.userName+this.randomalpha+this.randomValue+'@gmail.com';
    }

    getPasswd() {
        // Example: 12345+123
        return this.password+this.randomValue;
    }

    getAddress() {
        return _.sampleSize(this.address, 1);
    }

    getPhoneNo() {
        return _.sampleSize(this.phoneNo, 1);  
    }
}

module.exports = UserData;