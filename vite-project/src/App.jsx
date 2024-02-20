import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormulaireComponent from './components/FormulaireComponent';
import ListContactComponent from './components/ListContactComponent';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  return (
    <>
      <FormulaireComponent addContact={addContact} />
      <ListContactComponent contacts={contacts} />

      {/* <h1>Contact Directory</h1>
      <FormulaireComponent addContact={addContact} />
      <ListContactComponent contacts={contacts} /> */}
    </>
  );
}

export default App



  
  

