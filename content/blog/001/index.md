---
title: 001 - Vi pratar vi med Esteban Vega
date: "2019-03-06T01:00:00.01Z"
---

<iframe height="200px" width="100%" frameborder="no" scrolling="no" seamless="" src="https://player.simplecast.com/a4aa8fea-bc20-40a1-aa01-395f72c734bc?dark=false"></iframe>

I detta avsnitt pratar vi med *Esteban Vega*, full-stack utvecklare på SPP, om bryta sig loss från muspekaren och in i en värld av kortkommadon för att komma ut i hastighet och ergonomi vid tangentbordet. Esteban Vega är en självlärd utvecklare som är nyfiken på allt inom front-end. Esteban har 7 års erfarenhet inom webb-teknologier och jobbar idag på SPP Tech.

Du kan hitta Esteban Vega på [LinkedIn](https://www.linkedin.com/in/estebanv/) och världsvida webben.

![Bild på Esteban Vega](./esteban-vega.jpg)

## Shownotes
* [Vim – the ubiquitous text editor](https://www.vim.org/)
* [Vim för Visual Studio Code](https://github.com/VSCodeVim/Vim)
* [Cmder – riktigt bra shell för Windows](https://cmder.net/)

## HELA AVSNITTET TRANSKRIBERAT
*Bartek Tatkowski:* Hej, och välkomna till Kompilator, podcasten för dig som jobbar med utveckling. Idag pratar vi med Esteban Vega, full stack-utvecklare på SPP, om vi, utvecklingsverktyg och kommandoradsinterface. Hej Esteban, och välkommen till podden, vad roligt att du kunde vara med!

*Esteban Vega:* Tack!

**BT:** Vi sitter här på SPP, du har jobbat här i kanske – tre månader?

**EV:** Ja, det stämmer. 3 månader.

**BT:** Det var lite speciellt när du började, för som alltid när det kommer en ny utvecklare till gruppen så tittar man lite över axeln; ”Vad är det där för en, vad kan han?”. Och så märkte jag att du höll på med en massa märkliga kortkommandon när du skrev kod, då tänkte jag: ”Vad håller han på med?” Och sen råkade jag snegla på din skärm och såg att du hade en VIM-tutorial, eller VI.

**EV:**Stämmer bra.

**BT:** Och då blev jag jättenyfiken – Vem använder VI 2019? Berätta.

**EV:** Jo, jag började med det på min förra anställning. Det var då jag började använda det på riktigt. Jag har bara tidigare testat och aldrig riktigt kommit över tröskeln. Det är så svårt att lära sig, tycker de flesta och jag håller med. Men, när du väl har börjat använda det och ser nyttan i att du lär dig en uppsättning av kommandon som du kan återanvända på flera ställen på olika datorer, så blir det väldigt kraftfullt.

**BT:**Och för de som inte vet vad VI är – från början så tror jag att det var en textredigerare i UNIX, en av ursprungstextredigerarna och på den tiden fanns det inte piltangenter, så det var kortkommandon som gällde.

**EV:** Precis.

**BT:** Och jag tror att den mest frågade frågan på Stack overflow är; ”Vad är kortkommandot för att komma ut ur VI?” Men, vad är syftet med de här kortkommandona? Det är att man ska bli snabbare på att redigera text?

**EV:** Ja, egentligen. Det är att du ska kunna göra alla typer av kommandon eller saker som du behöver musen till, det ska du kunna göra via tangentbordet. Egentligen ska du kunna klara dig genom att ha dina fingrar på Home-row och egentligen inte behöva förflytta dig så mycket till musen, då blir du ju lite snabbare, helt enkelt. Och, det är känt för att bli mer ergonomiskt.

**BT:** Nu sa du någonting intressent, ”home row”? 

**EV:** Det är att du har fingrarna på den här mellersta raden, där de börjar på högra sidan med j, k och så kommer jag inte ihåg resten och vänstra handen har du då på…

**BT:** A, s, d… Eller nej, kanske inte… Ja, mellersta raden på tangentbordet.

**EV:** Precis, det brukar man också känna eftersom det finns en liten upphöjt kant på just de tangenterna där man börjar. Så, då vet man direkt och då hittar man sin placering, då behöver man inte kolla längre. Så, både navigering och kommandon utgår ju ifrån home row, så att du slippa behöva flytta så mycket på fingrarna. 

**BT:** Just det. För du sitter inte i VI, i programmet VI.

**EV:** Nej.

**BT:** Utan du sitter i…?

**EV:** Jag sitter i Visual Code.

**BT:** Ja.

**EV:** Med ett tillägg för att ta emot VIM-kommandon. Och det kan jag också göra i andra datorer, till exempel i Visual Studio har jag också ett VIM-tillägg och då kan jag återanvända det jag har lärt mig och navigera på det sättet. 

**BT:** Och det är samma, det är inte så att det finns dialekter av VI, så att det är lite annorlunda, jag tänker med regex, då är det lite annorlunda Javascript, lite annorlunda i C-sharp…?

**EV:** Nej, det som brukar krångla oftast, det är när det krockar med editorns inbyggda kortkommandon. Visional studio har ju en mängd olika, så då får man ju på nåt sätt hitta en bra kombination av hur mycket VIM man vill köra, kontra det som är inbyggt i editorn. 

**BT:** Och, hur tycker du, har du märkt någon skillnad sen du började med det här, eller är du fortfarande i inlärningsstadiet?

**EV:** Jag har fortfarande mycket kvar att lära mig, men jag har blivit så pass produktiv att jag märker skillnad. 

**BT:** Ja och du hade använt någon tutorial för att komma igång med det här?

**EV:**Ja, precis, det finns en editor som heter Oni, som påminner om Visual code, men allt från navigering i solution-explorern, eller vad man ska kalla det, filfönstret, sker via VIM-kommandon. Så det är verkligen, om man tänker sig att tillägget i Visual Code har tagit helt över editorn, så funkar Oni.

**BT:** Just det. Vi får lägg till länkar i allt det här i Show notes.

**EV:** Ja.

**BT:** Jag gjorde någon liknande resa i början av 2000-talet när jag pluggade med Dvorak-layout. Och, för er som inte vet vad Dvorak är – standarduppsättningen man har på tangentbordet som heter Qwerty och det är helt enkelt hur tangenterna ligger på tangentbordet. Historien bakom Qwerty kommer från skrivmaskiner där man hade de här armarna som flög upp och tryckte till färg på pappret.

**EV:** Just det.

**BT:** Så, Qwerty är optimerat så att det blir från varannan sida hela tiden, så att de inte hakar i varandra och fastnar. Det är därför Qwerty ser ut som den gör. Det har ju noll relevans när man sitter med en dator. Utifrån det så finns ju den här Dvorak-layouten och den tragglade jag med i säkert 2 månader, innan jag gav upp för att sales pitchen för Dvorak var samma sak, att man skulle bli mer produktiv, att den är ergonomiskt optimerad så att man blir mycket snabbare. Men, det tog sådan tid att komma upp i hastighet, så jag gav upp. De flesta, jag tror att vi var kanske 10 stycken som försökte sig på det där och tror att det bara var en som härdade ut. Har du provat Dvorak någon gång?

**EV:** Nej, men jag har läst om det, att det också skulle på något sätt, ja, skulle bli lite mer produktivt, men jag har inte kommit till den punkten än.

**BT:** Men, den här editorn som vi pratade om, den hette Oni. Är det en ren texteditor eller är det en kodeditor?

**EV:** Jag skulle säga att den är mer som en IDE, precis som Visual Code, att den utöver bara texteditering så har du ju också stöd för GIT-plugin. Och, just att du ser projektstrukturen, allt det ingår i det. Fast, allt sköts då via VIM-kommandon. 

**BT:** Just det.

**EV:** Men, det påminner väldigt mycket om Visual Code. 

**BT:** Men alternativet är annars att installera en plugin till VS-code.

**EV:** Precis.

### ANDRA VERKTYG
**BT:** För det är en ganska ny, om man tänker sig spektrumet från Notepad längst till vänster och Visual Studio 2017 längst till höger så har det ju kommit massor med redigerare, eller vad man ska kalla det, i mitten. De är inte ett full blown IDE som Visual Studio, men de är inte bara en textredigerare som Notepad. Jag tror att det var Sublime text som var först att vara i grund och botten en textredigerare, men sedan kunde man bygga på den med väldigt mycket plugins och få nästan ett IDE. Sedan var det väldigt många som kom, Github hade en som hette Atom.

**EV:** Jag tror att Adobe också hade någon som hette Brackets.

**BT:** Just det, Brackets. Den var väldigt bra. Men sedan kom Visual Studio Code ur ingenstans och bara körde om allt och alla. I dagsläget känns det som att de har vunnit det här. Alla andra ligger på en lång lång andraplats.

**EV:** Ja och jag försökte tänka på, när var det den verkligen slog igenom, vad var det som gjorde den så välanvänd? Och jag vet inte om kan vara med Angular, alltså nya Angular, kan det vara med hur typescript har vuxit? Jag vet inte.

**BT:** Ja, för om man ser på de tre, VS-code, Atom och Bracket, de var ju extremt snarlika alla tre. Alla tre körde ju på electron och var textredigerare med ett plugin-system. Jag undrar om det inte är de här pluginen som, eftersom de hade Microsoft bakom sig, kunde lansera en helt annat klass på plugins och jag undrar lite vad det här har gjort med företag som Jetbrain, till exempel. De har ju IDEs för allt möjligt, de har ju PyCharm för Python, de har…

**EV:** Webstorm. 

**BT:** Ja, men precis – Webstorm. Det känns som att Microsoft har ätit upp deras kaka. För allt man kan få från Webstorm kan man få från VS-code gratis. 

**EV:** Ja och sedan nu också med .NET core skulle jag säga att det verkligen har… Nu räcker det med Visual Code, det stödet för cross platform gör att nu kan du ju debugga direkt i VS-code och du behöver inte starta upp något som känns slöare, som Visual Studio professional för att få igång samma sak.

**BT:** I överlag så känns det att hela utvecklings-workfloet går från den här jättemonoliten Visual Studio 2017, där allting hakade in och allting skulle skötas i Visual Studio, till att ha mer diskreta komponenter som just VS-code och, som du sa .NET core, som är extremt CLI-baserat.

**EV:** Ja, precis.

**BT:** Hur du tycker du det är att jobba med det? 

**EV:** Jag tycker det funkar väldigt bra, faktiskt. Jag är nästan förvånad över hur smidigt det var att sätta igång ett första projekt, dels via CLI, men sedan tänkte jag också; ”Okej, hur får man till debugging?” Det var den delen jag var lite orolig över, eftersom det funkade så bra i Visual Studio, ja, den vanliga versionen. Men det var förvånansvärt väldigt smidigt. Jag tror att de har jobbat väldigt mycket på det, så att tröskeln in till att börja med code-kombinationen Core ska vara så smidig som möjligt.

**BT:** VI började med att prata om VI och jag undrar, hur upptäckte du det?

**EV:** Jag tror att det var första gången jag provade på Git och jag skulle göra en commit. Man skriver sitt meddelande då i, eller om man skriver git commit så startas då en editor i VIM. Då ska du skriva ditt meddelande och sen ska man hoppa ur det. Och det är nog den frågan, som du sa där på Stack Overflow, som jag tror många stöter på. Hur hoppar man ur den här editorn? Jag hade sedan tidigare bara jobbat med Nano i Unix-miljöer och den är väldigt enkel för nybörjare som är Windows-vana. Men, VIM är något helt annat om man inte är van. Så det var första kontakten, det var via Git. 

**BT:** Ja, precis, det minns jag också att man snabbt lärde sig, att det fanns den här -M-flaggan, så att man bara kunde skriva sitt commit-meddelande.

**EV:** Exakt.

**BT:** Men då märkte du att, ”Det här är någonting.” Och var det då du hittade det här Oni eller?

**EV:** Nej, det här var då, när jag jobbade på Expressen. Det var första jobbet då jag började jobba mer med Unix-miljöer. Jag hade sedan tidigare bara jobbat med Windows-applikationer, både webb och klienter. Men, på Expressen var folk väldigt Unix-vana och väldigt duktiga på cityterminalen och på att jobba. Så, där är första gången jag såg hur produktiv man kan vara, genom att jobba i VIM, eller terminal, för den delen. 

**BT:** Så då hade du någon som du kunde använda som bollplank eller mentor, som satt med det så att du fick se det in action.

**EV:** Precis, jag blev mer inspirerad. Jag fick aldrig någon möjlighet att lära mig det själv kände jag, för att jag kände att jag hade så mycket att lära mig. Men, jag såg verkligen hur folk, utan en sådan där Virtual Studio, med ”all batteries included”, kunde göra så mycket i en terminal. Det var imponerande.

### ARBETA MED KOMMANDORADEN
**BT:** Ja, precis som vi pratade om tidigare, att man börja röra sig mot det här mer modellära, att man plockar det bästa från allting och plockar ihop sin egen utvecklingsmiljö, så håller Unix/Linux-världen också på att sippra in i Windows utveckling. Bara det faktumet att .NET Core, jag vet inte om det är CLI first, men det har ju en extremt stark CLI-sida. Tittar man på alla tutorials som går igenom det, så är det liksom så att du använder ditt CLI och skriver de här kommandona, det är inte så där New project längre.

**EV:** Nej.

**BT:** Och, det tycker jag är spännande, för det är som du säger, jag tycker att det är mycket mer produktivt när man väl har kommit igång med det. Vad använder du för terminal?

**EV:** På Windows brukar jag oftast använda något som heter ConEmu, som jag tror i botten använder sig av MinGW, tror jag det är, någon sorts emulering av Unix-miljön, fast det är i väldigt avskalat läge. Så då kan du göra som vanlig, som när man listar en katalog, då kan du köra direkt istället för att skriva dir och sådant.

**BT:** Jag kör motsvarande, fast det heter commander, CMDER och jag tror att det är den här Git Bash, som man får med när man installerar Git. Fast den är wrappad på en mycket mer aptitligt sätt. 

**EV:** Jag undrar om inte det är den som använder MinGW och ConEmu tror jag använder… ja, jag vet att det finns ju Cygwin också.

**BT:** Just det, precis och det är ju lite olika dialekter av samma sak, känns det som. Men det har inte kommit någon riktigt bra native shell, vilket är konstigt med tanke på att man numera kan köra Ubuntu native i Windows, så man kan gå till Windows app store och hitta Ubuntu och ladda ner det. Jag har inte provat det själv, men jag har sett Scott Hanselman köra det och det är jättehäftigt.

**EV:** Ja, jag har provat det. Men jag har inte riktigt hunnit kika mer än att bara testa och det verkar väldigt lovande.

**BT:** Men, är det en VM som är lite bortabstraherad, så att det är en VM men ändå inte, eller? Jag vet inte riktigt hur de har löst det. 

**EV:** Nej, jag tror att jag inte är helt hundra på hur det fungerar heller.

**BT:** För jag vet att i början, när de precis lanserade det, då var man tvungen att ha Hyper-V installerat för att det skulle funka. Är det så fortfarande, vet du det?

**EV:** Jag vet inte om det är ett krav, men jag hade Hyper-V innan.

**BT:** Okej. 

**EV:** Det kan mycket väl vara så.

**BT:** Jag skulle vilja återigen cirkla tillbaka till VI, för du upptäckte det och sedan såg du att man kunde få en produktivitetsboost, men det krävs ändå ganska mycket för att man ska lära sig det. Hur motiverade du dig själv att fortsätta med det? 

**EV:** Ja, jag har sett att det faktiskt har blivit att jag verkligen lär mig om jag får använda det på jobbet. Det måste finnas tid för att få lära sig det på jobbet, för att det är där jag sitter mest och kodar. Så det jag tror det är att jag hade den möjligheten på min förra anställning, att sitta med VIM och sedan finns det alltid nya kommandon att lära sig. Det tror jag är det roligaste, att du alltid kan göra någon sak smidigare, det finns alltid någon lättare väg att göra det på. Det är som att det aldrig tar slut riktigt, allt som man kan lära sig. Men annars är det bara att sitta och nöta det. Jag ser inget annat sätt än att bara nöta och nöta. 

**BT:**  Och hur håller man det roligt, den här nötningen?

**EV:** Ja, i Oni finns det ju någon sorts liten tutorial man kan gå igenom när som helst, inbyggt i editorn. Vill du träna på hur man navigerar mellan rader till exempel, så går de igenom steg för steg och på slutet så ser du: ”Du har klarat den här tutorialen på det här tiden, två sekunder snabbare än förra gången” Och, på så sätt håller man sig, så att säga, i form.

**BT:** I gamification?

**EV:** Ja, det är väldigt smart gjort, tycker jag.

**BT:** Finns det några, kan man jämföra sig med folk också, finns det leaderboards online?

**EV:** Nej, inte vad jag har sett, men det var ju en bra idé. Bara för att se verkligen. Ja, men jag tycker det var en jättebra idé av dem, för att hålla sina VIM-skills fräscha. 

**BT:** En annan editor från samma era är ju Emacs, men den har ju inte alls haft samma genomslag, tycker jag. Som du säger, så kan man ju bara ha VI som en plugin till sitt ordinarie IDE, medan Emacs är en jätte. Det är ju nästan ett operativsystem i sig, som råkar ha en texteditor.

**EV:** Ja, det är väldigt tydliga läger där, när jag har hört andra utvecklare. Då är det antingen Emacs eller VIM och båda tycker att sina uppsättningar är bäst. Men anledningen till att jag tycker att VIM är så användbart är att det finns ju nu i alla Linux-miljöer, så det är ju jättestor chans att du kan hitta, eller att du har tillgång till VIM. Alltså, allt från en lite container, till att du går in på in på en dipper server. Det kommer alltid finnas en stor chans att det finns installerat. Däremot Emacs vet jag inte om det ingår, sådär. 

**BT:** Nu sa du något intressant, för du sa VIM. Vad är skillnaden på VI och VIM? 

**EV:** VIM är ju ”VI Improved”. Så det de har gjort, tror jag, är att de har utökat, jag vet inte om det är att de har utökat med kommandon, men jag tror att det handlar mycket om att göra det mer användarvänligt, tror jag. Så det är väl det för att säga VIM.

**BT:** Just det. Och det är VI eller VIM som brukar finnas när man..

**EV:** Då är det VI.

**BT:** Just det. Nano nämnde du förut också och den är ju tämligen vanligt. Iallafall Ubuntu brukar ha den. De har RedHat och open source-varianten av RedHat, den heter CentOS. De tror jag inte brukar ha Nano per default, så man kan inte lita på att ha dem installerade.

**EV:** Nej. 

**BT:** Men den tycker jag ser väldigt snarlik ut, snarlik Emacs. Så jag undrar om det är någon nedvantad variant – det måste jag nästan kolla upp och lägga i Show notsen, någon länk till det. Jaha, om vi tittar framåt – 2019, finns det något som du ser fram emot, vad tror du om du tittar i din spåkula, vad tror du att vi får se 2019?

### VAD KOMMER SLÅ 2019?
**EV:** Generellt inom utvecklingen? 

**BT:** Ja.

**EV:**  Ja, jag tror verkligen att TypeScript kommer att ta över allt mer. Just det att få de typer och stöd i editor när man skriver Javascript är så otroligt bra att ha, märker jag. Så det tror jag verkligen. Alternativen då till TypeScript är att man använder någonting som Flow som Facebook, tror jag, har tagit fram. För att få hjälp med typer och Javascript. Med de felen man upptäcker redan innan man kompilerar via Visual Code till exempel, sparar så mycket tid för oss utvecklare. Så, jag tror att mer anammar TypeScript i sina project. Det tror jag bara kommer att öka. 

**BT:** Jag läste en väldigt intressant artikel, som jag inte kommer på vem som har skrev den, men den argumenterade för att ha ett typat språk är att få ett helt batteri med enhetstester gratis. Jag tycker om det beskrivningen. För den, visst, det är ju lite mer tankeverksamhet, lite mer verboset, men man får ändå så pass mycket gratis. Jag vet att du sitter med React eller TypeScript i React också?

**EV:** Om jag får välja, så skulle jag välja den kombinationen. Men, om man utgår ifrån det CLI:t som används främst inom React då, Create react app, så har man nu stöd för att skriva sin kod i TypeScript-filer. Men, den kompileras ju inte via TypeScript utan via Babel, så att då kan du skriva i TypeScript, men själva kontrollen av typer kommer inte göras, så då får du ju ha både och. Men, kompileringen via Babel går mycket fortare än TypeScript. Jag tror att det är det många brukar, tycker jag iallafall, tycka är lite jobbigt. 

**BT:** Ja, spännande. TypeScript har ju varit på gång väldigt länge och det är samma sak. Det är lite att man kan dra paralleller med VS-code där det fanns flera konkurrerande implementationer av typad Javascript. Men så vann Microsofts variant och det var väl i samband med Angular 4 eller var det Angular 2 som skrevs om från scratch i TypeScript?

**EV:**Ja, helt i TypeScript. Och det samarbetet där med TypeScript och Microsoft och Angular, som togs fram då av Angular 2 av Google. Det har ju vuxit fram, jag tycker det är jätteintressant. Jag tror att Angular har gjort jättemycket för TypeScript som språk. 

**BT:** TypeScript ska vi hålla ögonen på under 2019.

**EV:** Ja, det är mitt tips. 

**BT:** Tack så mycket för att du ville vara med och prata!

**EV:** Tack själv.

**BT:** Och vi hörs nästa vecka. Ha det fint, hej!