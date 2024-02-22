import Realm from 'realm';

export class Token extends Realm.Object {
  static schema = {
    name: 'Token',
    primaryKey: 'code',
    properties: {
     code: 'string',
    },
  };
}
