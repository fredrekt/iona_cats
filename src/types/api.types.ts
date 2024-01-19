import { Animal, Breed } from "./animal.types";

export namespace Api {
    export namespace Animals {
        export namespace Req {

        }

        export namespace Res {
            export interface GetAnimal extends Animal {}
            export interface GetBreed extends Breed {}
        }
    }
}