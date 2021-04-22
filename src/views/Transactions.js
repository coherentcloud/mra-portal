import React, { useContext, useEffect } from "react";
import { Table,Popconfirm } from 'antd';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { CloseCircleTwoTone } from "@ant-design/icons";


function Transactions() {
    let transactionData = []
      const { transactions, getTransactions,deleteTransaction } = useContext(GlobalContext);
    useEffect(() => {
    getTransactions();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, []);
transactions.map((transaction,i) => (
            transactionData = [...transactionData,{key:transaction.key,id:transaction._id,description:transaction.description,amount:transaction.amount,type:transaction.tran_type,actions:'_'}]
        //   setData([...data,{key:transaction.key,id:i+1,description:transaction.description,amount:transaction.amount,type:transaction.type}])
        ))    
        const loading = transactionData.length?false:true

    console.log("transactions data",transactionData)

const handleDelete = (key) => {
  deleteTransaction(key)
    transactionData = transactionData.filter((item) => item.id !== key);
  };

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: id => <a>#{id.slice(0,6)}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: amount => `$${amount}`
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters:[
      {
        text:'CONT',
        value:'CONT'
      },
      {
        text:'QEXP',
        value:'QEXP'
      },
      {
        text:"MATCH",
        value:'MATCH'
      },
      {
        text:'RWRD',
        value:'RWRD'
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.type.indexOf(value) === 0,
  },
 {
    title:"Status",
    dataIndex:"status",
    width:'10%',
    render: (_,record) =>record.amount < 0 ?<span class="badge bg-success">Credit</span>: <span class="badge bg-warning">Debit</span>,
    filterMultiple: false,
    filters:[
      {
        text:'credit',
        value:'credit'
      },
      {
        text:'debit',
        value:'debit'
      }
    ],
    onFilter: (value, record) => value==='credit'?record.amount <0 : record.amount >0,


  },
 {
        title: 'Actions',
        dataIndex:'actions',
        render: (_, record) =>
          transactionData.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
             <CloseCircleTwoTone style={{fontSize:20}} twoToneColor="#15a362" /> 
            </Popconfirm>
          ) : null,
      
  },
 
];

return (
        <>
            <h1 class="app-page-title">Transactions</h1>
            <Table columns={columns} className="table app-table-hover mb-0" dataSource={transactionData} loading={loading}/>
        </>
    )
}

export default Transactions
