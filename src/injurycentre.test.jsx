import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import { AddInjury } from './action/actionfun';
import {BrowserRouter} from 'react-router-dom'
 
describe('testing injurycentre ui', () => {
    afterEach(() => {
        console.log("clean up done...")
    })
    beforeEach(() => {
        console.log("initialization done")
    })  
it('injury centre page',async () => {
    render(<BrowserRouter><AddInjury/></BrowserRouter>)
    fireEvent.click(screen.getByTestId('updatectrl'),{target:{value:'/home/injurycentre/update'}})
    fireEvent.click(screen.getByTestId('viewctrl'),{target:{value:'/home/injurycentre/view'}})
    fireEvent.click(screen.getByTestId('addctrl'),{target:{value:'/home/injurycentre/addinjuryfom'}})
});



});
