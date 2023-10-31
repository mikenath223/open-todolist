import add from 'date-fns/add';

const tasks = {
  todo: [
    {
      title: 'Feed the dog',
      details: 'Use wet feed mixture to for the dog’s breakfast',
      dueDate: add(new Date(), {
        hours: 1,
      }),
      participants: [
        {
          email: 'lovekush.tyagi999@gmail.com',
          status: 'unconfirmed',
          _id: {
            $oid: '64abc6f4b3cc5553c16b4c75',
          },
        },
      ],
      extendedBy: '1H',
    },
    {
      title: 'Feed the dog',
      details: 'Use wet feed mixture to for the dog’s breakfast',
      dueDate: add(new Date(), {
        minutes: 1,
      }),
      participants: [
        {
          email: 'lovekush.tyagi999@gmail.com',
          status: 'unconfirmed',
          _id: {
            $oid: '64abc6f4b3cc5553c16b4c75',
          },
        },
        {
          email: 'lovekush.tyagi999@gmail.com',
          status: 'unconfirmed',
          _id: {
            $oid: '64abc6f4b3cc5553c16b4c75',
          },
        },
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
  ],
  inProgress: [
    {
      title: 'Feed the dog',
      details: 'Use wet feed mixture to for the dog’s breakfast',
      dueDate: add(new Date(), {
        hours: 1,
      }),
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
  ],
  completed: [
    {
      title: 'Feed the dog',
      details: 'Use wet feed mixture to for the dog’s breakfast',
      dueDate: add(new Date(), {
        hours: 1,
      }),
      participants: [],
    },
    {
      title: 'Feed the dog',
      details: 'Use wet feed mixture to for the dog’s breakfast',
      dueDate: add(new Date(), {
        hours: 1,
      }),
      participants: [],
    },
  ],
};
export default tasks;
