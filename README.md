# Budget App

Et full-stack eksamensprojekt, hvor jeg udvikler en webapplikation til personlig økonomi og budgetstyring.

Formålet med appen er at give brugeren et overblik over sin økonomi og hjælpe med at holde et budget fra lønningsdag til lønningsdag.

Appens vigtigste funktion bliver at vise, hvor mange penge brugeren kan bruge i dag, uden at overskride sit budget. Beløbet beregnes ud fra kontosaldo, kommende faste udgifter, opsparing og antal dage til næste løn.

## Teknologier

- **Frontend:** Svelte og Vite
- **Backend:** Node.js og Express
- **Database:** Firebase Firestore
- **Authentication:** Firebase Authentication 
- **Hosting:** Vercel 

Applikationen udvikles som en responsiv webapp med mulighed for PWA understøttelse.

## Funktionalitet

Følgende funktioner er planlagt i en brainstorm lavet i figma:

- Brugerregistrering og login.
- Opsætning af budget med indkomst, lønningsdag og faste udgifter.
- Dashboard med dagens rådighedsbeløb, kontosaldo og seneste transaktioner.
- Simuleret bankkonto, hvor brugeren kan registrere fiktive køb.
- Automatisk justering af budgettet ved overforbrug.
- Opsparingsmål og virtuel opsparing.
- Notifikationer ved budgetoverskridelser.

I første version anvendes simulerede bankdata som demo til eksamen. Applikationen skal senere kunne udvides med integration til rigtige bankkonti, hvis jeg kan finde et eksternt api at bruge til det. 

## Projektstruktur

```text
budget-app/
├── frontend/   # Svelte
├── backend/    # Node.js og Express
└── README.md
```

## Status

Projektet er under udvikling.

Indtil videre er følgende lavet:

- Svelte-projektet er oprettet med Vite.
- Express er installeret
- API-endpoints er skrevet ind i `app.js`. Det er dog kun et udkast, og kan sagtens ende med at ændre sig.

## Næste skridt

1. Få Express-serveren op at køre.
2. Etablere kommunikation mellem Svelte og Express.
3. Opsætte Firebase Firestore og Authentication.
4. Implementere den simulerede bankkonto.
5. Udvikle budgetberegningerne og frontend.

README filen opdateres løbende, efterhånden som projektet udvikles.