import { Animal } from "./animal.types";

export namespace Api {
    export namespace Animals {
        export namespace Req {

        }

        export namespace Res {
            export interface Get extends Animal {}
        }
    }
}