import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from 'actions';
import extension from 'modules';

describe('Extensions', () => {
  const store = Reflux.createStore({
    mixins: [StateMixin.store],
    getInitialState() {
      return { currentConnection: {}};
    }
  });

  before(() => {
    extension(store);
  });

  describe('#onLDAPUsernameChanged', () => {
    it('changes the username in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.ldap_username).to.equal('test');
        done();
      });
      Actions.onLDAPUsernameChanged('test');
    });
  });

  describe('#onLDAPPasswordChanged', () => {
    it('changes the password in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.ldap_password).to.equal('pw');
        done();
      });
      Actions.onLDAPPasswordChanged('pw');
    });
  });
});
