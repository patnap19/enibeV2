// Pobranie przycisków z oferty 
const ppozBtn = document.getElementById('ppoz');
const atexBtn = document.getElementById('atex');
const sevesoBtn = document.getElementById('seveso');
const trainingBtn = document.getElementById('training');
const modal = document.querySelector('.modal-shadow');
const modalContainer = modal.querySelector('.modal');
const contactBtn = document.querySelector('.to-contact--btn');
const projectsBtn = document.querySelector('.to-projects--btn');
const header = document.querySelector('.main-header');
//zmienne do zmiany oferty
const photoContainer = document.getElementById('photo-container');
const mainMenuButtons = document.querySelectorAll('.navigation-element');
//tablica do przycisków 
const subMenu = document.querySelector('.sub-menu');
const offerArea = document.querySelector('.main-offer-info__container');
const ppozButtonsArray = ['Instrukcja bezpieczeństwa pożarowego', 'Operat przeciwpożarowy', 'Ekspertyza ppoż', 'Uzgadnianie projektów architektoniczno-budowlanych', 'Nadzór ppoż. nad bezpieczeństwem pożarowym'];
const atexButtonsArray = ['Ocena zagrożenia wybuchem', 'Ocena Ryzyka Wybuchu', 'Dokument zabezpieczenia przed wybuchem'];
const sevesoButtonsArray = ['Dokumentacja SEVESO', 'Raport o Bezpieczeństwie', 'Wewnętrzny Plan Operacyjno-Ratowniczy', 'Program Zapobiegania Awariom'];
const trainingButtonsArray = ['Szkolenia PPOŻ', 'Szkolenia BHP', 'Szkolenie z Pierwszej Pomocy Przedmedycznej'];

//tablice z obiektami do opisów

