const navBtn = document.querySelector('#bar');
const nav = document.querySelector('.nav-list')
console.log(navBtn)
console.log(nav)

    navBtn.addEventListener('click', () => {

        nav.classList.toggle('nav-active')

    });

const btnPortifolio = document.getElementById('#portifolio');
const btnSobre = document.getElementById('#sobre');
const btnContato = document.getElementById('#contato'); 
console.log(btnContato)


/*function scrollToElement (btnSobre) {
    $('html, body').animate({
      scrollTop: $(btnSobre).offset().top
    }, 2000);    
  };
  
  $(document).on('click', 'a.uruna', function () {
    scrollToElement($(this).attr('href'));
  });*/

btnPortifolio.addEventListener('click', desce);

  function desce(e) {
    e.preventDefault();
    const referencia = this.getAttribute('href');
    const offsetTop = document.querySelector(referencia).offsetTop;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    })
  }

//https://www.origamid.com/codex/scroll-suave-para-link-interno/
//https://pt.stackoverflow.com/questions/14644/como-deixar-o-scroll-de-uma-p%c3%a1gina-suave/14682#14682
//https://pt.stackoverflow.com/questions/14644/como-deixar-o-scroll-de-uma-p%c3%a1gina-suave/14682#14682