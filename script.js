document.getElementById("contactBtn").onclick = () => {
document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("contact-form").addEventListener("submit", function(e){
e.preventDefault();

emailjs.sendForm(
"service_ltzp00m",
"template_raf249b",
this
).then(() => {
document.getElementById("msg").textContent = "Message sent successfully!";
this.reset();
}).catch(() => {
document.getElementById("msg").textContent = "Failed to send message.";
});
});