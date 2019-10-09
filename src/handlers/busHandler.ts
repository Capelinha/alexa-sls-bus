import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model";
import * as moment from 'moment-timezone';
import { get, post } from 'request-promise-native';

export class BusHandler implements RequestHandler {
  public canHandle(handlerInput: HandlerInput): boolean {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest' && request.intent.name === 'BusIntent';
  }

  public async handle(handlerInput: HandlerInput): Promise<Response> {
    const responseBuilder = handlerInput.responseBuilder;

    await post('http://api.olhovivo.sptrans.com.br/v2.1/Login/Autenticar?token=3de5ce998806e0c0750b1434e17454b6490ccf0a595f3884795da34460a7e7b3',  {
      jar: true,
      method: 'POST',
      simple: false,
    });

    const response = await get('http://api.olhovivo.sptrans.com.br/v2.1/Previsao/Parada?codigoParada=360008026',  {
      jar: true,
      method: 'GET',
      simple: false,
    });

    const data = JSON.parse(response);

    if (data.p === null) {
      return responseBuilder
          .speak('Não encontrei nenhum ônibus.')
          .getResponse();
    }

    let text = "Os próximos ônibus são: ";

    for (const bus of data.p.l) {
      if(bus !== data.p.l[0]) {
        text += data.p.l[data.p.l.length - 1] === bus ? ' e ' : ', ';
      }

      const time = bus.vs[0].t.split(':');

      const now = moment().tz('America/Sao_Paulo');
      const next = moment().tz('America/Sao_Paulo').hours(time[0]).minutes(time[1]);

      text += `${bus.c.substr(0,2)} ${bus.c.substr(2,2)} ${bus.c.substr(5,2)} em ${next.diff(now, 'minutes')} minutos`;
    }

    return responseBuilder
          .speak(text + '.')
          .getResponse();
  }   
}
