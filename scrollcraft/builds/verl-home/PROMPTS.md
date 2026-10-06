# Image prompts, in order

Save every result into `scrollcraft/builds/verl-home/raw/` with the exact file name shown.
Use **ChatGPT** for all of them (it keeps references better and can make transparent PNGs).
Always choose **landscape 16:9** unless the prompt says portrait. Highest quality.

**Rule:** from image 2 onwards, upload `01-master.png` with the prompt. That's what keeps every image looking like the same place.
If an image has text, a logo, people, or a different-looking monument, generate it again.

---

## 01-master.png  (landscape 16:9) — the reference for everything

```
Architectural photography, tilt-shift corrected verticals, wide 24mm, medium-format sharpness. A monumental faceted V-shaped structure of dark board-formed concrete, two leaning wedge arms that almost meet at the base, a narrow vertical seam between them. Warm sand desert floor and pale sand-coloured sky at dusk. One warm terracotta light source low on the horizon, cool ambient fill, long soft shadows. Colour grade of sand (#DFD6C2), black ink (#0B0C10), titanium blue-grey (#1F2833) and one terracotta accent (#D97D54). Fine film grain, honest concrete texture, formwork lines, small imperfections. Long-exposure stillness, no people, no vehicles, no text, no logos. Photographic realism, NOT 3D render, NOT CGI, NOT clay, NOT illustration, no digital glow, no plastic sheen.

Scene: the V monument stands alone on a vast flat sand plain, seen from the front at eye level from about 60 metres away. The monument sits on the right third of the frame, roughly 45% of the image height, its base on the horizon line in the lower third. Each arm is a faceted wedge with three visible faces (outer face in shadow, top face catching the light, inner face mid-tone). The seam between the two arms is a thin dark vertical gap at the centre of the V. The whole left half of the frame is calm empty sky and sand with no objects, reserved for a headline.
```

## 02-plate.png  (landscape 16:9) — background without the monument

Upload `01-master.png`, then:

```
Use the uploaded photograph. Recreate exactly the same photograph, same camera, same horizon height, same sky, same light, same colour grade and film grain, but with the V monument completely removed. Rebuild the sand plain and sky where the monument was, so it reads as an untouched empty landscape at dusk. Nothing else in the frame, no objects, no people, no text. Photographic realism, not CGI.
```

## 03-monument.png  (landscape 16:9, TRANSPARENT background)

Upload `01-master.png`, then:

```
Use the uploaded photograph. Extract only the V concrete monument, identical shape, angle, size, light direction, colour grade and texture, including its soft contact shadow on the sand directly under its base. Output it on a fully transparent background (PNG with alpha), same canvas size and same position in the frame as in the original. No sky, no ground, no halo, clean edges.
```

If it cannot do transparency: same prompt but end with `on a perfectly flat solid pure green background (#00FF00), no shadow on the green, no gradient`.

## 04-ledge.png  (landscape 16:9, TRANSPARENT background) — foreground plane

Upload `01-master.png`, then:

```
Same world, same light, same colour grade and film grain as the uploaded photograph. A low slab of the same dark board-formed concrete running across the full width of the bottom edge of the frame, very close to the camera, slightly out of focus, filling only the bottom 15% of the image with a straight, gently chipped top edge. Everything above it fully transparent (PNG with alpha). No text, no objects on it.
```

If it cannot do transparency: use the pure green background ending as above.

## 05-seam-wide.png  (landscape 16:9) — start of the camera move

Upload `01-master.png`, then:

```
Same monument, same world, same light and colour grade as the uploaded photograph. Now the camera stands directly in front of the V, centred, about 15 metres away, at eye level. The V fills about 80% of the frame height and is perfectly centred and symmetrical. The narrow vertical seam between the two arms runs down the exact centre of the image. Inside the seam there is only a faint warm terracotta glow at the very bottom. Concrete texture and formwork lines clearly visible. No people, no text.
```

## 06-seam-close.png  (landscape 16:9) — end of the camera move (the peak)

Upload `05-seam-wide.png`, then:

```
Same monument, same light, same colour grade. The camera has moved very close, right up to the seam between the two concrete arms, as if standing at the entrance of the gap. The seam is perfectly vertical in the exact centre of the frame, top to bottom. A strong warm terracotta light now burns inside the seam along its whole height, a clean thin line of light, spilling softly onto the two concrete inner faces either side. The rest of the frame is dark concrete texture in deep shadow. No glow haze, no lens flare, no people, no text.
```

## 07-night.png  (landscape 16:9) — the close

Upload `01-master.png`, then:

```
Same place, same monument, same camera position and framing as the uploaded photograph, but after dusk, at blue hour turning to night. The sky is deep titanium blue-grey (#1F2833) fading to near black ink at the top. The sand is dark and cool. The seam between the two arms of the V is lit from inside by a thin steady terracotta line of light (#D97D54), the only warm light in the scene, faintly lighting the inner faces. The left half of the frame stays empty and calm for text. No stars, no moon, no people, no text, no lens flare.
```

## 08-plate-portrait.png  (PORTRAIT 9:16) — phone background

Upload `02-plate.png`, then:

```
Same empty landscape, same sky, light, colour grade and grain as the uploaded photograph, recomposed as a tall vertical photograph. The horizon sits at 62% of the image height from the top. Large calm sky above for a headline. Empty sand plain below. No objects, no people, no text.
```

---

When all 8 are in `raw/`, say "جاهز".
