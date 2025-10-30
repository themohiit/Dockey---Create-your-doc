
---

📝 Google Docs Clone (Full-Stack)

A full-featured Google Docs Clone built using Next.js 15, Convex, Clerk, Liveblocks, TipTap, Tailwind CSS, and Shadcn UI — featuring real-time collaboration, comments, organization workspaces, and advanced document editing tools.


---

🚀 Demo

🔗 Live Site: https://your-vercel-app-url.vercel.app
🧑‍💻 GitHub Repo: https://github.com/themohiit/your-repo-name


---

🌟 Key Features

✅ Rich Text Editor (Powered by TipTap)
🤝 Real-time Collaboration using Liveblocks + Convex
💭 Comments, Mentions & Threads
🔔 Notifications System
📑 Document Templates
📋 Copy / Paste Formatting
↩️ Undo & Redo History
📊 Table Support
🖼️ Image Uploads
📏 Margin Controls
⬇️ Export Options: PDF, HTML, TXT, JSON
👥 User Profiles
🏢 Organization Workspaces & Invites
🔒 Authentication (Clerk)
📱 Fully Responsive Design
🎯 Real-time Cursor Tracking
🎨 Advanced Text Formatting Tools
📝 Lists and Checklists
🔗 Link Embedding


---

⚙️ Tech Stack

Category	Technology

Frontend	Next.js 15, React, Tailwind CSS, Shadcn UI
Editor	TipTap, Custom Extensions
Backend	Convex (Database + API)
Auth	Clerk
Collaboration	Liveblocks
Deployment	Vercel
Language	TypeScript



---

🧩 Project Structure

google-docs-clone/
│
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Workspace & Document pages
│   ├── api/                # Serverless functions
│   └── layout.tsx          # Root layout
│
├── components/             # UI Components
│   ├── editor/             # TipTap Editor Components
│   ├── navbar/             # Navigation Bar
│   └── ui/                 # Shared UI Elements
│
├── lib/                    # Config, utils, constants
├── convex/                 # Convex backend functions
├── public/                 # Assets & Logos
└── package.json


---

🧠 Features Breakdown (Timestamps)

Feature	Time

Project Setup	00:00 – 02:13
TipTap Editor	46:49 – 01:26:49
Custom Extensions (Font, Size, Line Height)	03:00:03 – 03:19:40
Database (Convex)	05:16:25 – 05:33:29
Authentication (Clerk)	05:33:29 – 05:51:27
Real-time Collaboration (Liveblocks)	07:23:29 – 07:47:12
Notifications	08:30:35 – 08:47:19
Templates & Optimization	09:27:31 – 09:39:27
Deployment	09:39:27 – 09:58:27



---

🧰 Setup Instructions

1️⃣ Clone the repository

git clone https://github.com/themohiit/your-repo-name.git
cd your-repo-name

2️⃣ Install dependencies

npm install
# or
yarn install

3️⃣ Setup environment variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_CONVEX_URL=your_convex_url
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

4️⃣ Run the development server

npm run dev

App will be available at:
👉 http://localhost:3000


---

🧾 Export Options

You can export documents as:

PDF

HTML

TXT

JSON



---

🧑‍💻 Author

👋 Mohit Singh Chauhan
🎓 BTech CSE | Full Stack MERN Developer | Passionate about building AI-integrated web apps
🌐 Portfolio
📧 mohitchauhan6585@gmail.com
💻 GitHub | LinkedIn


---

🏁 Deployment

Deployed on Vercel
Run production build locally:

npm run build
npm start


---

🏷️ License

This project is open-source and available under the MIT License.


---

⭐ Support

If you like this project, don’t forget to star ⭐ the repository and share it with others!
Your support helps in building more awesome open-source projects 🚀


