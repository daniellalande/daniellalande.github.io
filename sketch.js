const image = document.querySelector('.scrollImg');
const buttonFill = document.getElementById('buttonFill');
const buttonOutline = document.getElementById('buttonOutline');
const homeLink = document.getElementById('homeLink');
const headerMobileContact = document.querySelector('.headerMobileContact');
const headerMobileCv = document.querySelector('.headerMobileCv');
const traitsElements = Array.from(document.getElementsByClassName('traits'));


const titleUi = document.getElementById('titleUi');
const titleDev = document.getElementById('titleDev');
const titleMotion = document.getElementById('titleMotion');

if (window.location.pathname === "/" && !window.location.href.endsWith('index.html')) {
  var newUrl = window.location.protocol + "//" + window.location.host + "/index.html";
  window.location.href = newUrl;
}


const landingAnimation = document.querySelector('.landingAnimationContainer');
const indexBody = document.querySelector('#indexBody')





if (window.location.pathname === '/index.html') {
  setTimeout(function() {
    landingAnimation.classList.add('landingAnimationContainerDark')
  }, 1500);

  setTimeout(function() {
    landingAnimation.classList.add('landingAnimationContainerDisapeared')
  }, 2500);

  setTimeout(function() {
    indexBody.style.overflow = 'inherit';
  }, 3500);
}





// Sélection des éléments HTML
const menuMobileButton = document.querySelector('.menuMobileButton');
const menuMobileContainer = document.querySelector('.menuMobileContainer');
const bgMenuMobile = document.querySelector('.bgMenuMobile');
const trait1 = document.querySelector('#trait1');
const trait2 = document.querySelector('#trait2');
const trait3 = document.querySelector('#trait3');

if (window.location.pathname === '/index.html') {

  // Fonction pour ajouter ou supprimer une classe CSS
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  // Fonction pour gérer les actions lorsque le bouton est cliqué
  function handleMenuToggle() {
    const isMenuOpen = menuMobileContainer.classList.contains('menuMobileContainerAppear');

    toggleClass(menuMobileContainer, 'menuMobileContainerAppear');
    toggleClass(bgMenuMobile, 'bgMenuMobileAppear');
    toggleClass(trait1, 'traitRotated');
    toggleClass(trait2, 'traitRotated2');
    toggleClass(trait3, 'traitRotated3');
    toggleClass(indexBody, 'bodyNoScroll');

    if (!isMenuOpen) {
      // Sélection de tous les éléments avec la classe 'traits'
      const traitsElements = document.getElementsByClassName('traits');

      menuMobileButton.classList.remove('menuMobileButtonDark');

      // Supprimer la classe 'traitsDark' de tous les éléments
      for (let i = 0; i < traitsElements.length; i++) {
        traitsElements[i].classList.remove('traitsDark');
      }
    }
  }


  // Ajouter un gestionnaire d'événement au bouton
  menuMobileButton.addEventListener('click', handleMenuToggle);

  // Ajouter un gestionnaire d'événement au fond du menu mobile
  bgMenuMobile.addEventListener('click', handleMenuToggle);

}

// const innerCursor = document.querySelector('.inner-cursor');
// const iframeCursor = document.querySelector('.iframe-cursor');
// let iframeDocument = null;

// document.addEventListener('mousemove', moveCursor);

// function moveCursor(e) {
//   let x = e.clientX;
//   let y = e.clientY;

//   if (innerCursor) {
//     innerCursor.style.left = `${x}px`;
//     innerCursor.style.top = `${y}px`;
//   }
//   if (iframeCursor) {
//     iframeCursor.style.left = `${x}px`;
//     iframe.style.top = `${y}px`;
//   }
// }

// document.querySelector('body').addEventListener('mouseover', function(event) {
//   if (event.target.matches('a') || event.target.closest('.itemListContainer')) {
//     addGrowClass();
//   } else if (event.target.tagName === 'IFRAME' && event.target.classList.contains('bodyPages')) {
//     iframeDocument = event.target.contentDocument;
//     if (iframeDocument) {
//       iframeDocument.addEventListener('mousemove', moveCursor);
//       iframeDocument.addEventListener('mouseover', handleCursorOver);
//       iframeDocument.addEventListener('mouseleave', handleCursorLeave);
//       iframeDocument.addEventListener('click', handleCursorClick);
//     }
//   }
// });

