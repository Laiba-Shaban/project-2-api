require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient(); // This works flawlessly in version 6!

const express = require('express');
const app = express();

app.use(express.json());

// 1. GET ROUTE
app.get('/api/welcome', (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to the DecodeLabs Backend Team!",
        project: "REST API Fundamentals",
        isStateless: true
    });
});

// 2. POST ROUTE
app.post('/api/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        status: "ok",
        message: "Data received successfully!",
        yourPayload: receivedData
    });
});
// 3. UPDATE ROUTE (Corrected)
// app.put('/api/users/:id', async (req, res) => {
//     const { id } = req.params;
//     const { email, name } = req.body;
    
//     try {
//         const updatedUser = await prisma.user.update({
//             where: { id: Number(id) }, // Ensuring it is a number
//             data: { email, name },
//         });
//         res.json(updatedUser);
//     } catch (error) {
//         console.error(error); // This will show the real error in your terminal
//         res.status(500).json({ error: "Update failed. Does the ID exist?" });
//     }
// });

// 4. DELETE ROUTE (Corrected)
// app.delete('/api/users/:id', async (req, res) => {
//     const { id } = req.params; // This is a string
    
//     try {
//         await prisma.user.delete({
//             where: { id: parseInt(id) }, // Convert string to number
//         });
//         res.json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ error: "User not found or delete failed" });
//     }
// });



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running perfectly on http://localhost:${PORT}`);
});