const descPpozArray = [
    {
        flag: 'ppoz-0',
        title: 'Instrukcja bezpieczeństwa pożarowego',
        desc: `<strong>Instrukcja Bezpieczeństwa Pożarowego</strong> odgrywa istotną rolę w zapewnianiu odpowiedniego
        poziomu bezpieczeństwa w miejscach pracy oraz obiektach użyteczności publicznej.<br>
        <strong>Opracowanie instrukcji</strong><br>
        Instrukcja Bezpieczeństwa Pożarowego jest opracowywana na postawie materiałów udostępnionych
        przez Klienta, wizji lokalnej obiektu, zakładu oraz obecnie obowiązujących przepisów
        przeciwpożarowych.<br>
        <strong>Co powinna zawierać instrukcja bezpieczeństwa pożarowego:</strong><br>
        • część opisowa – opracowana zgodnie z § 6. 1 Rozporządzenia MSWiA z dnia 7 czerwca 2010 r. w
        sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów (Dz. U. Nr
        109, Poz. 719). <br>
        • część graficzna – zawiera informacje na temat rozmieszczenia sprzętu gaśniczego, urządzeń
        przeciwpożarowych, znaków ewakuacyjnych, planu ewakuacji, planu usytuowania obiektu/ów na
        działce itd. <br>
        • załączniki – np. oświadczenie pracownika o zapoznaniu się z instrukcją, karty charakterystyki
        substancji niebezpiecznych i innych według wymagań.`
    }, 
    {
        flag: 'ppoz-1',
        title: 'Operat przeciwpożarowy',
        desc: `Obowiązek opracowania Operatu Przeciwpożarowego wynika z art. 42 ust. 4b pkt 1 Ustawy
        z dnia 14 grudnia 2012 r. o odpadach (Dz.U.2022.0.699).
        Operat Przeciwpożarowy zawiera warunki ochrony przeciwpożarowej instalacji, obiektu lub jego
        części lub innego miejsca magazynowania odpadów, uzgodnione z komendantem powiatowym
        (miejskim) Państwowej Straży Pożarnej.`
    },
    {
        flag: 'ppoz-2',
        title: 'Ekspertyza ppoż',
        desc: `Zgodnie z art. 4 Ustawy z dnia 24 sierpnia 1991 r. o ochronie przeciwpożarowej za bezpieczeństwo
        pożarowe w budynku odpowiada jego właściciel, zarządca bądź użytkownik. <br>
        Espertyza stanu ochrony przeciwpożarowej, zwana jest dokumentem zawierającym rozwiązania
        zamienne w stosunku do wymagań określonych w przepisach dotyczących ochrony
        przeciwpożarowej.<br>
        Ekspertyza ppoż wprowadza alternatywne rozwiązania mające na celu spełnienie przepisów z zakresu
        ochrony przeciwpożarowej w stosunku do rozpatrywanego budynku, obiektu budowlanego czy
        terenu.<br>
        W ekspertyzie przeciwpożarowej w toku analizy przepisów, zawierającej koncepcję bezpieczeństwa,
        właściciel obiektu otrzymuje uzgodnienie wojewódzkiego komendanta Państwowej Straży Pożarnej
        pozwalające na bezpieczne użytkowanie budynku.`
    },
    {
        flag: 'ppoz-3',
        title: 'Uzgadnianie projektów architektoniczno-budowlanych',
        desc: `Rodzaje obiektów, które wymagają uzgodnienia z rzeczoznawcą do spraw zabezpieczeń
        przeciwpożarowych zostały wymienione w § 3 rozporządzenia Ministra Spraw Wewnętrznych i
        Administracji z dnia 17 września 2021 r. w sprawie uzgadniania projektu zagospodarowania działki
        lub terenu, projektu architektoniczno- budowlanego, projektu technicznego oraz projektu urządzenia
        przeciwpożarowego pod względem zgodności z wymaganiami ochrony przeciwpożarowej. Celem
        przedmiotowej współpracy jest wypracowanie założeń projektowych w zgodzie z obowiązującymi
        przepisami techniczno – budowlanymi oraz zasadami wiedzy technicznej.`
    },
    {
        flag: 'ppoz-4',
        title: 'Nadzór ppoż. nad bezpieczeństwem pożarowym',
        desc: `Do obowiązków właściciela lub zarządcy obiektu należy przestrzeganie przepisów
        przeciwpożarowych, jednakże czynności określone w ustawie mogą wykonywać tylko osoby mające
        odpowiednią wiedzę i niezbędne do tego kwalifikacje. Rzetelny nadzór nad obiektem mogą
        sprawować zewnętrzni eksperci na podstawie stosownych ustaleń.<br>
        W ramach współpracy z naszymi klientami i partnerami realizujemy kompleksowy nadzór PPOŻ nad
        bezpieczeństwem pożarowym budynku, który obejmuje:<br>
        • okresowe i bieżące wykonywanie audytów bezpieczeństwa pożarowego,<br>
        • przeprowadzanie szkoleń z zakresu ochrony przeciwpożarowej,<br>
        • przeprowadzanie próbnych ewakuacji,<br>
        • kompleksowe prowadzenie dokumentacji przeciwpożarowej firmy,<br>
        • nadzór nad okresowymi przeglądami podręcznego sprzętu gaśniczego, hydrantów i urządzeń
        przeciwpożarowych,<br>
        • opracowanie oraz aktualizację Instrukcji Bezpieczeństwa Pożarowego,<br>
        • udział w opracowaniu i weryfikację zarządzeń, regulaminów i instrukcji dotyczących ochrony
        przeciwpożarowej,<br>
        • współpracę z innymi instytucjami oraz właściwymi terytorialnie komendami Państwowej
        Straży Pożarnej w zakresie ochrony przeciwpożarowej.`
    },
]

