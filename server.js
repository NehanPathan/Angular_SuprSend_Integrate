const express = require("express");
const jsonServer = require('json-server');
const path = require('path');
const { Suprsend, Event } = require('@suprsend/node-sdk');

const supr_client = new Suprsend("3XS8CrMemay76qceSQ4B", "SS.WSS.o0NvKJAmvF7s5Jr1fGEVLuqqeIqZ7BJoPKrFxSGy");

const app = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(middlewares);

// Middleware to handle Suprsend logic before routing to json-server
app.post('/tasks', async (req, res, next) => {
  const task = req.body;

  try {
    const user = supr_client.user.get_instance("nehan26");
    user.add_email("pathannehan28@gmail.com");
    const userSaveResponse = await user.save();
    console.log('User saved response:', userSaveResponse);

    const event = new Event("nehan26", "task_added", { task: task.title });
    const eventResponse = await supr_client.track_event(event);
    console.log('Event tracking response:', eventResponse);

    next(); // Proceed to json-server
  } catch (error) {
    console.error('Error:', error);
    next(); // Proceed to json-server even if Suprsend operations fail
  }
});

app.use('/api', router); // Use /api for json-server routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
