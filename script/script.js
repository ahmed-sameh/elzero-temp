const otherLinkButton = document.querySelector('#main-nav li:last-child a');
const megaMenu = document.querySelector('.mega-menu');
const closeButton = document.querySelector('.close-button');
const megaMenuBackdrop = document.querySelector('#navbar #overlay');
const body = document.body;
const megaMenuLinks = document.querySelectorAll('.mega-menu .links li');
const toTopButton = document.getElementById('to-top-button');
const galleryboxs = document.querySelectorAll('#gallery .box');
const imagePerviewer = document.getElementById('main-image-preview');
const vidoesList = document.querySelector('#videos ul');
const videoPreviwer = document.querySelector('.preview img');
const videoInfo = document.querySelector('.preview .info');

let videos = [
  {id: '1', name: 'How To Create Sub Domain', duration: '05:18', imgPath: './images/video-preview.jpg'},
  {id: '2', name: 'Playing With The DNS', duration: '03:18', imgPath: './images/cat-01.jpg'},
  {id: '3', name: 'Everything About The Virtual Hosts', duration: '05:25', imgPath: './images/cat-02.jpg'},
  {id: '4', name: 'How To Monitor Your Website', duration: '04:16', imgPath: './images/cat-03.jpg'},
  {id: '5', name: 'Uncharted Beating The Last Boss', duration: '07:48', imgPath: './images/cat-04.jpg'},
  {id: '6', name: 'Ys Oath In Felghana Overview', duration: '03:12', imgPath: './images/cat-05.jpg'},
  {id: '7', name: 'Ys Series All Games Ending', duration: '08:10', imgPath: './images/cat-06.jpg'}
];

// functions

const closeMegaMenuHandler = () => {
  if([...megaMenu.classList].includes('display-menu'))
  {
    megaMenu.classList.remove('display-menu');
  }
  
  if([...megaMenuBackdrop.classList].includes('visible'))
  {
    megaMenuBackdrop.classList.remove('visible');
  }
  
  if([...body.classList].includes('noscroll'))
  {
    body.classList.remove('noscroll');
  }
}


const galleryImageRender = (imgSource) => {

  imagePerviewer.innerHTML = `<img src="${imgSource}" alt="gallert image">`

  if(![...imagePerviewer.classList].includes('visible'))
  {
    imagePerviewer.classList.add('visible');
  }

  body.classList.add('noscroll');
}

function renderVideos()
{
  for(let video of videos)
  {
    let element = document.createElement('li');
    // element.setAttribute('data-id', video.id);
    element.dataset.id = video.id;
    element.innerHTML = `${video.name}<span>${video.duration}</span>`

    vidoesList.append(element);
  }
}

renderVideos();

// event listners

otherLinkButton.addEventListener('click', () => {
  megaMenu.classList.toggle('display-menu');
  megaMenuBackdrop.classList.add('visible');
  body.classList.add('noscroll');
});

closeButton.addEventListener('click', closeMegaMenuHandler);

megaMenuBackdrop.addEventListener('click', closeMegaMenuHandler);

megaMenuLinks.forEach((li) => {
  
  li.addEventListener('click', closeMegaMenuHandler)
});

galleryboxs.forEach((box) => {
  box.addEventListener('click',() => {
    const imageSrc = box.querySelector('img').getAttribute('src');
    galleryImageRender(imageSrc);
  })
})

imagePerviewer.addEventListener('click', () => {
  if([...imagePerviewer.classList].includes('visible'))
  {
    imagePerviewer.classList.remove('visible');
  }

  if([...body.classList].includes('noscroll'))
  {
    body.classList.remove('noscroll');
  }
})

const vidoesListElements = vidoesList.querySelectorAll('li');

vidoesListElements.forEach((listEl) => {
  listEl.addEventListener('click', () => {
    // let listItemID = listEl.getAttribute('data-id');
    let listItemID = listEl.dataset.id;

    for(let video of videos)
    {
      if(video.id === listItemID)
      {
        videoPreviwer.setAttribute('src', video.imgPath);
        videoInfo.textContent = video.name
      }
    }

  })
})