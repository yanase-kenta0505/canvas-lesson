async function draw() {
  const canvas1 = document.getElementById('test1')
  const canvas2 = document.getElementById('test2')
  const ctx1 = canvas1.getContext('2d')
  const ctx2 = canvas2.getContext('2d')
  const image = ctx1.createImageData(20, 20)
  const image2 = ctx2.createImageData(20, 20)
  const image3 = ctx1.createImageData(20, 20)

  for (let i = 0; i < image.data.length; i++) {
    image.data[i * 4] = 40
    image.data[i * 4 + 1] = 155
    image.data[i * 4 + 2] = 255
    image.data[i * 4 + 3] = 255
  }

  for (let i = 0; i < image3.data.length; i++) {
    image3.data[i * 4] = 255
    image3.data[i * 4 + 1] = 255
    image3.data[i * 4 + 2] = 255
    image3.data[i * 4 + 3] = 255
  }

  let x = 0
  let y = 0

  setInterval(function put() {
    // if(i*20 === image.width) {

    // }

    ctx1.putImageData(image, x, y * 20)
    if ( y> 0) {
      ctx1.putImageData(image2, x, (y - 1) * 20)
    }
    y++
  }, 100)


  // 長方形として切り出す部分の指定
  const bitmap = await createImageBitmap(
    image,
    0, 0, 100, 100
  )

  /**
   * @type {HTMLCanvasElement}
   */

  // 画像を貼り付ける
  ctx2.drawImage(bitmap, 0, 0, 300, 300)
}

draw()

// setInterval(draw, 1000)