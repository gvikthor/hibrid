---
l01: !file localisation/01-fo-cim.yml
l02: !file localisation/02-miacel-cim.yml
l03: !file localisation/03-miacel-szoveg.yml
l04: !file localisation/04-kerdoivek-cim.yml
l05: !file localisation/05-kerdoivek-szoveg.yml
aktualis: !file aktualis.yml
kerdoivek: !file kerdoivek.yml
---

{{#l01}}<h1 class="{{lang}} language">{{text}}</h1>{{/l01}}

{{#l02}}<h2 class="{{lang}} language">{{text}}</h2>{{/l02}}
{{#l03}}<p class="{{lang}} language">{{text}}</p>{{/l03}}

{{#l04}}<h2 class="{{lang}} language">{{text}}</h2>{{/l04}}
{{#l05}}<p class="{{lang}} language">{{text}}</p>{{/l05}}

<!-- A yml -> md -> html folyamatban valahol elbaszódnak a linkek, és csak akkor lesz belőlük hivatkozás, ha van a {{text}} blokk előtt egy üres sor, mert akkor közvetlen az md generálja nekik a p-t, amibe kerül, de akkor meg nem lesz lang classuk; szóval inline oldottam meg, nem generált nyelvi elemekkel. Nem hiszem, hogy nagyon harmadik nyelvet vagy további szövegben lévő linkeket hozzá fogunk adni, de erre figyelni kell, ha majd a nyelvválasztást át akarjuk vinni nagy honlapokra, mert nem jó, ha nem lehet a szövegben link. Fyi ez a yml sortörésekre is hatással van. -->
<a href="#!/anonim" class="hungarian language">Hogyan van biztosítva az anonimitás?</a>
<a href="#!/anonim" class="english language">How's anonimity ensured?</a>

<section class="one columns">
{{#aktualis}}
<a href="{{link}}" class="hungarian language {{color}} card" target="_blank">
    <strong >{{hun-day}}</strong>
    <p>{{hun-desc}}</p>
</a>
<a href="{{link}}" class="english language {{color}} card" target="_blank">
    <strong >{{eng-day}}</strong>
    <p>{{eng-desc}}</p>
</a>
{{/aktualis}}
{{#kerdoivek}}
<a href="{{link}}" class="hungarian language {{color}} card" target="_blank">
    <strong>{{hun-day}}</strong>
    <p>{{hun-desc}}</p>
</a>
<a href="{{link}}" class="english language {{color}} card" target="_blank">
    <strong>{{eng-day}}</strong>
    <p>{{eng-desc}}</p>
</a>
{{/kerdoivek}}
</section>