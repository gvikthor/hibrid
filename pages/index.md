---
aktualis: !file aktualis.yml
kerdoivek: !file kerdoivek.yml
---
# ELTE IK Hibrid oktatás felmérése

## Mi a cél?
Az oldal célja, hogy egy űrlapsorozat segítségével felmérjük a hibrid oktatással kapcsolatos visszajelzéseket [anonim](#!/anonim) módon. Az eredmények segítségével remélhetőleg javítani lehet azokat a területeket, amik gyengélkednek ezen oktatási formában, a pozitívumokat pedig kiterjeszthetjük, hogy mindenhol segítsék a tanulmányainkat.
<!-- Github pull test comment -->

## Kérdőívek
A kérdőívek kitöltéséhez jelentkezz be az INF-es azonosítóddal!
<section class="one columns">
{{#aktualis}}
<a href="{{link}}" class="hok-lblue card" target="_blank">
    <strong>{{day}}</strong>
    <p>Ez a legfrissebb kérdőív. Minden nap kikerül egy új űrlap az előző napról.</p>
</a>
{{/aktualis}}
{{#kerdoivek}}
<a href="{{link}}" class="gray card" target="_blank">
    <strong>{{day}}</strong>
</a>
{{/kerdoivek}}
</section>
