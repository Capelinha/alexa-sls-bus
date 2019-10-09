import { SkillBuilders } from "ask-sdk";
import { AmazonHelpIntentHandler } from './handlers/amazonHelpIntentHandler';
import { AmazonStopIntentHandler } from './handlers/amazonStopIntentHandler';
import { BusHandler } from './handlers/busHandler';
import { CustomErrorHandler } from "./handlers/customErrorHandler";
import { LaunchRequestHandler } from "./handlers/launchRequestHandler";
import { SessionEndedHandler } from "./handlers/sessionEndedHandler";

 export const handler = SkillBuilders.standard()
  .addRequestHandlers(
      new SessionEndedHandler(),
      new AmazonStopIntentHandler(),
      new AmazonHelpIntentHandler(),
      new LaunchRequestHandler(),
      new BusHandler()
  )
  .addErrorHandlers(new CustomErrorHandler())
  .lambda();
