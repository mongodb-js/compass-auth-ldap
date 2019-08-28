import LDAP from './plugin';
import extension from 'modules';

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
  appRegistry.registerRole('Connect.AuthStrategy', LDAP_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the LDAP plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthStrategy', LDAP_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

export default LDAP;
export { activate, deactivate };
