import Actions from 'actions';

/**
 * Change the LDAP username.
 *
 * @param {String} username - The user name.
 */
function onLDAPUsernameChanged(username) {
  this.state.currentConnection.ldap_username = username;
  this.trigger(this.state);
}

/**
 * Change the LDAP password.
 *
 * @param {String} password - The password.
 */
function onLDAPPasswordChanged(password) {
  this.state.currentConnection.ldap_password = password;
  this.trigger(this.state);
}

/**
 * When extending the connect plugin, we bind the instance of the store
 * to our functions here, so when our actions are called the changes
 * are happening to the connection model in the connect plugin's store.
 *
 * @param {Store} store - The connect plugin store instance.
 */
function extendAuthentication(store) {
  const username = onLDAPUsernameChanged.bind(store);
  const password = onLDAPPasswordChanged.bind(store);

  Actions.onLDAPUsernameChanged.listen(username);
  Actions.onLDAPPasswordChanged.listen(password);
}

export default extendAuthentication;
