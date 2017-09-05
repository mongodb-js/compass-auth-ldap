const LDAP = require('./lib/components');
const extension = require('./lib/extensions');

/**
 * The LDAP auth role component.
 */
const LDAP_AUTH_ROLE = {
  name: 'LDAP',
  selectOption: { LDAP: 'LDAP' },
  component: LDAP
};

/**
 * Activate all the components in the LDAP plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function activate(appRegistry) {
  appRegistry.registerRole('Connect.AuthenticationMethod', LDAP_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the LDAP plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthenticationMethod', LDAP_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

module.exports = LDAP;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
