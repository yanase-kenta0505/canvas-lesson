document.getElementById("app").innerHTML = `
<h1>White noise on canvas</h1>
<div id='box'></div>
// canvasタグのサイズはwidth属性とheight属性を使わないと規定値は、幅 300 ピクセル、高さ 150 ピクセルとなる.
https://maku77.github.io/js/canvas/size.html

<canvas id='test1' width='300' height='300'></canvas>
<canvas id='test2' width='300' height='300'></canvas>
`

async function draw () {
  const canvas1 = document.getElementById('test1')
  const ctx1 = canvas1.getContext('2d')
  const image = ctx1.createImageData(50, 50)
  const canvas2 = document.getElementById('test2')
  const ctx2 = canvas2.getContext('2d')
  
  for (i=0; i<image.width*image.height*4;i+=4)
  {
  image.data[i+0]=255;
  image.data[i+1]=0;
  image.data[i+2]=0;
  image.data[i+3]=255;
  }
  

    // image.data[i * 4] = i * 4 * 40
    // image.data[i * 4 + 1] = 155
    // image.data[i * 4 + 2] = 255
    // image.data[i * 4 + 3] = 255

    // image.data[i * 4] = Math.floor(Math.random() * 256)
    // image.data[i * 4 + 1] = Math.floor(Math.random() * 256)
    // image.data[i * 4 + 2] = Math.floor(Math.random() * 256)
    // image.data[i * 4 + 3] = 255
  

  ctx1.putImageData(image, 10, 10)
  
  // 長方形として切り出す部分の指定
  const bitmap = await createImageBitmap(
    image,
    0, 0, 300, 300
  )

  /**
   * @type {HTMLCanvasElement}
   */
  
  // 画像を貼り付ける
  ctx2.drawImage(bitmap, 0, 0, 300, 300)
}

draw()

// setInterval(draw, 1000)