const React = require('react');
const PropTypes = require('prop-types');
const isEmpty = require('lodash.isempty');
const { FormInput } = require('hadron-react-components');
const { shell } = require('electron');
const Actions = require('../actions');

/**
 * The LDAP auth role component.
 */
class LDAP extends React.Component {

  /**
   * Handle the username change.
   *
   * @param {Event} evt - The event.
   */
  onUsernameChanged(evt) {
    Actions.onLDAPUsernameChanged(evt.target.value);
  }

  /**
   * Handle the password change.
   *
   * @param {Event} evt - The event.
   */
  onPasswordChanged(evt) {
    Actions.onLDAPPasswordChanged(evt.target.value);
  }

  /**
   * Open the help page for LDAP.
   */
  onLDAPHelp() {
    shell.openExternal('https://docs.mongodb.com/manual/core/security-ldap/');
  }

  /**
   * Get the error for the required username field.
   *
   * @returns {String} The error message.
   */
  getUsernameError() {
    const connection = this.props.currentConnection;
    if (!this.props.isValid && isEmpty(connection.ldap_username)) {
      return 'Username is required';
    }
  }

  /**
   * Get the error for the required password field.
   *
   * @returns {String} The error message.
   */
  getPasswordError() {
    const connection = this.props.currentConnection;
    if (!this.props.isValid && isEmpty(connection.ldap_password)) {
      return 'Password is required';
    }
  }

  /**
   * Render the kerberos component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    return (
      <div id="ldap-authentication" className="form-group">
        <FormInput
          label="Username"
          name="ldap-username"
          error={this.getUsernameError()}
          changeHandler={this.onUsernameChanged.bind(this)}
          value={this.props.currentConnection.ldap_username || ''}
          linkHandler={this.onLDAPHelp.bind(this)} />
        <FormInput
          label="Password"
          name="ldap-password"
          type="password"
          error={this.getPasswordError()}
          changeHandler={this.onPasswordChanged.bind(this)}
          value={this.props.currentConnection.ldap_password || ''} />
      </div>
    );
  }
}

LDAP.propTypes = {
  currentConnection: PropTypes.object.isRequired,
  isValid: PropTypes.bool
};

LDAP.displayName = 'LDAP';

module.exports = LDAP;
