import React from 'react'

const Plans = () => {
  return (
   <div class="plans">
    <div class="head">
      <h2>الاشتركات⚡</h2>
      <p>اختر الباقة المثالية التي تناسب أهدافك في اللياقة البدنية وأسلوب حياتك. جميع الباقات تشمل الوصول إلى فعالياتنا وأنشطتنا الاجتماعية المخصصة !</p>
    </div>
    
    <div class="plans-container">
      <div class="plan">
        <div class="plan-icon">
          <i class="fas fa-dumbbell"></i>
        </div>
        <h3>Starter Pack</h3>
        <div class="price">150</div>
        <ul class="features">
          <li><i class="fas fa-check"></i> Access to gym equipment</li>
          <li><i class="fas fa-check"></i> 3 group classes per week</li>
          <li><i class="fas fa-check"></i> Locker access</li>
          <li><i class="fas fa-check"></i> Basic workout plan</li>
          <li><i class="fafs fa-check"></i> Monthly progress check</li>
        </ul>
        <button class="btn">Get Started</button>
      </div>
      
      <div class="plan">
        <div class="popular-badge">MOST POPULAR</div>
        <div class="plan-icon floating">
          <i class="fas fa-fire"></i>
        </div>
        <h3>Fitness Pro</h3>
        <div class="price">49</div>
        <ul class="features">
          <li><i class="fas fa-check"></i> Unlimited equipment access</li>
          <li><i class="fas fa-check"></i> Unlimited group classes</li>
          <li><i class="fas fa-check"></i> Personal trainer consultation</li>
          <li><i class="fas fa-check"></i> Nutrition guide</li>
          <li><i class="fas fa-check"></i> Progress tracking</li>
          <li><i class="fas fa-check"></i> Supplement discounts</li>
        </ul>
        <button class="btn">Get Started</button>
      </div>
      
      <div class="plan">
        <div class="plan-icon">
          <i class="fas fa-crown"></i>
        </div>
        <h3>Elite Athlete</h3>
        <div class="price">79</div>
        <ul class="features">
          <li><i class="fas fa-check"></i> All Fitness Pro features</li>
          <li><i class="fas fa-check"></i> 1-on-1 personal training</li>
          <li><i class="fas fa-check"></i> Recovery sessions</li>
          <li><i class="fas fa-check"></i> Advanced nutrition plan</li>
          <li><i class="fas fa-check"></i> Competition preparation</li>
          <li><i class="fas fa-check"></i> 24/7 facility access</li>
        </ul>
        <button class="btn">Get Started</button>
      </div>
    </div>
    
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-music"></i>
        </div>
        <h4>Teen-Friendly Playlists</h4>
        <p>Work out to the latest hits curated specifically for our teen members.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-users"></i>
        </div>
        <h4>Social Events</h4>
        <p>Join our monthly social events to meet other teens with similar fitness goals.</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <i class="fas fa-trophy"></i>
        </div>
        <h4>Progress Challenges</h4>
        <p>Compete in fun challenges with prizes and rewards for reaching milestones.</p>
      </div>
    </div>
  </div>
  )
}

export default Plans