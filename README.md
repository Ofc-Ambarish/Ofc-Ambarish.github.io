# 🏗️ Ambarish Portfolio Website

A professional portfolio website for a Senior Manufacturing Engineer & Developer, featuring a dynamic blog system and complete admin panel.

## 🌟 Features

### 🎨 **Main Portfolio**
- **Hero Section** with animated background
- **About Me** with engineering focus
- **Skills Showcase** with interactive cards
- **Projects Gallery** with tech stacks
- **Blog Preview** with latest articles
- **Contact Form** with Firebase storage

### 📝 **Blog System**
- **Dynamic Blog Posts** from Firebase
- **Search & Filter** functionality
- **View Counting** for each article
- **Tag System** for categorization
- **Modal Reading** experience

### 🔐 **Admin Panel**
- **Secure Authentication** with Firebase Auth
- **Dashboard** with analytics
- **Blog Management** (CRUD operations)
- **Rich Text Editor** (TinyMCE)
- **Contact Messages** management
- **Image URL Management** for GitHub hosting

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, Bootstrap 5, JavaScript |
| **Backend** | Firebase (Firestore, Authentication) |
| **Editor** | TinyMCE Rich Text Editor |
| **Hosting** | GitHub Pages |
| **Images** | GitHub Repository Hosting |

## 📁 Project Structure

```
ambarish-portfolio/
├── 📄 index.html                 # Main portfolio page
├── 📄 blog.html                  # Blog listing page
├── 📂 admin/                     # Admin panel
│   ├── 🔐 admin-login.html       # Authentication
│   ├── 📊 admin-dashboard.html   # Analytics dashboard
│   ├── 📝 admin-blogs.html       # Blog management
│   ├── ✏️ admin-blog-editor.html # Blog post editor
│   └── 📧 admin-messages.html    # Contact messages
├── 📂 images/                    # Image assets
│   ├── 📂 blog/                  # Blog post images
│   ├── 📂 authors/               # Author profile pictures
│   └── 📂 admin/                 # Admin panel images
└── 📂 assets/                    # Additional assets
    ├── 📂 css/                   # Custom stylesheets
    └── 📂 js/                    # JavaScript files
```

## 🚀 Quick Start

### 1. **Clone & Setup**
```bash
# Clone your repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# File structure is ready - just upload to GitHub
```

### 2. **Firebase Configuration**

#### Create Firebase Project:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project: `ambarish-portfolio`
3. Enable **Firestore Database**
4. Enable **Authentication** (Email/Password)

#### Update Firebase Config:
Replace in all HTML files:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 3. **Firestore Collections Setup**

#### Required Collections:
- `blogs` - Blog posts
- `blogViews` - View counts (auto-created)
- `contactMessages` - Contact form submissions
- `adminUsers` - Admin users (optional)

#### Blog Post Structure:
```javascript
{
  title: "Post Title",
  summary: "Brief summary",
  content: "HTML content",
  image: "images/blog/filename.jpg",
  date: "2024-01-20",
  readTime: "5 min read",
  tags: ["tag1", "tag2"],
  author: {
    name: "Ambarish",
    image: "images/authors/ambarish.jpg"
  },
  status: "published", // or "draft"
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp()
}
```

### 4. **GitHub Images Setup**

#### Create Folder Structure:
```
images/
├── blog/           # Blog post images
├── authors/        # Profile pictures
├── projects/       # Project screenshots
└── admin/          # Admin panel assets
```

#### Upload Images:
- Manual upload to GitHub repository
- Use paths like: `images/blog/your-image.jpg`
- Supported formats: JPG, PNG, WebP

### 5. **Admin User Setup**

#### Create Admin Account:
1. Go to Firebase Console → Authentication
2. Enable Email/Password sign-in
3. Add user: `your-email@domain.com`
4. Use this to login at `/admin/admin-login.html`

## 🎯 Usage Guide

### 📝 Managing Blog Posts

1. **Login to Admin Panel**
   - Navigate to `yoursite.com/admin/admin-login.html`
   - Use your Firebase credentials

2. **Create New Post**
   - Click "New Blog Post" in dashboard
   - Fill in title, summary, content
   - Set featured image URL (GitHub path)
   - Add tags and set status
   - Save as draft or publish immediately

3. **Manage Existing Posts**
   - View all posts in blog management
   - Edit, delete, or change status
   - Monitor view counts

### 🖼️ Image Management

#### Adding Blog Images:
1. Upload image to `images/blog/` on GitHub
2. Use URL: `images/blog/your-filename.jpg`
3. Enter this URL in blog post editor

#### Example Image URLs:
- Blog post: `images/blog/cnc-programming.jpg`
- Author: `images/authors/ambarish.jpg`
- Project: `images/projects/factory-app.jpg`

### 📊 Monitoring Analytics

#### Dashboard Shows:
- Total blog posts
- Total views across all posts
- Unread messages
- Draft posts count
- Recent activity
- Popular posts

## 🔧 Customization

### 🎨 Theme Colors
Edit CSS variables in all files:
```css
:root {
  --primary: #00f5ff;    /* Cyan */
  --secondary: #7b00ff;  /* Purple */
  --dark: #0a0a1a;       /* Dark blue */
  --light: #e2f1f8;      /* Light blue */
}
```

### 📱 Content Updates

#### Personal Information:
- Update hero section in `index.html`
- Modify about me content
- Add your actual projects
- Update social media links

#### Skills & Technologies:
- Edit skills section in `index.html`
- Add/remove tech stack items
- Update project descriptions

## 🚀 Deployment

### GitHub Pages:
1. Push all files to GitHub repository
2. Go to repository Settings → Pages
3. Select source: `main` branch
4. Your site will be at: `https://username.github.io/repository-name`

### Custom Domain (Optional):
1. Add `CNAME` file with your domain
2. Configure DNS settings
3. Update in GitHub Pages settings

## 🛡️ Security Features

- **Firebase Security Rules** for data protection
- **Admin-only access** to sensitive areas
- **Input validation** on all forms
- **XSS protection** through proper sanitization

## 📞 Support & Maintenance

### Regular Tasks:
- ✅ Monitor contact messages
- ✅ Update blog content regularly
- ✅ Backup Firebase data periodically
- ✅ Update dependencies as needed

### Troubleshooting:
- **Images not loading**: Check GitHub image paths
- **Login issues**: Verify Firebase Auth configuration
- **Form errors**: Check Firestore security rules

## 🎉 Success Metrics

Your portfolio is now equipped with:
- ✅ **Professional Design** - Attracts potential employers/clients
- ✅ **Content Management** - Easy blog updates without coding
- ✅ **Performance Optimized** - Fast loading with GitHub CDN
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **SEO Ready** - Proper structure for search engines

## 🔮 Future Enhancements

Potential upgrades:
- **Email notifications** for new messages
- **Comment system** for blog posts
- **Advanced analytics** with Google Analytics
- **Multi-language support**
- **Dark/Light theme toggle**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Ambarish**  
Senior Manufacturing Engineer & Developer  
- 🌐 Portfolio: [your-github-pages-url]
- 📧 Email: ambarish.ofc@gmail.com
- 💼 LinkedIn: [Your LinkedIn Profile]
  
---
