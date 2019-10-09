import { ErrorHandler, HandlerInput } from "ask-sdk";
import { Response } from "ask-sdk-model";

export class CustomErrorHandler implements ErrorHandler {
  public canHandle(handlerInput: HandlerInput): boolean {
    return true;
  }

  public handle(handlerInput: HandlerInput, error: Error): Response {
    const request = handlerInput.requestEnvelope.request;

    return handlerInput.responseBuilder
        .speak("Erro")
        .getResponse();
  }   
}