import { React, useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [tran_type, setTran_type] = useState('QEXP');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        description,
        tran_type,
        amount: +amount
      }
  
      addTransaction(newTransaction)
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                placeholder="transaction description" />
        </div>
        <div className="form-control">
          <label htmlFor="type">Transaction Type</label>
          <input type="text" value={tran_type} onChange={(e) => setTran_type(e.target.value)}
                placeholder="CONT, MATCH, QEXP, UEXP, RWRD" />
        </div>        
        <div className="form-control">
          <label htmlFor="amount">
            Amount (-) for expenses
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
            placeholder="100" />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
