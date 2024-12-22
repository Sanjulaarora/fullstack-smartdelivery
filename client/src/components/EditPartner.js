import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPartners } from '../features/partnerSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditPartner = () => {
  const [partners, setPartners] = useState([]);

  const { data } = useSelector((state) => state.partners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  useEffect(() => {
    setPartners(data);
  }, [data]);

  const navigate = useNavigate();

  const [editPartnerData, setEditPartnerData] = useState({
    editName: '',
    editEmail: '',
    editNumber: '',
    editStatus: '',
    editCurrentLoad: '',
    editAreas: [''],
    editShift: { editStartTime:'', editEndTime:'' },
    editMetrics: { editRating: '', editCompletedOrders: '', editCancelledOrders: '' }
  });

  const editedData = (e) => {
    const { name, value } = e.target;
    setEditPartnerData(() => {
      if (name === 'editStartTime' || name === 'editEndTime') {
        // Edit shift times
        return {
          ...editPartnerData,
          editShift : {
            ...editPartnerData.editShift,
            [name]: value,
          },
        }; 
      } else if (name === 'editRating' || name === 'editCompletedOrders' || name === 'editCancelledOrders') {
        // Edit Metrics
        return { 
          ...editPartnerData,
          editMetrics : {
            ...editPartnerData.editMetrics,
            [name]: value,
          },
        };
      } else {
        // Edit other fields
        return {
          ...editPartnerData,
          [name]: value,
        };
      }
    });
  };

  const handleEdit = async(id) => {
    const { editName, editEmail, editNumber, editStatus, editCurrentLoad, editAreas,
      editShift: { editStartTime, editEndTime },
      editMetrics: { editRating, editCompletedOrders, editCancelledOrders } } = editPartnerData;

    const res = await fetch(`/updatePartner/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        editName, editEmail, editNumber, editStatus, editCurrentLoad, editAreas, editShift: { editStartTime, editEndTime }, 
        editMetrics: { editRating, editCompletedOrders, editCancelledOrders }
      })
    });

    const data = await res.json();
    console.log(data);
    if(res.status === 400 || !data) {
      alert("Something went wrong.");
    } else {
      setPartners(partners.map(partner => partner._id === id ? { data } : partner));
      alert("Partner data edited successfuly !!");
      navigate("/partners");
    }
  };

  const { id } = useParams();
  const partner = partners.find(partner => (partner._id) === id);

  console.log(id);

  useEffect(() => {
    if(partner) {
      setEditPartnerData({
        editName: partner.name,
        editEmail: partner.email,
        editNumber: partner.number,
        editStatus: partner.status,
        editCurrentLoad: partner.currentLoad,
        editAreas: partner.areas,
        editShift: {
          editStartTime: partner.shift?.startTime,
          editEndTime: partner.shift?.endTime,
        },
        editMetrics: {
          editRating: partner.metrics?.rating,
          editCompletedOrders: partner.metrics?.completedOrders,
          editCancelledOrders: partner.metrics?.cancelledOrders,
        }
      });
    }
  }, [partner]);

  return (
    <div className='mt-8'>
      <div className='flex justify-center items-center'>
        <form className='flex flex-col' onSubmit={(e) => e.preventDefault()}>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editName'>Name:</label>
            <input
              className='p-1 rounded-lg w-72'
              type='text'
              placeholder='Edit Name'
              value={editPartnerData.editName}
              onChange={editedData}
              name='editName'
              id='editName'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editEmail'>Email:</label>
            <input
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Email'
              value={editPartnerData.editEmail}
              onChange={editedData}
              name='editEmail'
              id='editEmail'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editNumber'>Number:</label>
            <input
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Number'
              value={editPartnerData.editNumber}
              onChange={editedData}
              name='editNumber'
              id='editNumber'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editStatus'>Status:</label>
            <select
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Status'
              value={editPartnerData.editStatus}
              onChange={editedData}
              name='editStatus'
              id='editStatus'
            >
              <option value=''>Select Status</option>
              <option value='active'>Active</option>
              <option value='inactive'>Inactive</option>
            </select>
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editCurrentLoad'>Current Load:</label>
            <input
              className='p-1 rounded-lg'
              type='number'
              placeholder='Edit Current Load'
              value={editPartnerData.editCurrentLoad}
              onChange={editedData}
              name='editCurrentLoad'
              id='editCurrentLoad'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editAreas'>Areas:</label>
            <input
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Areas'
              value={editPartnerData.editAreas}
              onChange={editedData}
              name='editAreas'
              id='editAreas'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editStartTime'>Shift Start Time:</label>
            <input
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Shift Start Time'
              value={editPartnerData.editShift.editStartTime}
              onChange={editedData}
              name='editStartTime'
              id='editStartTime'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editEndTime'>Shift End Time:</label>
            <input
              className='p-1 rounded-lg'
              type='text'
              placeholder='Edit Shift End Time'
              value={editPartnerData.editShift.editEndTime}
              onChange={editedData}
              name='editEndTime'
              id='editEndTime'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editRating'>Rating:</label>
            <input
              className='p-1 rounded-lg'
              type='number'
              placeholder='Edit Rating'
              value={editPartnerData.editMetrics.editRating}
              onChange={editedData}
              name='editRating'
              id='editRating'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editCompletedOrders'>Completed Orders:</label>
            <input
              className='p-1 rounded-lg'
              type='number'
              placeholder='Edit Completed Orders'
              value={editPartnerData.editMetrics.editCompletedOrders}
              onChange={editedData}
              name='editCompletedOrders'
              id='editCompletedOrders'
            />
          </div>
          <div className='flex flex-col mt-5'>
            <label htmlFor='editCancelledOrders'>Cancelled Orders:</label>
            <input
              className='p-1 rounded-lg'
              type='number'
              placeholder='Edit Cancelled Orders'
              value={editPartnerData.editMetrics.editCancelledOrders}
              onChange={editedData}
              name='editCancelledOrders'
              id='editCancelledOrders'
            />
          </div>
          <button className='m-10 w-20 h-8 bg-blue-950 text-white rounded-lg font-semibold mx-auto' type='submit' onClick={() =>handleEdit(partner._id)}>Edit</button>
        </form>
      </div>
    </div>
  )
}

export default EditPartner;