const descAtexArray = [
    {
        flag: 'atex-0',
        title: 'Ocena zagrożenia wybuchem',
        desc: `W przypadku stosowania lub magazynowania substancji mogących tworzyć atmosfery wybuchowe z
        powietrzem (gazy, ciecze, ciała stałe o dużym stopniu rozdrobnienia – pyły, frakcje lotne) pracodawca
        powinien opracować dokument pt. ocena zagrożenia wybuchem.<br>
        Ocena zagrożenia wybuchem wymagana jest zgodnie z § 37 rozporządzenia MSWiA z dn. 7 czerwca
        2010 r. w sprawie ochrony przeciwpożarowej budynków, innych obiektów budowlanych i terenów, i
        obejmuje swoim zakresem:<br>
        • wskazanie pomieszczeń zagrożonych wybuchem<br>
        • wyznaczenie w pomieszczeniach i przestrzeniach zewnętrznych odpowiednich stref
        zagrożenia wybuchem<br>
        • opracowanie graficznej dokumentacji klasyfikacyjnej<br>
        • wskazanie czynników mogących zainicjować zapłon w strefach zagrożonych wybuchem<br>
        Organem administracji publicznej weryfikującym wykonanie i poprawność oceny zagrożenia
        wybuchem jest właściwy miejscowo Komendant Powiatowy/Miejski Państwowej Straży Pożarnej.`
    },
    {
        flag: 'atex-1',
        title: 'Ocena Ryzyka Wybuchu',
        desc: `W każdym przypadku należy zapobiegać występowaniu atmosfer wybuchowych, pomocna przy tym
        jest ocena ryzyka związanego z możliwością wystąpienia atmosfery wybuchowej. <br>
        
        Pierwszym krokiem w ocenie ryzyka wybuchu jest określenie, czy niebezpieczna atmosfera
        wybuchowa może wystąpić w danych warunkach. Jeśli ,,tak” następnie ustala się czy może dojść do
        jej zapłonu. <br>
        Wymieniony proces oceny musi zawsze odnosić się do indywidualnych przypadków i nie może być
        uogólniany. Procedura oceny musi być przeprowadzona dla każdego procesu pracy lub procesu
        produkcyjnego.<br>
        Ocena ryzyka wybuchu, jest oceną całościową biorącą pod uwagę m. in.:<br>
        • używane urządzenia do wykonywania pracy <br>
        • cechy charakterystyczne budynków, instalacji zakładu <br>
        • używane substancje <br>
        • warunki pracy i procesy produkcyjne <br>
        • ewentualne wzajemne oddziaływanie pomiędzy wymienionymi czynnikami jak również ze
        środowiskiem pracy <br>
        Opracowanie oceny ryzyka wybuchu wymagane jest zgodnie z § 4 ust. 4 Rozporządzenia Ministra
        Gospodarki z dnia 8 lipca 2010 r. w sprawie minimalnych wymagań, dotyczących bezpieczeństwa i
        higieny pracy, związanych z możliwością wystąpienia w miejscu pracy atmosfery wybuchowej (Dz.U.
        2010 nr 138 poz. 931).`
    },
    {
        flag: 'atex-2',
        title: 'Dokument zabezpieczenia przed wybuchem',
        desc: `Zgodnie z § 7.1 Rozporządzenia Ministra Gospodarki z dnia 8 lipca 2010 r. w sprawie minimalnych
        wymagań dotyczących bezpieczeństwa i higieny pracy, związanych z możliwością wystąpienia w
        miejscu pracy atmosfery wybuchowej (Dz. U. Nr 138, poz.931), pracodawca, przed udostępnieniem
        miejsca pracy, powinien sporządzić dokument zabezpieczenia przed wybuchem na podstawie oceny
        ryzyka.<br>
        Obowiązek opracowania dokumentu zabezpieczenia przed wybuchem stawiany jest pracodawcom,
        którzy zatrudniają pracowników na stanowiskach pracy, na których występują strefy zagrożenia
        wybuchem. Jest on wykonywany zgodnie Rozporządzeniem Ministra Gospodarki z dnia 8 lipca 2010r.
        w sprawie minimalnych wymagań dotyczących bezpieczeństwa i higieny pracy, związanych z
        możliwością wystąpienia w miejscu pracy atmosfery wybuchowej (Dz. U. Nr 138, poz. 931). <br>
        Opracowanie Dokumentu Zabezpieczenia Przed Wybuchem dla stanowisk pracy powinno być
        wykonane przed rozpoczęciem pracy. Ponadto powinno być poddane aktualizacji lub przeglądowi w
        przypadku, gdy miejsce pracy, urządzenia do wykonywania pracy lub organizacja pracy zostały
        zasadniczo zmienione, rozbudowane lub przekształcone.`
    },
]

