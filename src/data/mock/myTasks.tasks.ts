import add from 'date-fns/add';

const tasks = [
  {
    title: 'Feed the dog',
    details: 'Use wet feed mixture to for the dog’s breakfast',
    dueDate: add(new Date(), {
      hours: 1,
    }),
    completed: true,
    participants: [
      {
        email: 'lovekush.tyagi999@gmail.com',
        status: 'unconfirmed',
        _id: {
          $oid: '64abc6f4b3cc5553c16b4c75',
        },
      },
    ],
  },
  {
    title: 'Build the shed',
    details: 'Use wet feed mixture to for the dog’s breakfast',
    dueDate: add(new Date(), {
      hours: 1,
    }),
    completed: false,
    participants: [
      {
        email: 'lovekush.tyagi999@gmail.com',
        status: 'unconfirmed',
        _id: {
          $oid: '64abc6f4b3cc5553c16b4c75',
        },
      },
    ],
  },
  {
    title: 'Feed the dog',
    details: 'Use wet feed mixture to for the dog’s breakfast',
    dueDate: add(new Date(), {
      hours: 1,
    }),
    completed: false,
    participants: [
      {
        email: 'lovekush.tyagi999@gmail.com',
        status: 'unconfirmed',
        _id: {
          $oid: '64abc6f4b3cc5553c16b4c75',
        },
      },
    ],
  },
];

export default tasks;
