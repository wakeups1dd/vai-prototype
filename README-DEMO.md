# VAI-ai School Demo System - Complete Setup Guide

## 📋 Overview
This is the complete VAI-ai educational platform with integrated **School Demo Account** functionality. Schools can test the platform with limited access before purchasing full licenses.

---

## 🎯 What's New - Demo Features

### 1. **Landing Page with Demo Videos**
- ✅ Two embedded videos (History & Geography) visible to everyone
- ✅ Demo credentials prominently displayed
- ✅ Smooth mobile-responsive design

### 2. **School Demo Account**
- 📧 **Email:** school@vai-demo.com
- 🔐 **Password:** School@2024
- ⚠️ **Restrictions:**
  - Limited to **5 questions** in Ask AI section
  - **Timetable generation allowed only once**
  - Access to **History, Geography, and Science** content only
  - Other subjects show "Subscribe to View" overlay

### 3. **Visual Indicators**
- Question counter showing remaining questions
- Demo welcome banner on first login
- Subscribe modals for restricted content
- Clear upgrade call-to-actions

---

## 📁 File Structure

```
vai-demo/
├── landing.html                  # NEW: Updated landing page with demo videos
├── demo-videos.css              # NEW: Demo videos section styling
├── auth-script.js               # NEW: Updated auth with demo account
├── demo-restrictions.js         # NEW: Core demo restrictions logic
├── demo-restrictions.css        # NEW: Demo UI styling
├── login.html                   # UPDATED: Added school demo button
├── auth-script-advanced.js      # UPDATED: Added school demo login
├── auth-styles.css              # UPDATED: Demo card styling
├── index.html                   # UPDATED: Includes demo scripts
├── [All original files...]      # Original VAI-ai files
└── README-DEMO.md              # This file
```

---

## 🚀 Quick Start

### **Method 1: Direct Access**
1. Open `landing.html` in a web browser
2. Scroll to the demo videos section
3. Note the school demo credentials displayed
4. Click "Login with Demo Account"

### **Method 2: Manual Login**
1. Open `login.html`
2. Click the "🏫 School Demo" card in role selection
3. Or use "Try School Demo" button in login form
4. Credentials auto-fill, click "Sign In"

---

## 🎓 Demo Account Features & Restrictions

### ✅ **Available Features**
- **Full Access to:**
  - History (all chapters with videos)
  - Geography (all chapters with videos)
  - Science (all chapters with videos)
- **Limited Access:**
  - Ask AI Questions: 5 questions maximum
  - Timetable Generator: Generate once only
  - Dashboard: View-only statistics

### ❌ **Restricted Features**
- **Subjects:** Hindi, Marathi, Civics (Subscribe to view)
- **AI Questions:** After 5 questions, upgrade prompt appears
- **Timetable:** Can't regenerate after first generation
- **Past Papers:** Limited to available subjects
- **Board Papers:** Limited to available subjects

---

## 💻 Implementation Details

### **1. Authentication System**
```javascript
// School Demo User Object
{
    username: 'school_demo',
    email: 'school@vai-demo.com',
    password: 'School@2024',
    role: 'school_demo',
    isDemoAccount: true,
    questionLimit: 5,
    questionsAsked: 0,
    timetableGenerated: false,
    allowedSubjects: ['History', 'Geography', 'Science']
}
```

### **2. Question Tracking**
- Counter updates in real-time
- LocalStorage persists question count
- Warning at 2 questions remaining
- Modal blocks questions after limit reached

### **3. Subject Restrictions**
- Overlay appears on restricted subject cards
- Click triggers upgrade modal
- Videos only load for allowed subjects

### **4. Timetable Control**
- Boolean flag `timetableGenerated`
- Modal prevents regeneration
- Saved timetable remains viewable

---

## 🎨 Customization Options

### **Change Question Limit**
Edit in `auth-script.js`:
```javascript
questionLimit: 5  // Change to desired number
```

### **Modify Allowed Subjects**
Edit in `auth-script.js`:
```javascript
allowedSubjects: ['History', 'Geography', 'Science']
// Add or remove subjects as needed
```

### **Update Demo Credentials**
Edit in `auth-script.js`:
```javascript
username: 'school_demo',
password: 'School@2024',
email: 'school@vai-demo.com'
```

### **Customize Contact Information**
Edit in `demo-restrictions.js` → `showContactInfo()`:
```javascript
<p><strong>Email:</strong> info@vai-ai.com</p>
<p><strong>Phone:</strong> +91 XXX XXX XXXX</p>
```

---

## 📱 Mobile Responsiveness

