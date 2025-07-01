import React from 'react'
import img from '../assets/images/box-head.png'
import img2 from '../assets/images/food.png'
import img3 from '../assets/images/daily.png'
import img4 from '../assets/images/man.jpg'

const Whyus = () => {
  return (
    <div className='WhyUs'>  
      <div className='head'> ليه تبدأ دلوقت -</div>  

      <div className="slide">  
        {/* صندوق نظام غذائي */}
        <div className="box" style={{ "--clr": "#006A67" }}>  
          <div className="box-head" style={{ "--clr": "#006A6752" }}>  
            <img src={img2} alt="box-head" />  
            <h1 style={{ "--clr": "#008f67" }}>نظام غذائي</h1>  
          </div>  
          <ul>
            <li>نقدملك نظام غذائي متكامل ومتوازن.</li>
            <li>مصمم خصيصًا حسب وزنك الحالي وأهدافك.</li>
            <li>يناسب خسارة الدهون أو زيادة العضلات أو تحسين الصحة.</li>
            <li>لو النظام مش مناسبك نعدله بسهولة.</li>
            <li>نضمن لك أفضل نتائج بأقل مجهود ممكن.</li>
          </ul>
        </div>  

        {/* صندوق متابعة يومية */}
        <div className="box" style={{ "--clr": "#FFCC0082" }}>  
          <div className="box-head" style={{ "--clr": "#FFCC0022" }}>  
            <img src={img3} alt="box-head" />  
            <h1 style={{ "--clr": "#FFCC00" }}>متابعة يومية</h1>  
          </div>  
          <ul>
            <li>معاك يوميًا خطوة بخطوة.</li>
            <li>نتابع تقدمك ونساعدك في أي استفسار.</li>
            <li>نعدّل الخطة لو احتجت بسهولة.</li>
            <li>نوفر لك دعم وتشجيع مستمر.</li>
            <li>نساعدك توصل لهدفك بسرعة وأمان.</li>
          </ul>
        </div>  

        {/* صندوق تمارين منزلية */}
        <div className="box" style={{ "--clr": "#198734" }}>  
          <div className="box-head" style={{ "--clr": "#19873441" }}>  
            <img src={img} alt="box-head" />  
            <h1 style={{ "--clr": "#198734" }}>تمارين منزلية</h1>  
          </div>  
          <ul>
            <li>تمارين بسيطة وفعالة من غير معدات.</li>
            <li>تقدر تعملها في البيت بسهولة.</li>
            <li>مناسبة لمستوى لياقتك الحالي.</li>
            <li>نشرح طريقة التنفيذ لتجنب الإصابات.</li>
            <li>تحقق نتائج ممتازة في وقت قصير.</li>
          </ul>
        </div>  
            <div className="box" style={{ "--clr": "#4300FF" }}>  
          <div className="box-head" style={{ "--clr": "#4300FF48" }}>  
            <img src={img4} alt="box-head" style={{"borderRadius":"50%","width":"70px","height":"70px"}}/>  
            <h1 style={{ "--clr": "#4300FF" }}>زيادة الثقة بالنفس</h1>  
          </div>  
          <ul>
            <li>تمارين بسيطة وفعالة من غير معدات.</li>
            <li>تقدر تعملها في البيت بسهولة.</li>
            <li>مناسبة لمستوى لياقتك الحالي.</li>
            <li>نشرح طريقة التنفيذ لتجنب الإصابات.</li>
            <li>تحقق نتائج ممتازة في وقت قصير.</li>
          </ul>
        </div>  
      </div>  
    </div>
  )
}

export default Whyus;
