(function () {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add('header__activ');
    } else {
      header.classList.remove('header__activ');
    }
  };
})();
function showTitle(event) {
  var x = event.clientX;
  var y = event.clientY;
  var title = event.target.getAttribute("title");
  var tooltip = document.createElement("div");
  tooltip.textContent = title;
  tooltip.style.position = "fixed";
  tooltip.style.top = y + "px";
  tooltip.style.left = x + "px";
  document.body.appendChild(tooltip);
  event.target.addEventListener("mouseout", function () {
    document.body.removeChild(tooltip);
  });
}

//burger handler
(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuCloseItem = document.querySelector('.header__nav-close');
  const menuLinks = document.querySelectorAll('.header__link');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('header__nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header__nav_active');
  });
if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
            });
        }
    }
}());

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;
    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };
  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

//language

var arrLang = {
  'en': {
    'home': 'Home',
    'video': 'Video',
    'locations': 'Events',
    'articles': 'Articles',
    'introTit': 'The Salvation Army Republic of Moldova',
    'introSubTit': 'An international Christian and charitable organization that has effectively become a Protestant denomination. It was founded as a Christian mission in 1865 in England by Methodist preacher William Booth and his wife Catherine to preach to the poor and destitute, and in 1878 was reorganized as an army and named the Salvation Army.In the 1880s, the Salvation Army began to develop social service, helping the needy, establishing various charitable institutions, such as flophouses for the homeless, shelters for the disabled, workshops for the unemployed, hospitals for alcoholics, shelters for prostitutes, nurseries for abandoned children, and the like. . In the same years, the Salvation Army began to spread its activities to different countries of the world. It currently covers over 130 countries. Its headquarters is in London. In the Russian Empire and Soviet Russia, the Salvation Army worked from 1913 to 1923 and has been present in modern Russia since 1991.',
    'searchIf': 'search',
    'benTit': 'The Salvation Army',
    'benCardTit1': 'Protection!',
    'benCard1': 'The Salvation Army is able to provide protection and a secluded place for everyone.',
    'benMore': 'LEARN MORE',
    'benCardTit2': 'Love!',
    'benCard2': 'The Salvation Army adheres to the rule: "Heart to God, hand to man". We can give love to everyone.',
    'benCardTit3': 'Care!',
    'benCard3': 'We, as humans, can give care to others because we have empathy - the ability to understand and experience the feelings of other people. This ability allows us to feel empathy and compassion for those who need our help and support.',
    'placesTit': 'Churches in the Republic of Moldova',
    'viewAll': 'VIEW ALL',
    'place1': 'Kishinev',
    'place2': 'Ialoveni',
    'place3': 'Edinet',
    'place4': 'Balti',
    'place5': 'New Balti',
    'tour1': 'Youth meeting in New Balti',
    'tourDesc1': 'In the "Church of New Balti" you will have the opportunity to make new friends, learn more about God and the Christian life. Our meetings will be filled with fun activities, discussions and delicious tea.',
    'tour2': 'Territorial youth meeting in Chisinau',
    'tourDesc2': 'This meeting is intended for all young people in Eastern Europe. At this meeting, we communicate, praise God, drink drinks and eat tasty food.',
    'topTit': 'Events',
    'topTit1': 'TERRITORIAL MEETING',
    'top1': 'Meeting of the territory of Eastern Europe with the general.',
    'seeMore': 'SEE MORE',
    'topTit2': 'NEW CREATING',
    'top2': 'Are you looking for a place to connect with others and grow in your faith? Look no further! Introducing New Creating, a new dating group for teens.',
    'topTit3': 'GENERAL"S SERMON',
    'top3': 'The General rreaches God"s word to a wide area',
    'topTit4': 'NEW YEAR"S DANCE',
    'top4': 'Finally, the New Year"s dance is a great way to get in the holiday mood and create a festive atmosphere in the company of friends and loved ones. Dance helps us forget about everyday worries and problems and enjoy the moment together with the people we care about.',
    'topTit5': 'PHOTOS WITH THE GENERAL',
    'top5': 'The general is an idol for many. For this, a photo session was made where everyone could take a picture with him.',
    'topTit6': 'JOYFACES OF CHILDREN',
    'top6': 'The joyful faces of children are a reason for the happiness of their parents. And we as an organization can help and make many children in the world happy.',
    'futTitC': 'Company',
    'futTitC1': 'About',
    'futTitC2': 'Team',
    'futTitC3': 'Careers',
    'futTitC4': 'Privacy Policy',
    'futTitL': 'Locations',
    'futTitL1': 'Kishinev',
    'futTitL2': 'Balti',
    'futTitL3': 'Orhei',
    'futTitL4': 'Ungeni',
    'futTitS': 'Social Media',
    'futTitS': 'Facebook',
    'futTitS': 'Twitter',
    'futTitS': 'Instagram',
    'futTitS': 'Youtube',
    


  },
  'ru': {
    'home': 'Главная',
    'video': 'Видео',
    'locations': 'События',
    'articles': 'Статьи',
    'introTit': 'Армия Спасения Республики Молдова',
    'introSubTit': 'Международная христианская и благотворительная организация, фактически ставшая протестантской конфессией. Она была основана как христианская миссия в 1865 году в Англии методистским проповедником Уильямом Бутом и его женой Кэтрин для проповеди бедным и обездоленным, а в 1878 году была реорганизована в армию и названа Армией спасения. развивать социальное обслуживание, помощь нуждающимся, создание различных благотворительных учреждений, таких как ночлежки для бездомных, приюты для инвалидов, мастерские для безработных, больницы для алкоголиков, приюты для проституток, ясли для брошенных детей и т.п. . В эти же годы Армия Спасения начала распространять свою деятельность на разные страны мира. В настоящее время он охватывает более 130 стран. Его штаб-квартира находится в Лондоне. В Российской империи и Советской России Армия Спасения действовала с 1913 по 1923 год, а в современной России присутствует с 1991 года.',
    'searchIf': 'поиск',
    'benTit': 'The Salvation Army',
    'benCardTit1': 'Защита!',
    'benCard1': 'Армия Спасения способна обеспечить защиту и укромное место каждому.',
    'benMore': 'УЗНАТЬ БОЛЬШЕ',
    'benCardTit2': 'Любовь!',
    'benCard2': 'Армия Спасения придерживается правила: «Сердце к Богу, руки человеку». Мы можем подарить любовь каждому.',
    'benCardTit3': 'Забота!',
    'benCard3': 'Мы, люди, можем заботиться о других, потому что обладаем эмпатией — способностью понимать и испытывать чувства других людей. Эта способность позволяет нам чувствовать сочувствие и сострадание к тем, кто нуждается в нашей помощи и поддержке.',
    'placesTit': 'Церкви в Республике Молдова',
    'viewAll': 'Смотреть всё',
    'place1': 'Кишинёв',
    'place2': 'Яловены',
    'place3': 'Единцы',
    'place4': 'Бельцы',
    'place5': 'Новые Бельцы',
    'tour1': 'Молодёжная встреча в Новых Бельцах',
    'tourDesc1': 'В «Церкви Новые Бельцы» у вас будет возможность завести новых друзей, узнать больше о Боге и христианской жизни. Наши встречи будут наполнены веселыми занятиями, дискуссиями и вкусным чаем.',
    'tour2': 'Территориальная молодёжная встреча в Кишинёве',
    'tourDesc2': 'Эта встреча предназначена для всех молодых людей в Восточной Европе. На этой встрече мы общаемся, славим Бога, пьем напитки и вкусно едим.',
    'topTit': 'События',
    'topTit1': 'ТЕРРИТОРИАЛЬНАЯ ВСТРЕЧА',
    'top1': 'Встреча территории Восточной Европы с Генералом.',
    'seeMore': 'Посмотреть больше',
    'topTit2': 'NEW CREATING',
    'top2': 'Вы ищете место, где можно общаться с другими и расти в своей вере? Не смотрите дальше! Представляем New Creating, новую группу знакомств для подростков.',
    'topTit3': 'ПРОПОВЕДЬ ГЕНЕРАЛА',
    'top3': 'Генерал проповедует слово Божие до широкой области',
    'topTit4': 'НОВОГОДНИЙ ТАНЕЦ',
    'top4': 'Новогодний танец – это отличный способ создать праздничное настроение и создать праздничную атмосферу в компании друзей и близких. Танец помогает нам забыть о повседневных заботах и проблемах и насладиться моментом вместе с близкими людьми. заботиться о.',
    'topTit5': 'ФОТОСЕССИЯ С ГЕНЕРАЛОМ',
    'top5': 'Генерал является кумиром для многих. Для этого была сделана фотосессия, где все желающие могли с ним сфотографироваться.',
    'topTit6': 'СЧАСТЛИВЫЕ ДЕТИ',
    'top6': 'Радостные лица детей – повод для счастья их родителей. И мы как организация можем помочь и сделать счастливыми многих детей в мире.',
    'futTitC': 'Компания',
    'futTitC1': 'О нас',
    'futTitC2': 'Команда',
    'futTitC3': 'Карьера',
    'futTitC4': 'Политика конфиденциальности',
    'futTitL': 'Местоположения',
    'futTitL1': 'Кишинёв',
    'futTitL2': 'Бельцы',
    'futTitL3': 'Оргеев',
    'futTitL4': 'Унгены',
    'futTitS': 'Социальные медиа',
    'futTitS': 'Facebook',
    'futTitS': 'Twitter',
    'futTitS': 'Instagram',
    'futTitS': 'Youtube',

  },
  'ro': {
    'home': 'Acasă',
    'video': 'Video',
    'locations': 'Evenimente',
    'articles': 'Articole',
    'introTit': 'Armata Salvării Republicii Moldova',
    'introSubTit': 'O organizație internațională creștină și caritabilă care a devenit efectiv o denominație protestantă. A fost fondată ca misiune creștină în 1865 în Anglia de către predicatorul metodist William Booth și soția sa Catherine pentru a predica săracilor și săracilor, iar în 1878 a fost reorganizată ca armată și numită Armata Salvării. În anii 1880, Armata Salvării a început. să dezvolte serviciul social, ajutorarea celor nevoiași, înființarea diverselor instituții caritabile, cum ar fi flophouses pentru cei fără adăpost, adăposturi pentru persoane cu dizabilități, ateliere pentru șomeri, spitale pentru alcoolici, adăposturi pentru prostituate, creșe pentru copii abandonați și altele asemenea. . În aceiași ani, Armata Salvării a început să-și răspândească activitățile în diferite țări ale lumii. În prezent acoperă peste 130 de țări. Sediul său este la Londra. În Imperiul Rus și Rusia Sovietică, Armata Salvării a funcționat între 1913 și 1923 și este prezentă în Rusia modernă din 1991.',
    'searchIf': 'căutare',
    'benTit': 'Armata Salvării',
    'benCardTit1': 'Protecţie!',
    'benCard1': 'Armata Salvării este capabilă să ofere protecție și un loc retras tuturor.',
    'benMore': 'AFLĂ MAI MULTE',
    'benCardTit2': 'Dragoste!',
    'benCard2': 'Armata Salvării aderă la regula: „Inimă lui Dumnezeu, mână omului”. Putem oferi dragoste tuturor.',
    'benCardTit3': 'Îngrijire!',
    'benCard3': 'Noi, ca oameni, putem acorda grijă celorlalți pentru că avem empatie - capacitatea de a înțelege și de a experimenta sentimentele altor oameni. Această abilitate ne permite să simțim empatie și compasiune pentru cei care au nevoie de ajutorul și sprijinul nostru.',
    'placesTit': 'Bisericile din Republica Moldova',
    'viewAll': 'VEZI TOATE',
    'place1': 'Chișinău',
    'place2': 'Ialoveni',
    'place3': 'Edineţ',
    'place4': 'Bălți',
    'place5': 'Bălți Nou',
    'tour1': 'Întâlnire de tineret în Noul Bălți',
    'tourDesc1': 'În „Biserica din Noul Bălți” veți avea ocazia să vă faceți noi prieteni, să aflați mai multe despre Dumnezeu și viața creștină. Întâlnirile noastre vor fi pline de activități distractive, discuții și ceai delicios.',
    'tour2': 'Întâlnire teritorială de tineret la Chișinău',
    'tourDesc2': 'Această întâlnire este destinată tuturor tinerilor din Europa de Est. La această întâlnire, comunicăm, lăudăm pe Dumnezeu, bem băuturi și mâncăm mâncare gustoasă.',
    'topTit': 'Evenimente',
    'topTit1': 'ÎNTÂLNIREA TERITORIALĂ',
    'top1': 'Întâlnirea teritoriului Europei de Est cu generalul.',
    'seeMore': 'VEZI MAI MULT',
    'topTit2': 'NEW CREATING',
    'top2': 'Cauți un loc în care să te conectezi cu alții și să crești în credința ta? Nu mai căuta! Vă prezentăm New Creating, un nou grup de întâlniri pentru adolescenți.',
    'topTit3': 'PREDICA GENERALULUI',
    'top3': 'Generalul întinde cuvântul lui Dumnezeu într-o zonă largă',
    'topTit4': 'DANS DE ANUL NOU',
    'top4': 'În cele din urmă, dansul de Anul Nou este o modalitate excelentă de a intra în starea de vacanță și de a crea o atmosferă festivă în compania prietenilor și a celor dragi. Dansul ne ajută să uităm de grijile și problemele cotidiene și să ne bucurăm de moment împreună cu oamenii îți pasă de.',
    'topTit5': 'FOTOGRAFII CU GENERALUL',
    'top5': 'Generalul este un idol pentru mulți. Pentru aceasta s-a făcut o ședință foto în care toată lumea și-a putut face o poză cu el.',
    'topTit6': 'BUCURIA COPIILOR',
    'top6': 'Chipurile vesele ale copiilor sunt un motiv pentru fericirea părinților lor. Și noi, ca organizație, putem ajuta și face fericiți mulți copii din lume.',
    'futTitC': 'Companie',
    'futTitC1': 'Despre',
    'futTitC2': 'Echipă',
    'futTitC3': 'Cariere',
    'futTitC4': 'Politica de confidențialitate',
    'futTitL': 'Locații',
    'futTitL1': 'Chișinău',
    'futTitL2': 'Bălți',
    'futTitL3': 'Orhei',
    'futTitL4': 'Ungeni',
    'futTitS': 'Social Media',
    'futTitS': 'Facebook',
    'futTitS': 'Twitter',
    'futTitS': 'Instagram',
    'futTitS': 'Youtube',
  }
}



 $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
