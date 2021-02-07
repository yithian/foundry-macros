let tokenVision = canvas.scene.data.tokenVision;
 
if (tokenVision !== undefined) {
  await canvas.scene.update({"tokenVision": !tokenVision});
  ui.notifications.info("Token Vision" + (!tokenVision ? " enabled" : " disabled"));
}
