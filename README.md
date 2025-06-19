# RQ React Assessment

This project is a React-based solution for the **RQ Frontend Assessment**, consisting of three key tasks:  
1. User Card Component  
2. Counter Component  
3. Contact Form with Validation  

Built using **Vite** and **React**, with a focus on component design, state management, form handling, and user experience.

---

## 🚀 Project Setup

```bash
npm install
npm run dev

```
🧩 Tasks Breakdown

✅ Task 1.1: User Card Component (⏱️ ~20-25 mins)

Features:

- Accepts name, email, gender, avatar, and isOnline props

- Displays user info in a styled card

- Shows green/red status dot based on online/offline status

- Includes form input to dynamically add users

- Handles missing avatars with gender-based placeholder defaults

- Assumptions Made:

- isOnline status was randomized using Math.random() for each new user

- Instead of hardcoding multiple UserCards, a dynamic form was implemented to add users via input

- Avatar was selected based on gender using a conditional fallback


✅ Task 1.2: Counter Component (⏱️ ~5 mins)

Features:

- Increment, Decrement, and Reset buttons

- Decrement disabled at 0

- Text color changes to red when counter exceeds 10, and reverts to black otherwise

✅ Task 3: Contact Form (⏱️ ~10–15 mins)

Features:

Input fields: name, email, and message

- Validates:

   -  All fields are required

   - Email format must be valid (regex based)

- Logs data to the console

- Clears form after successful submission

---


🛠️ Tech Stack
- React (with Vite)

- JavaScript (ES6+)

- HTML5 + CSS3

- Git & GitHub for version control

---

👤 Author

- Muhammad Suffian Soomro

- GitHub: @Suffian10
