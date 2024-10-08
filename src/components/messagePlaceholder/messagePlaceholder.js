import { Injections } from "../../core/Injections.js";

export function MessagePlaceholder () {

  const injections = new Injections();

  const messagePlaceholder = document.createElement("div");
  messagePlaceholder.className = "message-placeholder";
  messagePlaceholder.style.display = "flex";

  // add image
  const otowpIcon = document.createElement("img");
  otowpIcon.className = "icon";
  otowpIcon.src = injections.images + "otowp.ico";
  messagePlaceholder.appendChild(otowpIcon);
  // 
  // add text
  const placeholderText1 = document.createElement("span");
  placeholderText1.className = "placeholder-text";
  placeholderText1.innerText = "Otomatik WhatsApp Botu";
  messagePlaceholder.appendChild(placeholderText1);
  //
  const placeholderText2 = document.createElement("span");
  placeholderText2.className = "placeholder-text";
  placeholderText2.style.fontSize = "1.2vw"
  placeholderText2.innerText = "Mesaj göndermek için bir sohbete tıkla veya kategori seç.";
  messagePlaceholder.appendChild(placeholderText2);

  
  return messagePlaceholder;
}