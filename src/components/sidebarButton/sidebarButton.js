
export function SidebarButton(imgPath, imgHeight, alpha) {

  const sidebarBtn = document.createElement("button");
  sidebarBtn.className = "sidebar-btn";

  const sidebarBtnImg = document.createElement("img");
  sidebarBtnImg.className = "sidebar-btn-img";
  sidebarBtnImg.style.height = imgHeight;
  sidebarBtnImg.style.opacity = alpha;
  sidebarBtnImg.src = imgPath;
  sidebarBtn.appendChild(sidebarBtnImg);

  return sidebarBtn;
}