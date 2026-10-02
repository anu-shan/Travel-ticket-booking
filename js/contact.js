const contactForm=document.getElementById("contactForm");
const contactMessage=document.getElementById("contactMessage");
contactForm.addEventListener("submit",function(event){
  event.preventDefault();
  const name=document.getElementById("contactName").value.trim();
  const email=document.getElementById("contactEmail").value.trim();
  const subject=document.getElementById("subject").value.trim();
  const message=document.getElementById("message").value.trim();
  if(!name||!email||!subject||!message){
    contactMessage.textContent="Please complete all fields.";
    contactMessage.className="error-message";
    return;
  }
  contactMessage.textContent="Thank you! Your message has been sent successfully.";
  contactMessage.className="success-message";
  contactForm.reset();
});