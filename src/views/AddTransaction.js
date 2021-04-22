import React,{ useContext }  from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { GlobalContext } from '../context/GlobalState';


function AddTransaction() {
	const [transaction, setTransaction] = React.useState({id:Math.floor(Math.random() * 100000000),description:'', amount:0,tran_type:'QEXP'})
	    const { addTransaction } = useContext(GlobalContext);

	const handleSubmit = (e)=> {
		e.preventDefault();
		setTransaction({...transaction, id:Math.floor(Math.random() * 100000000)})
		console.log(transaction)
	addTransaction(transaction)

	}
    return (
        <>
        <h1 class="app-page-title">Add Transaction</h1>
        <hr class="mb-4" />
           <div class="row g-4 settings-section">
	            <div class="col-12 col-md-8">
		            <div class="app-card app-card-settings shadow-sm p-4">	    
						<div class="app-card-body">
							<form class="settings-form" onSubmit={handleSubmit}>
								<div class="mb-3">
									<label for="setting-input-1" class="form-label">Transaction Description<InfoCircleOutlined /></label>
									<input type="text" class="form-control" onChange={(e) => setTransaction({...transaction,description:e.target.value})} id="setting-input-1" name="description" placeholder="Transaction Description" required />
									</div>
									<div class="mb-3">
									<label for="setting-input-2" class="form-label">Transaction Type</label>
									<select type="select" class="form-control" onChange={(e) => setTransaction({...transaction,tran_type:e.target.value})} id="setting-input-2" name="tran_type" placeholder="QeXP" required >
										<option value="QEXP">QEXP</option>
										<option value="RWRD">RWRD</option>
										<option value="CONT">CONT</option>
										<option value="MATCH">MATCH</option>
									</select>
									</div>
								    <div class="mb-3">
									<label for="setting-input-3" name="amoutn" class="form-label">Amount(-) For Expense</label>
									<input type="number" class="form-control" id="setting-input-3" onChange={(e) => setTransaction({...transaction,amount:+e.target.value})}/>
									</div>
									<button type="submit" class="btn app-btn-primary" >Add Transaction</button>
							    </form>
						    </div>
						    
						</div>
	                </div>
                </div>
            
        </>
    )
}

export default AddTransaction
