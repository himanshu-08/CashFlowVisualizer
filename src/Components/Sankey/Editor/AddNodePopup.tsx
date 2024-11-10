import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import './index.css';
import { IFormData } from '../../../Common/types';

const AddNodePopup = ( { selectedValue, onSubmit }: {selectedValue: string, onSubmit: (a:IFormData) => void} ) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    value: '',
  });

  useEffect(() => {
    setFormData(prevState => ({...prevState, from: selectedValue}))
  },[selectedValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    onSubmit(formData)
  };

  const enabled = Boolean(formData && formData.from && formData.to && formData.value)

  return  (
    <form onSubmit={handleSubmit} className='popup'>
      <div>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          className="custom-input"
          readOnly
        />
      </div>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          name="to"
          value={formData.to}
          onChange={handleChange}
          className="custom-input"
        />
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        <input
          type="number"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
          className="custom-input"
        />
      </div>
      <button type="submit" disabled={!enabled}>Submit</button>
    </form>
  );
}

export default AddNodePopup;