const descSevesoArray = [
    {
        flag: 'seveso-0',
        title: 'Dokumentacja SEVESO',
        desc: `Zgodnie z wymogami Ustawy z dnia 27 kwietnia 2001 r. Prawo ochrony środowiska, Tytuł IV Poważne
        awarie, zakład stwarzający zagrożenie wystąpienia poważnej awarii przemysłowej, w zależności od
        rodzaju, kategorii i ilości substancji niebezpiecznej, które znajdują się w zakładzie uznaje się za zakład
        o zwiększonym ryzyku wystąpienia awarii (ZZR), albo za zakład o dużym ryzyku wystąpienia awarii
        (ZDR). <br>
        
        Oferujemy opracowanie lub aktualizację dokumentacji dla zakładu zwiększonego (ZZR) lub dużego
        ryzyka (ZDR) wystąpienia poważnej awarii przemysłowej:<br>
        • przeprowadzenie kwalifikacji zakładu [ZZR; ZDR]<br>
        • przygotowanie zgłoszenia zakładu [ZZR; ZDR]<br>
        • System Zarządzania Bezpieczeństwem [ZZR; ZDR]<br>
        • Program Zapobiegania Awariom [ZZR; ZDR]<br>
        • Raport o Bezpieczeństwie [ZDR]<br>
        • Wewnętrzny Plan Operacyjno-Ratowniczy [ZDR]`
    },
    {
        flag: 'seveso-1',
        title: 'Raport o Bezpieczeństwie',
        desc: `Raport o Bezpieczeństwie – Oferujemy opracowanie lub aktualizację dokumentacji dla zakładu
        dużego ryzyka (ZDR) wystąpienia poważnej awarii przemysłowej, dla którego sporządzenie
        niniejszego dokumentu jest wymagane.<br>
        Raport o Bezpieczeństwie zawiera:<br>
        1) informacje o zakładzie, w tym jego działalności, organizacji i systemie zarządzania, istotne dla
        zapobiegania poważnym awariom przemysłowym;<br>
        2) opis instalacji zakładu, w których występują lub mogą wystąpić substancje niebezpieczne,
        wymienione w zgłoszeniu, o którym mowa w art. 250 ustawy z dnia 27 kwietnia 2001 r. – Prawo
        ochrony środowiska, zwanym dalej „zgłoszeniem”;<br>
        3) opis zidentyfikowanych zagrożeń i oceny ryzyka wystąpienia poważnej awarii oraz informacje o
        środkach koniecznych do zapobiegania awariom;<br>
        4) opis substancji niebezpiecznych ujętych w zgłoszeniu;<br>
        5) informacje o wdrożeniu poprzez system zarządzania bezpieczeństwem programu zapobiegania
        poważnym awariom przemysłowym i potwierdzenie ich skuteczności;<br>
        6) opis systemów, środków i działań mających na celu ograniczenie skutków poważnej awarii
        przemysłowej;<br>
        7) informację, że prowadzący zakład opracował wewnętrzny plan operacyjno-ratowniczy oraz
        dostarczył informacje do opracowania zewnętrznego planu operacyjno-ratowniczego;<br>
        8) informacje dla celów planowania i zagospodarowania przestrzennego;<br>
        9) nazwy podmiotów zaangażowanych w jego przygotowanie.`
    },
    {
        flag: 'seveso-2',
        title: 'Wewnętrzny Plan Operacyjno-Ratowniczy',
        desc: `Wewnętrzny Plan Operacyjno-Ratowniczy – Oferujemy opracowanie lub aktualizację dokumentacji
        dla zakładu dużego ryzyka (ZDR) wystąpienia poważnej awarii przemysłowej, dla którego
        sporządzenie planu ratowniczego jest wymagane.`
    },
    {
        flag: 'seveso-3',
        title: 'Program Zapobiegania Awariom',
        desc: `Program Zapobiegania Awariom – Oferujemy opracowanie lub aktualizację dokumentacji dla zakładu
        zwiększonego i/lub dużego ryzyka (ZDR) wystąpienia poważnej awarii przemysłowej, dla którego
        sporządzenie niniejszego dokumentu jest wymagane.`
    },
]

