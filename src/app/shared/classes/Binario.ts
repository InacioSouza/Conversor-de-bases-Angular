import { Base } from "../interfaces/Base";
import { DadoConversao } from "../interfaces/DadoConversao";

export class Binario implements Base {


    converter(infos: DadoConversao): string {

        let decimal = parseInt(infos.numero, 2);
        let resultado = decimal.toString(infos.para);

        return resultado;
    }

}