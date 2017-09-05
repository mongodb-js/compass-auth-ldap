const Reflux = require('reflux');

/**
 * The actions for changing LDAP values.
 */
const LDAPActions = Reflux.createActions([
  'onLDAPUsernameChanged',
  'onLDAPPasswordChanged'
]);

module.exports = LDAPActions;
