import { Base } from "../interfaces/Base";
import { DadoConversao } from "../interfaces/DadoConversao";

export class Decimal implements Base {

    converter(infos: DadoConversao): string {

        let decimal = parseInt(infos.numero, 10);
        let resultado = decimal.toString(infos.para);

        return resultado;
    }

}