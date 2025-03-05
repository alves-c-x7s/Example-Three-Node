# 🌬️ Something
I never finded a simple tutorial it run 100% correctly to me in ThreeJS. So, I decided made one to you, using ThreeJS, NodeJS and onshape (GLTF format).

# Building in onshape ⚙️
First of all, this is not a tutorial to make something in onshape 🚫

Proceed, in this project you should make a **object small**, for example 30mm of height 📏

This is important, because the scale of each object is very big ⛰️. A part of this code show this:

``` javascript
const objectScale = 100
model.scale.set(objectScale, objectScale, objectScale);
```
If you have a big object, adjust the **objectScale**. The only problem is you don't see he and make you can't adjust correctly ☠️

See the project in [onshape here](https://cad.onshape.com/documents/ab5ce2de69f04a8d979b5179/w/feef940623c78ebd390d0341/e/c2c0d4de43513db8d7f13788) 🔗

# Object in JS 🤖
Well, this is the **HARDEST topic** 🔥 and I will need so much of your attention. After create object, you will put he in the folder **/assets** 📂

Now, you search the **file ObjectThree.js**, but not only he, find this part of code:
``` javascript
const objectGltfName = 'assets/example.gltf';
```
Set the **variable** to the file in the path, it you want show 🔍

# Node configuration 🧭

Your project can't run, because you should install **dependencies** to NodeJS. Remember to have node installed in your machine 🖥️. Firstly, run this code to install the **three**:

``` this is not a programming language
npm install three
```

After, install **vite** to run a server:

``` maybe this is python
npm install vite
```

I think it's all finished. So, **run** the server and **acess** the port correctly ✔️ with this command:

``` finally this tutorial end
npx vite
```
