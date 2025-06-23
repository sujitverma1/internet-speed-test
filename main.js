const s = new Speedtest();

function startSpeedTest() {
  s.onupdate = data => {
    if (data.downloadStatus) document.getElementById("download").textContent = (data.downloadStatus / 1024).toFixed(2);
    if (data.uploadStatus) document.getElementById("upload").textContent = (data.uploadStatus / 1024).toFixed(2);
    if (data.ping) document.getElementById("ping").textContent = data.ping.toFixed(0);
    if (data.jitter) document.getElementById("jitter").textContent = data.jitter.toFixed(0);
  };
  s.onend = () => console.log("Test complete");
  s.start();
}
