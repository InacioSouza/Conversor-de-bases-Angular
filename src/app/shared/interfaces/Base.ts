import { DadoConversao } from "./DadoConversao";

export interface Base {
    converter(infos: DadoConversao): string;
}