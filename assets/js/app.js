(function () {
  const config = window.SANGSOOK_CONFIG || {};
  const appUrl = String(config.appUrl || "").trim();

  function isConfigured(url) {
    return url && !url.includes("PASTE_YOUR_");
  }

  function openReportApp() {
    if (!isConfigured(appUrl)) {
      alert(
        "ยังไม่ได้ตั้งค่า Google Apps Script URL\n\n" +
        "เปิด assets/js/config.js แล้ววาง URL ที่ลงท้ายด้วย /exec ใน appUrl"
      );
      return;
    }
    window.location.href = appUrl;
  }

  document.querySelectorAll("[data-open-app]").forEach((button) => {
    button.addEventListener("click", openReportApp);
  });

  const fb = String(config.facebookPageUrl || "").trim();
  const fbBox = document.getElementById("facebookNewsBox");
  if (fbBox) {
    if (fb) {
      fbBox.innerHTML = `
        <div class="news-live-card">
          <div class="news-live-icon">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div>
            <span class="eyebrow">ข่าวประชาสัมพันธ์</span>
            <h3>ติดตามข่าวล่าสุดจาก Facebook</h3>
            <p>เปิดดูประกาศ ข่าวกิจกรรม และการประชาสัมพันธ์ล่าสุดจากเพจของโครงการ</p>
            <a class="btn btn-dark" href="${fb}" target="_blank" rel="noopener">
              <i class="fa-brands fa-facebook me-2"></i>เปิด Facebook Page
            </a>
          </div>
        </div>`;
    } else {
      fbBox.innerHTML = `
        <div class="news-live-card muted">
          <div class="news-live-icon">
            <i class="fa-solid fa-bullhorn"></i>
          </div>
          <div>
            <span class="eyebrow">ข่าวประชาสัมพันธ์</span>
            <h3>พื้นที่ข่าวและกิจกรรม</h3>
            <p>สามารถเชื่อม Facebook Page ของโครงการได้ภายหลัง โดยกรอก URL ใน <code>assets/js/config.js</code></p>
          </div>
        </div>`;
    }
  }

  const menu = document.getElementById("mobileMenu");
  const toggle = document.getElementById("menuToggle");
  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open"));
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => menu.classList.remove("open"));
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
