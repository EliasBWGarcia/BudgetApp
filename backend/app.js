import express from "express";

const app = express();

// ----------------------------GET---------------------------------
app.get("/api/dashboard", (req, res) => {
    res.json({ message: "dashboard test" });
});

app.get("/api/budgets/current", (req, res) => {
    res.json({ message: "" });
});

app.get("/api/expenses", (req, res) => {
    res.json({ message: "" });
});

app.get("/api/transactions", (req, res) => {
    res.json({ message: "" });
});

app.get("/api/savings/goals", (req, res) => {
    res.json({ message: "" });
});

app.get("/api/savings/transfers", (req, res) => {
    res.json({ message: "" });
});

app.get("/api/notifications", (req, res) => {
    res.json({ message: "" });
});

// ----------------------------POST---------------------------------
app.post("/api/expenses", (req, res) => {
    res.json({ message: "" });
});

app.post("/api/simulator/purchases", (req, res) => {
    res.json({ message: "" });
});

app.post("/api/savings/goals", (req, res) => {
    res.json({ message: "" });
});

app.post("/api/savings/transfers", (req, res) => {
    res.json({ message: "" });
});

// ----------------------------PUT---------------------------------
app.put("/api/budgets/settings", (req, res) => {
    res.json({ message: "" });
});

app.put("/api/expenses/:id", (req, res) => {
    res.json({ message: "" });
});

// ----------------------------PATCH---------------------------------
app.patch("/api/savings/goals/:id", (req, res) => {
    res.json({ message: "" });
});

app.patch("/api/notifications/:id/read", (req, res) => {
    res.json({ message: "" });
});

// ----------------------------DELETE---------------------------------
app.delete("/api/expenses/:id", (req, res) => {
    res.json({ message: "" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveren kører på`, PORT);
});
