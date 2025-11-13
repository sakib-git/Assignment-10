import React, { useContext, useRef } from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import { format } from 'date-fns';

const BillDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const data = useLoaderData();
  const { image, title, category, location, amount, email, date, description, _id } = data;
  const billModalRef = useRef(null);

  const [year, month, day] = date.split('-');
  const currentMonth = format(new Date(), 'M');
  const isPayable = month === currentMonth;

  const handleModal = () => {
    if (!isPayable) return;
    billModalRef.current.showModal();
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      created_by: user.email,
      created_date: new Date(),
      amount,
    };
    if (!formData.name || !formData.address || !formData.phone) {
      toast.error('Please fill in all fields before submitting!');
      return;
    }
    fetch('https://assignment-10-backend-six.vercel.app/paybill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(data);
    toast.success('Bill Paid Successfully');
    navigate('/mybill');
  };
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6  bg-(--navbar-bg)  rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 mt-50">
      <title>Details</title>
      <div className="md:w-1/2">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl shadow-md" />
      </div>

      <div className="md:w-1/2 flex flex-col justify-between">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-[var(--category)]">{title}</h1>

          <div className="flex flex-col gap-2 text-[var(--category)]">
            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
              <span className="font-semibold">Amount:</span> ৳ {amount}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {email}
            </p>
          </div>

          <p className=" mt-4">{description}</p>
        </div>

        <NavLink to="/bills" className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit ">
          Back to Bills
        </NavLink>
        <div className="flex flex-col  items-end">
          <button onClick={handleModal} className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit font-bold ${isPayable ? '' : 'opacity-60'}`}>
            Pay Bill
          </button>
          {!isPayable && <span className='text-red-500 text-xs'>Only current month bills can be paid</span>}
        </div>

        <dialog ref={billModalRef} className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-2xl text-center">Bill Payment</h3>
            <p className="py-4 text-center"> Please fill in the required form</p>
            <form onSubmit={handlesubmit} className="flex flex-col gap-2">
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input type="email" value={email || ''} readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Email" />
              </div>
              <div>
                <label className="block font-semibold mb-1">BillId</label>
                <input type="text" value={_id || ''} readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="ID" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Amount</label>
                <input type="text" value={amount || ''} readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Amount" />
              </div>

              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input type="text" name="name" className="w-full border px-3  py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Address</label>
                <input type="text" name="address" className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Address" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone</label>
                <input type="text" name="phone" className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Number" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Date</label>
                <input type="text" value={date || ''} readOnly className="w-full border px-3 py-2 rounded-md text-[var(--input-text)] bg-(--input-bg)  " placeholder="Date" />
              </div>
              <div className="flex justify-end mt-6">
                <button className=" bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit font-bold ">Submit</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default BillDetails;
