
export function SidebarButton(imgPath, {imgHeight="100%", alpha="1", onClick=() => {}} = {}) {

  const sidebarBtn = document.createElement("button");
  sidebarBtn.className = "sidebar-btn";

  const sidebarBtnImg = document.createElement("img");
  sidebarBtnImg.className = "sidebar-btn-img";
  sidebarBtnImg.style.height = imgHeight;
  sidebarBtnImg.style.opacity = alpha;
  sidebarBtnImg.src = imgPath;
  sidebarBtn.appendChild(sidebarBtnImg);

  sidebarBtn.addEventListener("click", onClick);

  return sidebarBtn;
}