const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent("EcoPave Solutions – Project Enquiry");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nMobile: ${data.get("phone")}\nEmail: ${data.get("email") || "Not provided"}\nRequirement: ${data.get("requirement")}\nProject details: ${data.get("message") || "Not provided"}`
  );
  document.getElementById("formMessage").textContent =
    "Opening your email application with the enquiry details. Please review and send the email.";
  window.location.href = `mailto:info@ecopavesolutions.in?subject=${subject}&body=${body}`;
});