All demo features are fully mobile-responsive:
- ✅ Demo video cards stack vertically on mobile
- ✅ Question counter adapts to smaller screens
- ✅ Modals are touch-friendly
- ✅ Welcome banner adjusts position
- ✅ Navigation maintained across all devices

---

## 🧪 Testing Checklist

### **Landing Page**
- [ ] Both demo videos load and play
- [ ] Demo credentials are clearly visible
- [ ] All buttons navigate correctly
- [ ] Mobile hamburger menu works

### **Login & Authentication**
- [ ] School demo card appears on login page
- [ ] Quick fill button works
- [ ] Auto-login with demo credentials works
- [ ] Session persists after page refresh

### **Demo Restrictions**
- [ ] Welcome banner appears on first login
- [ ] Question counter displays correctly
- [ ] Questions increment properly
- [ ] Limit modal appears after 5 questions
- [ ] Subscribe overlays appear on restricted subjects
- [ ] Timetable generates only once

### **Mobile Testing**
- [ ] All features work on phones
- [ ] Videos are responsive
- [ ] Modals are touch-friendly
- [ ] Navigation smooth on mobile

---

## 🔧 Troubleshooting

### **Issue: Demo videos not loading**
- Check internet connection
- Ensure Google Drive video IDs are correct
- Verify videos are set to "Anyone with link can view"

### **Issue: Questions not counting**
- Clear browser localStorage: `localStorage.clear()`
- Refresh page
- Login again with demo account

### **Issue: Timetable regenerates**
- Check localStorage for `timetableGenerated` flag
- Ensure `demo-restrictions.js` is loaded before `script.js`

### **Issue: All subjects visible**
- Verify `demo-restrictions.js` is included in index.html
- Check browser console for JavaScript errors
- Ensure `allowedSubjects` array is correct

---

## 📞 Support & Contact

For full platform access or questions:
- **Email:** info@vai-ai.com
- **Website:** www.vai-ai.com
- **Phone:** +91 XXX XXX XXXX

---

## 🎯 Next Steps for Schools

### **After Testing the Demo:**

1. **Contact Sales Team**
   - Schedule platform walkthrough
   - Discuss institutional pricing
   - Custom features for your school

2. **Full Access Includes:**
   - Unlimited questions for all students
   - Access to all subjects
   - Unlimited timetable generations
   - Analytics and reporting
   - Teacher admin panel
   - Custom content upload
   - Priority support

3. **Implementation Process:**
   - Student account creation
   - Teacher training
   - Content customization
   - Integration support

---

## 📝 Important Notes

1. **Demo Account Persistence**
   - Question count resets when localStorage is cleared
   - Timetable flag persists in localStorage
   - Session expires when browser is closed

2. **Video Hosting**
   - Videos are hosted on Google Drive
   - Ensure proper sharing settings
   - Update video IDs in `script.js` if needed

3. **Production Deployment**
   - Replace demo contact info with real details
   - Update video content with actual lessons
   - Consider implementing server-side tracking
   - Add real payment/subscription system

4. **Security Considerations**
   - Demo credentials are public (by design)
   - Don't store sensitive school data
   - Implement proper auth for production
   - Add rate limiting for API calls

---

## 🚀 Deployment Steps

1. **Update Configuration**
   ```javascript
   // In demo-restrictions.js
   - Update contact information
   - Verify question limits
   - Check allowed subjects
   ```

2. **Test Locally**
   ```bash
   # Open landing.html in browser
   # Test all demo features
   # Verify mobile responsiveness
   ```

3. **Upload to Server**
   ```bash
   # Upload all files maintaining structure
   # Ensure proper permissions
   # Test on live domain
   ```

4. **Share Demo Access**
   ```
   Demo Page: https://yourschool.com/landing.html
   Login: school@vai-demo.com
   Password: School@2024
   ```

---

## 📊 Analytics Tracking (Optional)

Consider adding:
- Google Analytics for page views
- Track demo login attempts
- Monitor video play rates
- Count upgrade modal displays

---

## ✨ Future Enhancements

Potential additions:
- [ ] Time-limited demo (expires after 7 days)
- [ ] Email verification for demo signup
- [ ] Admin dashboard to monitor demo usage
- [ ] Automated demo account creation
- [ ] Integration with CRM system
- [ ] Custom demo experiences per school

---

**Last Updated:** February 2024  
**Version:** 1.0  
**Developer:** AiforTech Team  
**License:** Proprietary

---

## 🎉 Ready to Launch!

Your VAI-ai platform with School Demo is now complete and ready to showcase to educational institutions. The demo provides a perfect balance of functionality and restriction to convert prospects into customers.

Good luck with your demonstrations! 🚀📚