// document.querySelector('body').addEventListener('mouseleave', function(event) {
//   if (!event.relatedTarget || (!event.relatedTarget.matches('a') && !event.relatedTarget.closest('.itemListContainer'))) {
//     removeGrowClass();
//   } else if (event.relatedTarget.tagName === 'IFRAME' && event.relatedTarget.classList.contains('bodyPages')) {
//     if (iframeDocument) {
//       iframeDocument.removeEventListener('mousemove', moveCursor);
//       iframeDocument.removeEventListener('mouseover', handleCursorOver);
//       iframeDocument.removeEventListener('mouseleave', handleCursorLeave);
//       iframeDocument.removeEventListener('click', handleCursorClick);
//       iframeDocument = null;
//       removeGrowClass();
//     }
//   }
// });

// document.querySelector('body').addEventListener('click', function(event) {
//   if (event.target.matches('a') || event.target.closest('.itemListContainer')) {
//     removeGrowClass();
//   } else if (event.target.tagName === 'IFRAME' && event.target.classList.contains('bodyPages')) {
//     if (iframeDocument) {
//       iframeDocument.removeEventListener('mousemove', moveCursor);
//       iframeDocument.removeEventListener('mouseover', handleCursorOver);
//       iframeDocument.removeEventListener('mouseleave', handleCursorLeave);
//       iframeDocument.removeEventListener('click', handleCursorClick);
//       iframeDocument = null;
//       removeGrowClass();
//     }
//   }
// });

// function handleCursorOver(event) {
//   addGrowClass();
// }

// function handleCursorLeave(event) {
//   removeGrowClass();
// }

// function handleCursorClick(event) {
//   removeGrowClass();
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const links = document.querySelectorAll('a');
//   const itemListContainers = document.querySelectorAll('.itemListContainer');

//   links.forEach(function(link) {
//     link.addEventListener('mouseenter', function() {
//       addGrowClass();
//     });

//     link.addEventListener('mouseleave', function() {
//       removeGrowClass();
//     });
//   });

//   itemListContainers.forEach(function(container) {
//     container.addEventListener('mouseenter', function() {
//       addGrowClass();
//     });

//     container.addEventListener('mouseleave', function() {
//       removeGrowClass();
//     });
//   });
// });

// function addGrowClass() {
//   if (innerCursor && !innerCursor.classList.contains("grow")) {
//     innerCursor.classList.add("grow");
//   }
// }

// function removeGrowClass() {
//   if (innerCursor && innerCursor.classList.contains("grow")) {
//     innerCursor.classList.remove("grow");
//   }
// }




function getViewportSize() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight
  };
}







