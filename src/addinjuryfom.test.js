import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import { addInjury,InjuryAddform } from './action/actionfun';
import {BrowserRouter} from 'react-router-dom'

describe('testing addinjuryfom ui', () => {afterEach(() => {
    console.log("clean up done...")
})
beforeEach(() => {
    console.log("initialization done")
})
it ('injury centre page',async()=>{
   render (<BrowserRouter><InjuryAddform/></BrowserRouter>) 

   fireEvent.change(screen.getByTestId('personName'),{target:{value:'raghu'}})
   fireEvent.change(screen.getByTestId('personAddress'),{target:{value:'new'}})
   fireEvent.change(screen.getByTestId('mobile'),{target:{value:'1234567890'}})
   fireEvent.click(screen.getByTestId('savectrl'),{target:{value:''}})
  
   // expect(screen.getByTestId('msglbl').textContent).toBe("")
//    await waitFor(()=>expect(screen.getByTestId('msglbl').textContent).toBe('valid user'))
   





})
    
});
