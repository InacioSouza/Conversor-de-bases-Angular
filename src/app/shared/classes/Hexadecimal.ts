import { Base } from "../interfaces/Base";
import { DadoConversao } from "../interfaces/DadoConversao";

export class Hexadecimal implements Base {
    converter(infos: DadoConversao): string {

        let decimal = parseInt(infos.numero, 16);
        let resultado = decimal.toString(infos.para);

        return resultado;
    }

}