const descTrainingArray = [
    {
        flag: 'training-0',
        title: 'Szkolenia PPOŻ',
        desc: `Szkolenie PPOŻ obejmuje zagadnienia ochrony przeciwpożarowej, umiejętności potrzebne do
        sprawnego przeprowadzenia ewakuacji w sytuacji zagrożenia, obsługi gaśnic i hydrantów oraz
        prawidłowego zachowania się w sytuacji wybuchu pożaru (aż do momentu przyjazdu na miejsce
        jednostek Państwowej Straży Pożarnej).<br>
        Zgodnie z ustawą o ochronie przeciwpożarowej z 24 sierpnia 1991 roku właściciel lub administrator
        obiektu ma obowiązek zapoznać personel z przepisami przeciwpożarowymi. Dodatkowo na terenie
        każdej firmy należy wyznaczyć osobę odpowiedzialną za sprawy przeciwpożarowe, która przeszła
        szklenie PPOŻ.<br>
        Każde szkolenie obejmuje część teoretyczną oraz praktyczną.`
    },
    {
        flag: 'training-1',
        title: 'Szkolenia BHP',
        desc: `Nasza firma prowadzi szkolenia z zakresu BHP zgodnie z Rozporządzeniem Ministra Gospodarki i
        Pracy z 27 lipca 2004 roku w sprawie szkolenia w dziedzinie Bezpieczeństwa i Higieny Pracy.
        Szczegółowy program, sposób organizacji oraz termin szkolenia jest dopasowany indywidualnie do
        godzin pracy zakładu, klienta oraz innych indywidualnych potrzeb.
        Oferujemy szkolenia okresowe z zakresu BHP dla:<br>
        • pracodawców i osób kierujących zespołami (kierowników, brygadzistów, mistrzów) – ważne 5
        lat,<br>
        • pracowników na stanowiskach robotniczych – ważne 3 lata,<br>
        • inżynierów i pracowników technicznych (m.in. konstruktorów linii produkcyjnych i maszyn,
        technologów, osób odpowiedzialnych za produkcję) – ważne 5 lat,<br>
        • personelu administracyjno-biurowego – ważne 6 lat,<br>
        • osób zatrudnionych w oświacie i służbie zdrowia (m.in. lekarzy, laborantów, pielęgniarek,
        nauczycieli) – ważne 5 lat,<br>
        • pracowników służb BHP – ważne 5 lat.`
    },
    {
        flag: 'training-2',
        title: 'Szkolenie z Pierwszej Pomocy Przedmedycznej',
        desc: `Kurs przeznaczony jest dla wszystkich osób chcących nauczyć się prawidłowo udzielać pierwszej
        pomocy przedmedycznej. Program zawiera wszystkie elementy niezbędne do udzielania pierwszej
        pomocy przez pracowników wyznaczonych przez pracodawcę (na podst. art. 2091 ustawy z dnia 26
        czerwca 1974 r. – Kodeks pracy (Dz. U. z 1998 r. nr 21, poz. 94, z późn. zm.) w ramach zakładowego
        systemu pierwszej pomocy, a także dla nauczycieli, dyrektorów i pracowników placówek
        oświatowych.<br>
        Zapoznanie uczestników z zasadami udzielania pierwszej pomocy przedmedycznej oraz nabycie
        wiedzy i umiejętności pozwalających skutecznie udzielić pierwszej pomocy w nagłych przypadkach.`
    },

]

