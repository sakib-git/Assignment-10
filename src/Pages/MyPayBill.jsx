import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const MyPayBill = () => {
 const [bills, setBills] = useState([]);
 const [selectedId, setSelectedId] = useState(null);
 const {user} = useContext(AuthContext)
 const billModalRef = useRef(null);
 const userEmail = user.email
//  console.log(userEmail)
  useEffect(() => {
    // fetch('http://localhost:3000/paybillpersonal')
    fetch(`http://localhost:3000/paybillpersonal?email=${userEmail}`)
    .then(res => res.json())
    .then(data => {
      setBills(data)
      // console.log(data)
    })
  },[])
 const handleModal = (id) => {
    setSelectedId(id);  
    billModalRef.current.showModal();
  };

 
const handlesubmit = (e) => {
  e.preventDefault();

  const updatebill = {
    name: e.target.name.value,
    address: e.target.address.value,
    phone: e.target.phone.value,
    created_date: new Date(),
  };

  fetch(`http://localhost:3000/paybill/${selectedId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatebill),
  })
    .then((res) => res.json())
    .then((data) => {
      setBills((prevBills) =>
          prevBills.map((bill) =>
            bill._id === selectedId ? { ...bill, updatebill } : bill
          ))
      toast.success("Bill updated successfully!");
      billModalRef.current.close();
    });
};
const handleDelete = (id) => {
  console.log(id)
   fetch(`http://localhost:3000/paybill/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("delete succedfully!");
      
    });
}
  return (
    <div className='max-w-[1440px] mx-auto'>
      <title>myPayBill</title>
   
<div className="p-4">
  <h2 className="text-3xl font-bold mb-6 text-center">My Bills</h2>
</div>


<div className="overflow-x-auto">
  <table className="table table-xs border border-gray-300 shadow-md rounded-lg">
    <thead className="bg-gray-100 text-gray-800 text-[16px]">
      <tr className="border-b border-gray-300">
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Amount</th>
        <th className="px-4 py-2">Address</th>
        <th className="px-4 py-2">Phone</th>
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
      {bills.map((bill, index) => (
        <tr
          key={index}
          className="text-[13px]  border-b border-gray-200 transition-colors duration-150"
        >
          <td className="px-4 py-2 border-r border-gray-200">{bill.name}</td>
          <td className="px-4 py-2 border-r border-gray-200">{bill.created_by}</td>
          <td className="px-4 py-2 border-r border-gray-200">{bill.amount}</td>
          <td className="px-4 py-2 border-r border-gray-200">{bill.address}</td>
          <td className="px-4 py-2 border-r border-gray-200">{bill.phone}</td>
          <td className="px-4 py-2 border-r border-gray-200">
            {new Date(bill.created_date).toLocaleString()}
          </td>
          <td className="px-4 py-2 flex justify-center gap-2">
            <button onClick={() => handleModal(bill._id)}className="border border-gray-500 px-3 py-1 rounded-md">
              Update
            </button>
            <button onClick={()=> handleDelete(bill._id)} className=" border border-gray-500 px-3 py-1 rounded-md ">
              Delete
            </button>
          </td>
                  <dialog ref={billModalRef} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-2xl text-center">Update Your Bill</h3>
            
            <form onSubmit={handlesubmit} className='flex flex-col gap-2'>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input type="email" value={bill.created_by}  readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Email" />
              </div>
              <div>
                <label className="block font-semibold mb-1">BillId</label>
                <input type="text" value={bill._id}  readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="ID" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Amount</label>
                <input type="text"  value={bill.amount} readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Amount" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input type="text"  name='name' className="w-full border px-3  py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Address</label>
                <input type="text" name='address' className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Address" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone</label>
                <input type="text" name='phone' className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Number" />
              </div>
               <div>
                <label className="block font-semibold mb-1">Date</label>
                <input type="text" value={new Date(bill.created_date).toLocaleString()}  readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-[var(--input-bg)]  " placeholder="Date" />
              </div>
              <div className="flex justify-end mt-6">
                <button className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit font-bold ">Update</button>
              </div>
            </form>
          </div>
        </dialog>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default MyPayBill;