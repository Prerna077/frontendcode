import React, { useState } from 'react';
import './SellerForm.css'; // Import CSS file for styling

function SellerForm() {
  const [activeCategory, setActiveCategory] = useState('');
  const [formData, setFormData] = useState({
    'GST Details': { GSTNumber: '' },
    'Pickup Details': { PickupAddress: '', PickupTime: '' },
    'Bank Details': { BankName: '', AccountNumber: '', IfscCode: '' },
    'Supplier Address': { Street: '', City: '', State: '', Country: '', Pincode: '' }
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleInputChange = (category, field, value) => {
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [field]: value
      }
    });
  };

  const renderFormInputs = (category) => {
    return Object.entries(formData[category]).map(([field, value]) => (
      <div className="input-group" key={field}>
        <label>{field}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleInputChange(category, field, e.target.value)}
        />
      </div>
    ));
  };

  const renderForm = () => {
    switch (activeCategory) {
      case 'GST Details':
        return (
            
          <div>
            
            <h3 className='font-bold'>GST Details Form</h3>
            {renderFormInputs('GST Details')}
            <button onClick={() => setActiveCategory('Pickup Details')}>Next</button>
          </div>
        );
      case 'Pickup Details':
        return (
          <div>
            <h3 className='font-bold'>Pickup Details Form</h3>
            {renderFormInputs('Pickup Details')}
            <button onClick={() => setActiveCategory('Bank Details')}>Next</button>
          </div>
        );
      case 'Bank Details':
        return (
          <div>
            <h3 className='font-bold'>Bank Details Form</h3>
            {renderFormInputs('Bank Details')}
            <button onClick={() => setActiveCategory('Supplier Address')}>Next</button>
          </div>
        );
      case 'Supplier Address':
        return (
          <div>
            <h3 className='font-bold'>Supplier Address Form</h3>
            {renderFormInputs('Supplier Address')}
            <button onClick={() => setActiveCategory('')} disabled={!activeCategory}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='ml-10 bg-white mt-3 mr-10'>
    <div className="seller-form-container">
      <div className="category-container">
        <div className={`category ${activeCategory === 'GST Details' ? 'active' : ''}`} onClick={() => handleCategoryClick('GST Details')}>
        <img className="mx-auto h-10 w-auto"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTGZumStcijds6DxW2JaWb6R7CRzO8RCzWQ&s"/>
          GST Details
        </div>
        <div className={`category ${activeCategory === 'Pickup Details' ? 'active' : ''}`} onClick={() => handleCategoryClick('Pickup Details')}>
        <img className="mx-auto h-10 w-auto"src="data:image/png;base64,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"/>
          Pickup Details
        </div>
        <div className={`category ${activeCategory === 'Bank Details' ? 'active' : ''}`} onClick={() => handleCategoryClick('Bank Details')}>  
        <img className="mx-auto h-10 w-auto"src="https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small/bank-icon-logo-design-vector.jpg"/>
        Bank Details
        </div>
        <div className={`category ${activeCategory === 'Supplier Address' ? 'active' : ''}`} onClick={() => handleCategoryClick('Supplier Address')}>
        <img className="mx-auto h-10 w-auto"src="data:image/png;base64,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"/>
          Supplier Address
        </div>
      </div>
      <div className="form-container">
        {renderForm()}
      </div>
    </div>
    </div>
  );
}

export default SellerForm;