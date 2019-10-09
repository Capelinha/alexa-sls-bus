import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";

export class LaunchRequestHandler implements RequestHandler {
  public canHandle(handlerInput: HandlerInput): boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest' || request.type === 'IntentRequest' && request.intent.name === 'AMAZON.NavigateHomeIntent';
  }

  public handle(handlerInput: HandlerInput): Response {
    const responseBuilder = handlerInput.responseBuilder;

    return responseBuilder.speak("Oi")
    .getResponse();
  }   
}
