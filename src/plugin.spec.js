import React from 'react';
import { mount } from 'enzyme';
import LDAP from './plugin';

describe('<LDAP />', () => {
  describe('#render', () => {
    context('when the form is valid', () => {
      const connection = {
        ldap_username: 'username',
        ldap_password: 'password'
      };
      const component = mount(
        <LDAP currentConnection={connection} isValid />
      );

      it('renders the wrapper div', () => {
        expect(component.find('.form-group')).to.be.present();
      });

      it('renders the username input', () => {
        expect(component.find('input[name="ldap-username"]')).to.have.value('username');
      });

      it('renders the password input', () => {
        expect(component.find('input[name="ldap-password"]')).to.have.value('password');
      });
    });

    context('when the form is not valid', () => {
      context('when the username is empty', () => {
        const connection = {
          ldap_username: '',
          ldap_password: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is null', () => {
        const connection = {
          ldap_username: null,
          ldap_password: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the username is undefined', () => {
        const connection = {
          ldap_password: 'password'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-username"]').prop('data-tip')).
            to.equal('Username is required');
        });
      });

      context('when the password is empty', () => {
        const connection = {
          ldap_username: 'username',
          ldap_password: ''
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });

      context('when the password is null', () => {
        const connection = {
          ldap_username: 'username',
          ldap_password: null
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });

      context('when the password is undefined', () => {
        const connection = {
          ldap_username: 'username'
        };
        const component = mount(
          <LDAP currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="ldap-password"]').prop('data-tip')).
            to.equal('Password is required');
        });
      });
    });
  });
});
