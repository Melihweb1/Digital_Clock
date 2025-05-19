window.onload = function getTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  let day = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("hour").innerText = hour + ":";
  document.getElementById("minute").innerText = minute + ":";
  document.getElementById("second").innerText = second;
  month = month < 10 ? "0" + (month + 1) : month;
  document.getElementById("tarih").innerText = day + "/" + month + "/" + year;

  let inter = setInterval(getTime, 1000);
};
