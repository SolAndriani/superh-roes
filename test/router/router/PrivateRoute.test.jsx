import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth';
import { MemoryRouter } from 'react-router';
import { PrivateRoute } from '../../../src/router/PrivateRoute';


describe('Purueba en el <PrivateRote/>', () => { 
 
  test('debe de mostrar el children si  esta autenticado', () => { 
 
 

    Storage.prototype.setItem = jest.fn();
 
 
 
         
         const contextValue = {
             logged: true,
             user:{
                id:'abc',
                name: 'sol'
             }
         }
 
 
 
         render(
             <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                <PrivateRoute>
                     <h1>Ruta Privada</h1>
                 </PrivateRoute>
                </MemoryRouter>
             </AuthContext.Provider>
           );
 
 
          
 
           expect( screen.getByText('Ruta Privada')).toBeTruthy();
           expect(localStorage.setItem).toHaveBeenCalled();
 
      });
    


    



 })