window.addEventListener('scroll', () => {
  let distance = window.scrollY;
  let screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const pageNumber = 4;
  let screenHeightMultiple = screenHeight * pageNumber;
  updateScreenHeight();

  window.addEventListener('resize', function() {
    screenHeight = window.innerHeight;
  });

  if (image) {
    if (distance < screenHeight * pageNumber) {
      let width = 42 + ((distance / screenHeightMultiple) * (100 - 42));
      let height = 48 + ((distance / screenHeightMultiple) * (100 - 48));

      image.style.height = `${height}%`;
      image.style.width = `${width}%`;
      image.style.position = 'fixed';
      image.style.top = '50%';
      image.style.left = '50%';
      image.style.transform = 'translate(-50%, -50%)';
    } else if (distance > screenHeight) {
      image.style.height = '100%';
      image.style.width = '100%';
      image.style.top = `calc(0px + ${screenHeightMultiple}px)`;
      image.style.left = '50%';
      image.style.position = 'absolute';
      image.style.transform = 'translateX(-50%)';
    }

    if (distance > screenHeight / 2 && distance < screenHeight) {
      const opacityUi = 0.3 + ((distance - (screenHeight * 0.5)) / (screenHeight / 2)) * (1 - 0.3);
      const scaleUi = 2 - ((distance - (screenHeight * 0.5)) / (screenHeight * 0.5));

      titleUi.style.opacity = opacityUi;
      titleUi.style.transform = `scale(${scaleUi})`;
    }

    if (distance > screenHeight * 1.5 && distance < screenHeight * 2) {
      const opacityDev = (0.3 + ((distance - screenHeight) / (screenHeight / 2)) * (1 - 0.3)) - 0.7;
      const scaleDev = 4 - ((distance - (screenHeight * 0.5)) / (screenHeight * 0.5));

      titleDev.style.opacity = opacityDev;
      titleDev.style.transform = `scale(${scaleDev})`;
    }

    if (distance > screenHeight * 2.5 && distance < screenHeight * 3) {
      const opacityMotion = (0.3 + ((distance - screenHeight) / (screenHeight / 2)) * (1 - 0.3)) - 2.1;
      const scaleMotion = 6 - ((distance - (screenHeight * 0.5)) / (screenHeight * 0.5));

      titleMotion.style.opacity = opacityMotion;
      titleMotion.style.transform = `scale(${scaleMotion})`;
    }

    if (distance > screenHeight * (pageNumber - 1)) {
      const opacity = 0.3 + ((distance - (screenHeight * 3)) / screenHeight) * (1 - 0.3);
      image.style.opacity = opacity;
    } else {
      image.style.opacity = '0.3';
    }

    if (screenWidth >= 768) {
      if (distance >= screenHeightMultiple + screenHeight/2 - 200) {
        buttonFill.classList.add('forLight-buttonFill');
        buttonOutline.classList.add('forLight-buttonOutline');
        homeLink.classList.add('forLight-homeLink');

        buttonFill.classList.remove('buttonFill');
        buttonOutline.classList.remove('buttonOutline');
        homeLink.classList.remove('homeLink');
      } else {
        buttonFill.classList.remove('forLight-buttonFill');
        buttonOutline.classList.remove('forLight-buttonOutline');
        homeLink.classList.remove('forLight-homeLink');

        buttonFill.classList.add('buttonFill');
        buttonOutline.classList.add('buttonOutline');
        homeLink.classList.add('homeLink');
      }
    }

    if (screenWidth <= 768) {
      const pages = document.querySelector('.landingPage');
      updateScreenHeight();
      pages.style.height = `${screenHeight}px`;




    if (distance >= screenHeightMultiple + screenHeight/2 - 200) {
        menuMobileButton.classList.add('menuMobileButtonDark');
        traitsElements.forEach((element) => {
          element.classList.add('traitsDark');
        });
        console.log('detected')
      } else if (distance <= screenHeightMultiple + screenHeight/2 - 200) {
        menuMobileButton.classList.remove('menuMobileButtonDark');
        traitsElements.forEach((element) => {
          element.classList.remove('traitsDark');
        });
      }

    }
  }
});

let screenHeight = window.innerHeight;

function updateScreenHeight() {
  screenHeight = window.innerHeight;
}

updateScreenHeight();
window.addEventListener('resize', updateScreenHeight);

function updateAspectRatio() {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const itemsPagePreview = document.getElementsByClassName('iframItems');

  const pageRatio = screenWidth / screenHeight;

  for (let i = 0; i < itemsPagePreview.length; i++) {
    itemsPagePreview[i].style.aspectRatio = pageRatio;
  }
}

updateAspectRatio();
window.addEventListener('resize', updateAspectRatio);










const itemsList = document.querySelectorAll('.itemListContainer');
const iframItems = document.querySelectorAll('.iframItems');
const closeBtn = document.querySelector('.closeBtn');
const imageContainer = document.querySelector('.imageContainer');
const landingPages = document.getElementsByClassName('landingPage');
const body = document.body;
const containerListProjects = document.getElementById('projectsListContainer')
const mainHeader = document.getElementById('mainHeader')
const pagesHeader = document.getElementById('pagesHeader')
const closeBtnMobile = document.querySelector('.closeBtnMobile')
const headerMobile = document.querySelector('.headerMobile')
const headerMobileProject = document.querySelector('.headerMobileProject')



