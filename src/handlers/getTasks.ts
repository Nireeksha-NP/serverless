import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ data: [] }),
  };

  callback(null, response);
};
