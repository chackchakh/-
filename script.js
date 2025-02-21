
// عند تغيير اختيار التهنئة





let selectedTheme = "";
let selectedMusic = "";

// دالة لعرض التصاميم الخاصة بكل فئة عند الضغط على الزر المناسب
function showThemes(category) {
    let themeSelection = document.getElementById("themeSelection");
    themeSelection.innerHTML = ""; // مسح أي محتوى سابق

    let themes = {
        green: ["background1.jpg", "background2.jpg", "background3.jpg"],
        red: ["background11.jpg", "background22.jpg", "background33.jpg"],
        blue: ["background111.jpg", "background222.jpg", "background333.jpg"]
    };

    themes[category].forEach(theme => {
        let img = document.createElement("img");
        img.src = theme;
        img.className = "theme-option";
        img.onclick = function() {
            selectTheme(theme);
        };
        themeSelection.appendChild(img);
    });
}

// دالة لاختيار التصميم وعرضه في المعاينة
function selectTheme(theme) {
    selectedTheme = theme;
    document.getElementById("previewCard").style.backgroundImage = `url('${theme}')`;
}

// دالة لاختيار الموسيقى وتشغيلها
function selectMusic(music) {
    selectedMusic = music;
    let previewMusic = document.getElementById("previewMusic");
    previewMusic.src = music;
    previewMusic.loop = true; // تشغيل الموسيقى بشكل متكرر
    previewMusic.autoplay = true; // تشغيل الموسيقى تلقائيًا
    previewMusic.play().catch(error => console.log("المتصفح منع التشغيل التلقائي:", error));
}

// دالة إنشاء البطاقة






function generateCard() {
    let name = document.getElementById("nameInput").value.trim();
    
    if (name === "" || selectedTheme === "" || selectedMusic === "") {
        alert("يرجى اختيار تصميم، موسيقى، وإدخال اسم قبل إنشاء البطاقة!");
        return;
    }

    let encodedName = encodeURIComponent(name);
    let cardUrl = `${window.location.origin}${window.location.pathname}?name=${encodedName}&theme=${selectedTheme}&music=${selectedMusic}`;

    // فتح الصورة في صفحة جديدة مع زر المشاركة وزر إنشاء بطاقة جديدة
    let newPage = window.open("", "_blank");
    newPage.document.write(`
        <html>
        <head><title>بطاقة رمضان</title>
    
    
    
    <style>
            body { text-align: center; font-family: Arial, sans-serif; background-color: #f8f9fa; }
            img {
    width: 95%; 
    margin-top: 20px; 
    border-radius: 10px; 
    height: 90%;
    }
    
    
            .btn { padding: 10px 15px; 
    background-color: #007bff; 
    color: white; 
    text-decoration: none; 
    border-radius: 5px; 
    display: inline-block; 
    margin-top: 20px; 
    
    position: absolute;
    top: 100%;
    left: 30%;
    transform: translate(-50%, -80%);
    
    }
        </style>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
     <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Reem+Kufi:wght@400..700&display=swap" rel="stylesheet">
    
    </head>
        <body>
    
    
    
    
    
    
            <h2> ${name}</h2>
    
    <audio id="bgMusic" autoplay loop>
    <source src="${selectedMusic}" type="audio/mp3">
</audio>
    
        <style>
        h2{
    font-size: 15px;
        z-index: 1000;
    position: absolute;
    top: 85%;
    left: 18%;
    transform: translate(-50%, -90%); /* لتحريكه إلى المنتصف بدقة */
    
  
  font-family: "Aref Ruqaa", serif;
  font-weight: 400;
  font-style: normal;
}

}

}
    
}
        }
        </style>
            <img src="${selectedTheme}" alt="بطاقة رمضان">
            <br>
    
    
            <div class="share-container">
    <button class="btn share-btn-main" onclick="toggleShareOptions()">📤 مشاركة البطاقة</button>
    <div id="shareOptions" class="share-options">
        <a href="https://wa.me/?text=${cardUrl}" target="_blank" class="share-btn whatsapp"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.messenger.com/t/?link=${cardUrl}" target="_blank" class="share-btn messenger"><i class="fab fa-facebook-messenger"></i></a>
    </div>
</div>
    </div>
</div>
    
    
    <style>
    
    /* تصميم الحاوية الرئيسية لمشاركة البطاقة */
.share-container {
    position: relativ
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 80%;
    transform: translate(-50%, -80%);
    z-index: 1001;
    
}

/* إخفاء خيارات المشاركة في البداية */
.share-options {
    display: none;
    position: absolute;
    top: 0px;
    left: 0%;
    transform: translate(-130%, -190%);
    
     background: rgba(269, 99, 295, 0.2); /* أبيض مع شفافية */
    backdrop-filter: blur(10px); /* تأثير التمويه */
    -webkit-backdrop-filter: blur(10px);
    
    border: 1px solid #ddd;
    border-radius: 50px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    padding: 10px;
    z-index: 1200;
    width: 100px;
    height: 140px;
    text-align: center;
}

/* تصميم أزرار واتساب ومسـنجر داخل الفقاعة */
.share-btn {
    display: block;
    padding: 10px;
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: white;
    border-radius: 50px;
    margin: 10px;
    text-align: center;
    
    
}

/* لون زر واتساب */
.whatsapp {
    background-color: #25D366;
}

/* لون زر مسنجر */
.messenger {
    background-color: #0084FF;
}
    
    </style>
    
            <br><br>
            <a href="${window.location.pathname}" class="btn">💌 أنشئ بطاقة لأحبائك</a>
    <style>
    </style>
        </body>
        </html>
    `);
    
    
    newPage.onload = function() {
    let bgMusic = newPage.document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.play().catch(error => console.log("المتصفح منع التشغيل التلقائي:", error));
    }
};

    
    // تشغيل الموسيقى تلقائيًا عند فتح البطاقة
    
}


function toggleShareOptions() {
    let shareOptions = document.getElementById("shareOptions");
    if (shareOptions.style.display === "block") {
        shareOptions.style.display = "none";
    } else {
        shareOptions.style.display = "block";
    }
}









