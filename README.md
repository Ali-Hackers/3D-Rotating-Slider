Here's an engaging and detailed `README.md` file for your 3D Image Slider project in English:

---

# 🌀 3D Image Slider

Welcome to the **3D Image Slider** project! 🚀 This project features a sleek 3D image slider that rotates through images with an impressive 3D effect. Dive in and explore how it works!

🌟 Preview

📜 HTML
Here’s the HTML structure that sets up our slider:


## Features
- **3D Rotation Effect**: Impressive 3D rotation of images.
- **Responsive Design**: Adaptable to various screen sizes.
- **Manual Navigation**: "Prev" and "Next" buttons for image control.
- **Auto-Rolling**: Automatically rotates images at set intervals.

## How to Use

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>3D Image Slider</title>
    <link rel="stylesheet" href="rotateflex.css">
</head>
<body>
    <div class="slider-container">
        <div class="slider">
            <div class="image-container">
                <span class="slide" style="--i: 4"><img src="img/dog.jpg" alt="Dog"></span>
                <span class="slide" style="--i: 5"><img src="img/com.jpg" alt="Com"></span>
                <!-- Add more slides here -->
            </div>
        </div>
    </div>
    <div class="btn-container">
        <button class="btn" id="prev">Prev</button>
        <button class="btn" id="next">Next</button>
    </div>
    <script src="rotateflex.js"></script>
</body>
</html>
```

### CSS

```css
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  justify-content: center;
  background-color: yellow;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 250px;
  height: 300px;
  transform-style: preserve-3d;
  transform: perspective(1000px) rotateY(-135deg);
  transition: transform 0.7s;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(calc(var(--i) * 45deg)) translateZ(400px);
}

.slide img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.btn-container {
  position: relative;
  width: 80%;
}

.btn {
  position: absolute;
  bottom: -80px;
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  filter: brightness(1.5);
}

#prev {
  left: 20%;
}

#next {
  right: 20%;
}
```

### JavaScript

```javascript
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const imageContainer = document.querySelector(".image-container");

let changeposition = 0;

prevEl.addEventListener("click", () => {
    changeposition += 45;
    imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;
});

nextEl.addEventListener("click", () => {
    changeposition -= 45;
    imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;
});

function autoroll() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${changeposition}deg)`;
    setTimeout(() => {
        changeposition -= 45;
        autoroll();
    }, 3000);
}

autoroll();
```

## Installation
1. Clone this repository: `git clone https://github.com/your-username/3D-Image-Slider.git`
2. Navigate to the project directory: `cd 3D-Image-Slider`
3. Open `index.html` in your browser to view the slider.

## Contact
- **Email**: hello.alideveloper@gmail.com
- **WhatsApp**: +92 319 6992919
- **GitHub**: [Ali's GitHub](https://github.com/Ali-Hackers)

---

### **Happy Coding!** 🎉

---

Feel free to adjust the content to better fit your style or specific project details!
