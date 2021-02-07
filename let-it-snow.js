let snowing = canvas.scene.data["weather"];

if (canvas.scene.data["weater"] !== undefined) {
  snowing = canvas.scene.weather;
}

if (snowing !== "snow") {
  await canvas.scene.update({"weather": "snow"});
} else {
  await canvas.scene.update({"weather": ""});
}
