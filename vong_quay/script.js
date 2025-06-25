const wheel = document.getElementById("wheel");
const btn = document.getElementById("spin");
const result = document.getElementById("result");

const rewards = ["100", "200", "300", "400", "500", "600"];
const sliceDeg = 360 / rewards.length;

let currentRotation = 0;

btn.addEventListener("click", () => {
  btn.disabled = true;
  result.textContent = "";

  // Quay từ 3 vòng trở lên + một góc ngẫu nhiên
  const randomIndex = Math.floor(Math.random() * rewards.length);
  const rotateTo = 360 * 3 + (360 - randomIndex * sliceDeg - sliceDeg / 2);

  currentRotation += rotateTo;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    result.textContent = `🎉 Bạn trúng: ${rewards[randomIndex]}!`;
    btn.disabled = false;
  }, 4000);
});