let activeItem = null;

// Ajoute un gestionnaire d'événements pour chaque élément de la liste
itemsList.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    // Cache toutes les iframes sauf celle correspondant à l'élément survolé
    iframItems.forEach((iframe) => {
      iframe.classList.remove('active');

    });
    iframItems[index].classList.add('active');
    iframItems[index].classList.add('iframe-small');
    activeItem = iframItems[index];
  });

  item.addEventListener('click', () => {
    containerListProjects.classList.add('projectsListContainerPointer')
    iframItems.forEach((iframe) => {

      const id = iframe.getAttribute('id');
      document.location = ('index.html#ancre');
      body.style.overflow = 'hidden';

      // var iframeWindow = iframe.contentWindow;
      // var iframeElement = iframeWindow.document.querySelector('.iframe-cursor');

      // if (iframeElement) {
      //   iframeElement.classList.remove('hide');
      //   innerCursor.classList.add('hide')
      // }


      setTimeout(
        function() {
          iframe.classList.remove('iframe-small');
          iframe.classList.add('expanded');
        }
        , 750);
      setTimeout(
        function() {
          iframe.setAttribute('scrolling', 'yes');
          mainHeader.classList.add('disappeared')
          mainHeader.classList.remove('appeared')
          pagesHeader.classList.remove('disappeared')
          pagesHeader.classList.add('appeared')


          closeBtnMobile.classList.add('closeBtnMobileRevealed')
          closeBtnMobile.classList.remove('closeBtnMobile')

          menuMobileButton.classList.remove('menuMobileButtonDark')
          traitsElements.forEach((element) => {
            element.classList.remove('traitsDark');
          });
        }
        , 1500);

    });

  });






  //   window.addEventListener('load', function() {
  //     // Ajoutez un écouteur d'événement pour l'événement "popstate"
  //     window.addEventListener('popstate', function(event) {
  //       if (event.state) {
  //         if (event.state.closeButtonClickedDesktop) {
  //           closeIframeDesktop();
  //           console.log("Action déclenchée par le bouton de retour du navigateur (version de bureau).");
  //         }
  //         if (event.state.closeButtonClickedMobile) {
  //           closeIframeMobile();
  //           console.log("Action déclenchée par le bouton de retour du navigateur (version mobile).");
  //         }
  //       }
  //     });


  //   closeBtn.addEventListener('click', () => {
  //     closeIframeDesktop();
  //     console.log("Bouton Close (version de bureau) cliqué.");

  //     var stateObj = { closeButtonClickedDesktop: true };
  //     history.pushState(stateObj, "", "");
  //   });


  //   closeBtnMobile.addEventListener('click', () => {
  //     closeIframeMobile();
  //     console.log("Bouton Close (version mobile) cliqué.");

  //     var stateObj = { closeButtonClickedMobile: true };
  //     history.pushState(stateObj, "", "");
  //   });



  //   function closeIframeDesktop(){
  //     iframItems.forEach((iframe) => {
  //       iframe.classList.remove('expanded');
  //       iframe.classList.add('iframe-small');

  //       setTimeout(
  //         function() {
  //           iframe.setAttribute('scrolling', 'no');
  //           body.style.overflow = 'auto';
  //           mainHeader.classList.remove('disappeared')
  //           mainHeader.classList.add('appeared')
  //           pagesHeader.classList.add('disappeared')
  //           pagesHeader.classList.remove('appeared')

  //           headerMobile.classList.remove('disappearedMobileBot')
  //           headerMobile.classList.add('appearedMobileBot')
  //           headerMobileProject.classList.add('disappearedMobileTop')
  //           headerMobileProject.classList.remove('appearedMobileTop')

  //           closeBtnMobile.classList.remove('closeBtnMobileRevealed')
  //           closeBtnMobile.classList.add('closeBtnMobile')
  //         }
  //         , 250);


  //       setTimeout(
  //         function() {
  //           containerListProjects.classList.remove('projectsListContainerPointer')
  //         }
  //         , 850);

  //     });

  //   }

  //   function closeIframeMobile() {
  //     iframItems.forEach((iframe) => {
  //       iframe.classList.remove('expanded');
  //       iframe.classList.add('iframe-small');

  //       setTimeout(
  //         function() {
  //           iframe.setAttribute('scrolling', 'no');
  //           body.style.overflow = 'auto';
  //           mainHeader.classList.remove('disappeared')
  //           mainHeader.classList.add('appeared')
  //           pagesHeader.classList.add('disappeared')
  //           pagesHeader.classList.remove('appeared')

  //           headerMobile.classList.remove('disappearedMobileBot')
  //           headerMobile.classList.add('appearedMobileBot')
  //           headerMobileProject.classList.add('disappearedMobileTop')
  //           headerMobileProject.classList.remove('appearedMobileTop')

  //           closeBtnMobile.classList.remove('closeBtnMobileRevealed')
  //           closeBtnMobile.classList.add('closeBtnMobile')
  //         }
  //         , 250);


  //       setTimeout(
  //         function() {
  //           containerListProjects.classList.remove('projectsListContainerPointer')
  //         }
  //         , 850);

  //     });
  //     var stateObj = { closeButtonClickedMobile: true };
  //     history.pushState(stateObj, "", "");
  //   }
  // });


 
    // Ajoutez un écouteur d'événement pour l'événement "popstate"
    window.addEventListener('popstate', function(event) {
      if (event.state) {
        if (event.state.closeButtonClickedDesktop) {
          closeIframeDesktop();
        }
        if (event.state.closeButtonClickedMobile) {
          closeIframeMobile();
        }
      }
    });


    closeBtn.addEventListener('click', () => {
      closeIframeDesktop();

      var stateObj = { closeButtonClickedDesktop: true };
      history.pushState(stateObj, "", "");
    });


    closeBtnMobile.addEventListener('click', () => {
      closeIframeMobile();

      var stateObj = { closeButtonClickedMobile: true };
      history.pushState(stateObj, "", "");
    });



    function closeIframeDesktop() {
      iframItems.forEach((iframe) => {
        iframe.classList.remove('expanded');
        iframe.classList.add('iframe-small');

        setTimeout(
          function() {
            iframe.setAttribute('scrolling', 'no');
            body.style.overflow = 'auto';
            mainHeader.classList.remove('disappeared')
            mainHeader.classList.add('appeared')
            pagesHeader.classList.add('disappeared')
            pagesHeader.classList.remove('appeared')


            closeBtnMobile.classList.remove('closeBtnMobileRevealed')
            closeBtnMobile.classList.add('closeBtnMobile')


          }
          , 250);


        setTimeout(
          function() {
            containerListProjects.classList.remove('projectsListContainerPointer')
          }
          , 850);

      });

    }

    function closeIframeMobile() {
      iframItems.forEach((iframe) => {
        iframe.classList.remove('expanded');
        iframe.classList.add('iframe-small');

        setTimeout(
          function() {
            iframe.setAttribute('scrolling', 'no');
            body.style.overflow = 'auto';
            mainHeader.classList.remove('disappeared')
            mainHeader.classList.add('appeared')
            pagesHeader.classList.add('disappeared')
            pagesHeader.classList.remove('appeared')



            closeBtnMobile.classList.remove('closeBtnMobileRevealed')
            closeBtnMobile.classList.add('closeBtnMobile')

            menuMobileButton.classList.add('menuMobileButtonDark')
            traitsElements.forEach((element) => {
              element.classList.add('traitsDark');
            });
          }
          , 250);


        setTimeout(
          function() {
            containerListProjects.classList.remove('projectsListContainerPointer')
          }
          , 850);

      });
      var stateObj = { closeButtonClickedMobile: true };
      history.pushState(stateObj, "", "");
    }



});

var videos = document.querySelectorAll('video');
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener('play', function() {
    this.removeAttribute('poster');
  });
}

