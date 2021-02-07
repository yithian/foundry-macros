// toggle between dim light and darkness in a scene
// REQUIRES the Perfect Vision module

const lit = "dim";
const litDarkness = 0.5;

const dark = "none";
const darkDarkness = 1;

let lightLevel = lit;

canvas.scene.update({"globalLight": true});

if (canvas.scene.data.flags["perfect-vision"] !== undefined && canvas.scene.getFlag("perfect-vision", "globalLight") !== undefined) {
  lightLevel = canvas.scene.data.flags["perfect-vision"]["globalLight"];
}

if (lightLevel !== dark) {
  await canvas.scene.update({"darkness": darkDarkness});
  await canvas.scene.setFlag("perfect-vision", "globalLight", dark);
} else if (lightLevel !== lit) {
  await canvas.scene.update({"darkness": litDarkness});
  await canvas.scene.setFlag("perfect-vision", "globalLight", lit);
}
