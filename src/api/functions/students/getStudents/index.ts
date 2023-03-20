import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import { APIGatewayProxyEvent } from "aws-lambda";

const lambdaHandler = async (event: APIGatewayProxyEvent) => {
  return event;
};

export const handler = middy(lambdaHandler).use([jsonBodyParser()]);
