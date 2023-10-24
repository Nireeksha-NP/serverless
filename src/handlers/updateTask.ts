import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const id = event.pathParameters?.id;

  if (id) {
    try {
      // Simulate an asynchronous operation (e.g., fetching data from a database)
      const data = await fetchData(id);

      const response = {
        statusCode: 200,
        body: JSON.stringify({ msg: `Task ${id} updated successfully.`, data }),
      };

      callback(null, response);
    } catch (error) {
      const response = {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error' }),
      };

      callback(null, response);
    }
  } else {
    const response = {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid or missing "id" parameter' }),
    };

    callback(null, response);
  }
};

// Simulated asynchronous data fetching function
const fetchData = async (id: string) => {
  // Simulate an async operation (e.g., fetching data from a database)
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Data for Task ${id}`);
    }, 1000);
  });
};
