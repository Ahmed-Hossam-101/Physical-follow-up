import React, { useState } from 'react';
import SendingBox from './sendingbox';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  // بيانات الباقات
  const plans = [
    {
      id: 1,
      name: "الـ Basic",
      price: "250",
      features: [
        "خصم بدل 325جنيه لفترة محدودة!",
        "اشتراك اسبوعي",
                "تواصل بشكل يومي مع مدرب علي وتس آب ",
        "استشارة مع مدرب شخصي",
        "خطة تمرين أساسية",
        "دليل غذائي متكامل",

      ],
      popular: false
    },
    {
      id: 2,
      name: "🔥 الـفرجلوو",
      price: "1000",
      features: [

        "اشتراك ثلاث شهور  ",
        "تواصل بشكل يومي مع مدرب علي وتس آب ",
     "تواصل فديو كول كل اسبوع",
        "استشارة مع مدرب شخصي",
        "دليل غذائي متكامل",
        "متابعة دقيقة للتقدم",
      ],
      popular: true,
      floatingIcon: true
    },
    {
      id: 3,
      name: "Elite سوبر ",
      price: "2299",
      features: [
        "6 شهور اشتراك",
        "تدريب شخصي 1 على 1",
        "خطة تغذية متقدمة",
        "تواصل فديو كول كل اربع ايام",
        "تواصل يومي مع مدرب علي واتس آب",
      ],
      popular: false
    }
  ];

  // بيانات المميزات العامة
  const features = [
    {
      id: 1,
      title: " قناة تلجرام",
      description: " قناة تلجرام عشان تتواصل مع الاعضاء",
    },
    {
      id: 3,
      title: "تحديات التقدم",
      description: "شارك في تحديات ممتعة واحصل على جوائز عند تحقيقك للأهداف والمستويات الجديدة.",
    }
  ];

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="plans">
      <div className="head">
        <h2>الاشتركات⚡</h2>
        <p>اختر الباقة المثالية التي تناسب أهدافك في اللياقة البدنية وأسلوب حياتك. جميع الباقات تشمل الوصول إلى فعالياتنا وأنشطتنا الاجتماعية المخصصة!</p>
      </div>

      <div className="plans-container">
        {plans.map(plan => (
          <div className="plan" key={plan.id}>
            {plan.popular && <div className="popular-badge">RECOMMENDED</div>}
            
            <h3>{plan.name}</h3>
            <div className="price">{plan.price}</div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className="btn" 
              onClick={() => handleSubscribe(plan)}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <SendingBox 
          date={new Date().toLocaleDateString()} 
          price={selectedPlan.price} 
          plan={selectedPlan.name} 
        />
      )}

      <div className="features-grid">
        {features.map(feature => (
          <div className="feature-card" key={feature.id}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;