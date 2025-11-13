import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AnimatePresence, motion } from 'motion/react';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { format } from 'date-fns';
import { serverApi } from '../Hook/useServerAPI';

const MyPayBill = () => {
  const [bills, setBills] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  useEffect(() => {
    fetch(`${serverApi}/paybillpersonal?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();

    const updatebill = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      created_date: new Date(),
    };
    if (!updatebill.name || !updatebill.address || !updatebill.phone) {
      toast.error('Please fill in all fields before submitting!');
      return;
    }
    fetch(`${serverApi}/paybill/${selectedBill._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatebill),
    })
      .then((res) => res.json())
      .then(() => {
        setBills((prev) => prev.map((bill) => (bill._id === selectedBill._id ? { ...bill, ...updatebill } : bill)));
        toast.success('Bill updated successfully!');
        setSelectedBill(null);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${serverApi}/paybill/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then(() => {
            const remaining = bills.filter((bill) => bill._id !== id);
            setBills(remaining);
            Swal.fire('Deleted!', 'Your bill has been deleted.', 'success');
          });
      }
    });
  };
  const handleDownloadPDF = () => {
    const columns = [
      { key: 'name', name: 'Name' },
      { key: 'created_by', name: 'Email' },
      { key: 'amount', name: 'Amount' },
      { key: 'address', name: 'Address' },
      { key: 'phone', name: 'Phone' },
      { key: 'created_date', name: 'Date' },
    ];
    const rows = bills.map((bill, i) => ({ id: i + 1, name: bill.name, created_by: bill.created_by, amount: bill.amount, address: bill.address, phone: bill.phone, created_date: format(bill.created_date, 'd-MM-y, h:m a') }));

    const tableColumn = columns.map((col) => col.name);
    const tableRows = rows.map((row) => columns.map((col) => row[col.key]));

    const doc = new jsPDF();
    doc.text(`Bills of ${user.displayName}`, 15, 10);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
    });
    doc.save('my-bills.pdf');
  };

  return (
    <div className="max-w-[1440px] mx-auto mt-20">
      <title>myPayBill</title>

      <div className="p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">My Bills</h2>
      </div>

      <div className="overflow-x-auto mx-2 md:mx-4 pb-2">
        <table className="table table-xs min-w-[1200px] border border-gray-300 shadow-xs rounded-lg">
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
              <tr key={index} className="text-[13px]  border-b border-gray-200 transition-colors duration-150">
                <td className="px-4 py-2 border-r border-gray-200">{bill.name}</td>
                <td className="px-4 py-2 border-r border-gray-200">{bill.created_by}</td>
                <td className="px-4 py-2 border-r border-gray-200">{bill.amount}</td>
                <td className="px-4 py-2 border-r border-gray-200">{bill.address}</td>
                <td className="px-4 py-2 border-r border-gray-200">{bill.phone}</td>
                <td className="px-4 py-2 border-r border-gray-200">{format(bill.created_date, 'd-MM-y, h:m a')}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button onClick={() => setSelectedBill(bill)} className="border border-gray-500 px-3 py-1 rounded-md">
                    Update
                  </button>
                  <button onClick={() => handleDelete(bill._id)} className=" border border-gray-500 px-3 py-1 rounded-md ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end py-5">
        <button onClick={handleDownloadPDF} className="border mr-4 border-gray-500 px-3 py-1 rounded-md ">
          Download Report
        </button>
      </div>

      <AnimatePresence>
        {selectedBill && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={() => setSelectedBill(null)}
            className=" pt-8 pb-24 px-4 overflow-y-auto fixed grid z-50 place-items-center inset-0 bg-black/20"
          >
            <motion.div
              initial={{
                scale: 1.1,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              onMouseDown={(e) => e.stopPropagation()}
              className="w-full max-w-[400px] bg-white p-4 rounded-xl relative"
            >
              <button onClick={() => setSelectedBill(null)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <h3 className="font-bold text-2xl text-center">Update Your Bill</h3>

              <form onSubmit={handlesubmit} className="flex flex-col gap-2">
                <div>
                  <label className="block font-semibold mb-1">Email</label>
                  <input type="email" value={selectedBill.created_by} readOnly className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="Email" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">BillId</label>
                  <input type="text" value={selectedBill._id} readOnly className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="ID" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Amount</label>
                  <input type="text" value={selectedBill.amount} readOnly className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="Amount" />
                </div>

                <div>
                  <label className="block font-semibold mb-1">Name</label>
                  <input type="text" defaultValue={selectedBill.name} name="name" className="w-full border px-3  py-2 rounded-md text-(--input-text) bg-(--input-bg)  " placeholder="Name" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Address</label>
                  <input type="text" name="address" defaultValue={selectedBill.address} className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="Address" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone</label>
                  <input type="text" name="phone" defaultValue={selectedBill.phone} className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="Number" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input type="text" value={format(selectedBill.created_date, 'd-MM-y, h:m a')} readOnly className="w-full border px-3 py-2 rounded-md text-(--input-text) bg-(--input-bg) outline-none " placeholder="Date" />
                </div>
                <div className="flex justify-end mt-6">
                  <button className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit font-bold ">Update</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyPayBill;
