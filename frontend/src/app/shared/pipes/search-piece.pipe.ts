import { Pipe, PipeTransform } from '@angular/core';
import { Piece } from 'src/app/core/models/piece';

@Pipe({
  name: 'searchPiece'
})
export class SearchPiecePipe implements PipeTransform {

  transform(pieces: Piece[], searchValue: string): any {
    if (!pieces || !searchValue) {
      return pieces
    }
    return pieces.filter(listPieces =>
      listPieces.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
      listPieces.tipo.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
