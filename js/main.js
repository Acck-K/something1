document.addEventListener("DOMContentLoaded", () => {
    console.log("博客已加载 · Aicoke");

    // 根据当前路径自动高亮对应导航按钮（即使 HTML 里没有手动加 active 也能生效）
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    const page = file === "" ? "index.html" : file;

    const map = {
        "index.html": "index.html",
        "articles.html": "articles.html",
        "about.html": "about.html"
    };

    let current = map[page];
    if (!current && path.indexOf("/posts/") !== -1) {
        current = "articles.html";
    }
    if (!current) {
        current = "index.html";
    }

    document.querySelectorAll(".nav-btn").forEach((btn) => {
        const href = btn.getAttribute("href") || "";
        const target = href.substring(href.lastIndexOf("/") + 1);
        btn.classList.toggle("active", target === current);
    });
});
