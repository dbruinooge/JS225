"use strict";

const Account = (function() {
  let email;
  let password;
  let firstName;
  let lastName;
  function anonymize() {
    let sequence = '';
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 1; i <= 16; i += 1) {
      const index = Math.floor(Math.random() * chars.length);
      sequence += chars[index];
    }

    return sequence;
  }

  function setEmail(newEmail) {
    email = newEmail;
  }

  function setPassword(newPassword) {
    password = newPassword;
  }

  function setFirstName(newFirstName) {
    firstName = newFirstName;
  }

  function setLastName(newLastName) {
    lastName = newLastName;
  }

  return {
    init(email, password, firstName, lastName, displayName) {
      setEmail(email);
      setPassword(password);
      setFirstName(firstName);
      setLastName(lastName);
      this.displayName = anonymize();
      return this;
    },

    reanonymize(inputPassword) {
      if (inputPassword === password) {
        displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(inputPassword, newPassword) {
      if (inputPassword === password) {
        password = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(inputPassword) {
      if (inputPassword === password) {
        return firstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(inputPassword) {
      if (inputPassword === password) {
        return lastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(inputPassword) {
      if (inputPassword === password) {
        return email;
      } else {
        return 'Invalid Password';
      }
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
