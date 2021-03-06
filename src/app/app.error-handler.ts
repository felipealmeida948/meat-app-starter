import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler {
  static handleError(error: Response | any){
    let errorMenssage: string

    if(error instanceof Response){
      errorMenssage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    } else {
      errorMenssage = error.toString()
    }

    console.log(errorMenssage)
    return Observable.throw(errorMenssage)
  }
}
