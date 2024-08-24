import { TextAreaService } from "../../services/textAreaService.js";

export function MessageBoxComponent() {

  // instances
  const textAreaService = new TextAreaService();


  // component
  const messagebox = document.createElement("div");
  messagebox.className = "messagebox";

  // add label div
  const messageboxLabelDiv = document.createElement("div");
  messageboxLabelDiv.className = "messagebox-label";
  //
  const icon = document.createElement("img");
  icon.className = "messagebox-icon";
  icon.src = "./assets/images/otowp.ico";
  messageboxLabelDiv.appendChild(icon);
  //
  const labelText = document.createElement("span");
  labelText.className = "label-text";
  labelText.innerText = "OTOWP"
  messageboxLabelDiv.appendChild(labelText);
  //
  messagebox.appendChild(messageboxLabelDiv);
  //
  const labelP = document.createElement("div");
  labelP.className = "label-p";
  labelP.innerText = "Kutuya mesajınızı yazın ve gönder butonuna tıklayın."
  messagebox.appendChild(labelP);


  // add textarea
  const messageboxTextArea = document.createElement("textarea");
  messageboxTextArea.className = "messagebox-textarea";
  messagebox.appendChild(messageboxTextArea);

  // add lower div
  const messageboxLowerDiv = document.createElement("div");
  messageboxLowerDiv.className = "messagebox-lower"
  messagebox.appendChild(messageboxLowerDiv);
  //
  const sendBtnAlignHelperDiv = document.createElement("div");
  sendBtnAlignHelperDiv.style.width = "100%";
  messageboxLowerDiv.appendChild(sendBtnAlignHelperDiv);
  //
  const sendBtn = document.createElement("button");
  sendBtn.className = "send-btn";
  sendBtn.addEventListener("click", () => {
    textAreaService.sendMessage(messageboxTextArea.value);
  });
  sendBtnAlignHelperDiv.appendChild(sendBtn);
  //
  const sendBtnImg = document.createElement("img");
  sendBtnImg.src = "./assets/images/send.png";
  sendBtnImg.style.height = "100%";
  sendBtn.appendChild(sendBtnImg);
  // 
  const footer = document.createElement("div");
  footer.className = "messagebox-footer";
  footer.innerText = "OTOWP Muhammet Furkan Ünal tarafından hazırlanmıştır. Tüm hakları saklıdır.";
  messageboxLowerDiv.appendChild(footer);


  return messagebox;
}