const renderButtons = (offerId, buttonsArray) => {
    subMenu.innerHTML = '';
    const subButtonsArray = [];
    let index = 0;
    for(const button of buttonsArray) {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = button;
        buttonEl.setAttribute('id', `${offerId}-${index}`);
        buttonEl.classList = 'sub-menu-btn';
        subMenu.append(buttonEl);
        subButtonsArray.push(buttonEl);
        index++;
    }
    let arrayDesc = [];
    if(offerId === 'ppoz') {
        arrayDesc = descPpozArray;
    } else if(offerId === 'atex') {
        arrayDesc = descAtexArray;
    } else if(offerId === 'seveso') {
        arrayDesc = descSevesoArray;
    } else if(offerId === 'training') {
        arrayDesc = descTrainingArray;
    }
    subTitleOpen(subButtonsArray, offerId, arrayDesc);
}

const subTitleOpen = (arrayOfButtons, offerId, arrayDesc) => {
    arrayOfButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modal.classList.add('modal-show');
            if(arrayDesc[index].flag === `${offerId}-${index}`) {
                modalContainer.innerHTML = `
                <h3>${arrayDesc[index].title}</h3>
                <div>
                <p>${arrayDesc[index].desc}</p>
                </div>
                `;
            }
            modal.addEventListener('click', () => {
                modal.classList.remove('modal-show');
            })
        })
    })
}

const changeElements = (offerId) => {
    if(offerId === 'atex') {
        photoContainer.classList = '';
        photoContainer.className = 'atex-active';
        renderButtons(offerId, atexButtonsArray);

    } else if (offerId === 'seveso') {
        photoContainer.classList = '';
        photoContainer.className = 'seveso-active';
        renderButtons(offerId, sevesoButtonsArray);

    } else if (offerId === 'ppoz') { 
        photoContainer.classList = '';
        photoContainer.className = 'ppoz-active';
        renderButtons(offerId, ppozButtonsArray);
        
    } else {
        photoContainer.classList = '';
        photoContainer.className = 'training-active';
        renderButtons(offerId, trainingButtonsArray);

    }
}

const highlitedOffer = (btn) => {
    ppozBtn.className = '';
    atexBtn.className = '';
    sevesoBtn.className = '';
    trainingBtn.className = '';
    btn.className = 'active';
}


function handleClick(event) {
    const btnId = event.target.id;
    changeElements(btnId);
    highlitedOffer(event.target);
}


const navBurgerBtn = document.querySelector('.navigation-burger__container');
const navElements = document.querySelector('.navigation-elements');
const toggleMenu = () => {
    navElements.classList.toggle('nav-show');
    navBurgerBtn.classList.toggle('active');
}

mainMenuButtons[0].addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.about-us').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    })

    if(navBurgerBtn.classList.contains('active')) {
    toggleMenu();
    }
})
mainMenuButtons[1].addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.offer').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    })
    if(navBurgerBtn.classList.contains('active')) {
        toggleMenu();
        }
})
mainMenuButtons[2].addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.projects').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    })
    if(navBurgerBtn.classList.contains('active')) {
        toggleMenu();
        }
})
mainMenuButtons[3].addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.contact').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    })
    if(navBurgerBtn.classList.contains('active')) {
        toggleMenu();
        }
})

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.contact').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    });
})

projectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutStart = document.querySelector('.contact').offsetTop - 79;
    scroll({
        top: aboutStart,
        behavior: "smooth"
    });
})

const onLoadAnimations = () => {
    renderButtons('ppoz', ppozButtonsArray);
    header.classList.add('active');

}


navBurgerBtn.addEventListener('click', toggleMenu);

window.addEventListener('load', onLoadAnimations);



ppozBtn.addEventListener('click', handleClick);
atexBtn.addEventListener('click', handleClick);
sevesoBtn.addEventListener('click', handleClick);
trainingBtn.addEventListener('click', handleClick);