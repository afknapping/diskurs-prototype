//- index.js

// console.log('helloooo')

async function houdini_init() {
  await CSS.paintWorklet.addModule('rough-boxes-worklet.js');
  // console.log('hello what')
}

houdini_init()