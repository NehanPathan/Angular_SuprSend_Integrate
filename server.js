const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
const { Suprsend, Event } = require('@suprsend/node-sdk');
const bodyParser = require('body-parser');

const supr_client = new Suprsend("j0gNn0uaK0gR56rcdHWq", "SS.WSS.J6gsAr6dILkKreRdN1zIIRN6BN07sae0fWXbKATo");
server.use(cors());
server.use(bodyParser.json());
server.use(middlewares);

server.post('/tasks', async (req, res, next) => {
  const task = req.body;
  console.log('Received task:', task);

  try {
    // Send notification via SuprSend
    const user = supr_client.user.get_instance("nehan26");
    user.add_email("pathannehan26@gmail.com");
    const saveResponse = await user.save();
    console.log('User saved response:', saveResponse);

    const event = new Event("nehan31", "Angular_task", { task: task.title });
    const eventResponse = await supr_client.track_event(event);
    console.log('Event tracking response:', eventResponse);

    // Proceed to save the task in db.json
    router.db.get('tasks').push(task).write();
    res.status(201).send(task);  // Send the response back to the client
  } catch (error) {
    console.error('Error handling SuprSend operations:', error);
    res.status(500).send({ error: 'Failed to process the request' });  // Send an error response
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
