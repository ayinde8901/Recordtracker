import './App.css';
import AddTransanction from './Component/AddTransanction';
import { Balance } from './Component/Balance';
import Header from './Component/Header';
import IncomeExpenses from './Component/IncomeExpenses';
import TransactionList from './Component/TransactionList';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className='container'>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransanction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
