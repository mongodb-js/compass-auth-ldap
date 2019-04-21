import Reflux from 'reflux';

/**
 * The actions for changing LDAP values.
 */
const LDAPActions = Reflux.createActions([
  'onLDAPUsernameChanged',
  'onLDAPPasswordChanged'
]);

export default LDAPActions;
