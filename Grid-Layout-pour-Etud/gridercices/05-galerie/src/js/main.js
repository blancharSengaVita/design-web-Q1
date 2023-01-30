const settings = {
  imageRatio: 1.5
}

const addClassToPotraitImages = {

  calculate: (image) => image.naturalWidth / image.naturalHeight,

  init () {
    this.images = document.getElementsByTagName('img');
    this.addClasses();
  },

  changeBackgroundColor (image) {
    image.addEventListener('mouseenter', () => {
      document.body.classList.add('black');
    })

  },
  addTransitionEndEvent(image){
    image.addEventListener('transitionend',(e)=>{
      document.body.classList.remove('black');
    })
  },

  addClasses () {
    for (const image of this.images) {
      if (this.calculate(image) < settings.imageRatio) {
        image.classList.add('portrait');
      }
      this.changeBackgroundColor(image);
      this.addTransitionEndEvent(image);
    }
  }
}

addClassToPotraitImages.init()

