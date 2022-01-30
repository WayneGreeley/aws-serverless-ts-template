import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
} from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
    
  console.info('eVent received:', event);
  console.info('cOontext received:', context);
  
  const response = {
    statusCode: 200,
    body: JSON.stringify("hello from a lambda function")
  };
 
  console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
  return response;
}
