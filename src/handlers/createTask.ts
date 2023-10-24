import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  try {
    const data = JSON.parse(event.body || '');
    const response = {
      statusCode: 201,
      body: JSON.stringify({
        msg: 'Task was created successfully..',
        data: data,
      }),
    };

    callback(null, response);
  } catch (error) {
    console.error('Error:', error);
    callback(new Error('An error occurred'));
  }
};
