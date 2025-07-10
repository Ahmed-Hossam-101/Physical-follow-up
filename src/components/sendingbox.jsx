import React, { useState } from 'react';

const SendingBox = ({ price, plan, date }) => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    weight: '',
    targetWeight: '',
    targetGoal: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.phone || !formData.username) {
      alert('Please fill in all fields');
      return;
    }

    const whatsappNumber = '+201124946537'; 
    const message = `{
    username: "${formData.username}",
    phone: "${formData.phone}",
    plan: "${plan}",
    price: "${price}",
    weight: "${formData.weight}",
    targetWeight: "${formData.targetWeight}",
    targetGoal: "${formData.targetGoal}",
    date: "${date}"
    }`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='balckscreen'>
      <div className="container">
        <label>
          <p>الاسم:</p>
          <input 
            type="text" 
            name="username"
            placeholder='أدخل اسمك' 
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          <p>رقم الهاتف:</p>
          <input 
            type="number" 
            name="phone"
            placeholder='أدخل رقم هاتفك' 
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
         <label>
          <p> الوزن الحالي:</p>
          <input 
            type="number" 
            name="weight"
            placeholder='الوزن الحالي (KG)' 
            value={formData.weight}
            onChange={handleChange}
          />
        </label>
         <label>
          <p> الهدف(KGالوزن):</p>
          <input 
            type="number" 
            name="targetWeight"
            placeholder=' أدخل الوزن المستهدف (KG)' 
            value={formData.targetWeight}
            onChange={handleChange}
          />
        </label>
         <label>
          <p> الهدف(مثل:بناء جسم قوي,خسارة الوزن):</p>
          <input 
            type="text" 
            name="targetGoal"
            placeholder=' (مثل:بناء جسم قوي,خسارة الوزن)' 
            value={formData.targetGoal}
            onChange={handleChange}
          />
        </label>
        <p className="info">
          بعد الضغط على إرسال، سيتم فتح واتساب لإكمال عملية الدفع لشراء باقة {plan} بسعر {price} جنيه  .
        </p>
        <button onClick={handleSubmit}>
          <span>إرسال إلى واتساب</span>
        </button>
      </div>
    </div>
  );
};

export default SendingBox;