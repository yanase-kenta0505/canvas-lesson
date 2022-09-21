async function draw() {
  const canvas1 = document.getElementById('test1')
  const canvas2 = document.getElementById('test2')
  const ctx1 = canvas1.getContext('2d')
  const ctx2 = canvas2.getContext('2d')
  const image = ctx1.createImageData(2, 2)
  const image2 = ctx2.createImageData(2, 2)
  const image3 = ctx1.createImageData(2, 2)

  // for (let i = 0; i < image.data.length; i++) {
  //   image.data[i * 4] = Math.floor(Math.random() * 256)
  //   image.data[i * 4 + 1] = Math.floor(Math.random() * 256)
  //   image.data[i * 4 + 2] = Math.floor(Math.random() * 256)
  //   image.data[i * 4 + 3] = 255
  // }
  // 青色

  canvas1.addEventListener('click', () => {
    console.count(timeOutId)
    clearInterval(timeOutId)
    console.count(timeOutId)
    
  })

  for (let i = 0; i < image.data.length; i++) {
    image.data[i * 4] = 46
    image.data[i * 4 + 1] = 135
    image.data[i * 4 + 2] = 243
    image.data[i * 4 + 3] = 255
  }



  ctx1.putImageData(image, 0, 0)

  console.log(image.data)

  let x = 0
  let y = 0

  const timeOutId = setInterval(function put() {
    ctx1.putImageData(image, x, y * 2)
    y++
    if (y * 2 === canvas1.height) {
      for (let i = 0; i < image.data.length; i++) {
        image.data[i * 4] = 46
        image.data[i * 4 + 1] = 135
        image.data[i * 4 + 2] = 243
        image.data[i * 4 + 3] = 255
      }
      y = 0
      x += 2
    } else if (y * 2 === canvas1.height / 2) {
      // 茶色に変更
      for (let i = 0; i < image.data.length; i++) {
        image.data[i * 4] = 243
        image.data[i * 4 + 1] = 108
        image.data[i * 4 + 2] = 24
        image.data[i * 4 + 3] = 255
      }
    }
  }, 10)


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