import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../../src/auth';
import { PublicRoute } from '../../../src/router/PublicRoute';


describe('Pruebas en <PublicRoute/>', () => {


    test('debe de mostrar el children si no esta autenticado', () => { 





        
        const contextValue = {
            logged: false
        }



        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
          );


         

          expect( screen.getByText('Ruta publica')).toBeTruthy();



     });

     test('debe de debe de navegar si esta autenticado', () => { 
        const contextValue = {
            logged: true,
            user: {
                name:'Strider',
                id:'ABC123'
            }
        }



        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                


                <Routes>

                  <Route path='login' element={
                    <PublicRoute>
                         <h1>Ruta piblica</h1>
                    </PublicRoute>
                   }/>

                   <Route path='Marvel' element={<h1>Pagina de Marvel</h1>}/>
                    
                </Routes>

                



                
                </MemoryRouter>
            </AuthContext.Provider>
        
        );
        



        expect( screen.getByText('Pagina de Marvel')).toBeTruthy();





     });





 });