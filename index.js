const supportedTarget = 100;
const staffTarget = 25;
const exTarget = 10;
const aveTarget = 10;
const clientTarget = 300;
const staff = document.getElementById("noOfstaff");
const supported = document.getElementById("supported");
const experience = document.getElementById("experience");
const time = document.getElementById("time");
const retention = document.getElementById("client");

const startTime = performance.now();
const duration = 9000;

function animate(now) {
  const elapsed = now - startTime;
  const progress = Math.min(elapsed / duration, 1);
  const eased = 1 - Math.pow(1 - progress, 3);
  const noOfSupported = Math.round(eased * supportedTarget);
  const numOfStaff = Math.round(eased * staffTarget);
  const noOfExp = Math.round(eased * exTarget);
  const noOfAve = Math.round(eased * aveTarget);
  const noOfclient = Math.round(eased * clientTarget);

  staff.textContent = `${numOfStaff}+`;
  supported.textContent = `${noOfSupported}+`;
  experience.textContent = `${noOfExp}+`;
  time.textContent = `${noOfAve}mins`;
  retention.textContent = `${noOfclient}+`;

  if (progress < 1) {
    requestAnimationFrame(animate);
  }
}
requestAnimationFrame(animate);

const validate = document.getElementById("form");

validate.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formdata = {
    fullname: document.getElementById("fulname").value,
    email: document.getElementById("email").value,
    orgainization: document.getElementById("company").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
  } catch (error) {
    console.error("Unable to submit contact form:", error);
  }
});
