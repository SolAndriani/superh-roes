import { types } from '../../../src/auth/types/types';

describe('Pruebas en types.js', () => {
  test('debe exportar los tipos de acción auth correctos', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});