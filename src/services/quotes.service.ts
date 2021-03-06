import {Quote} from "../data/quotes.interface";

export class QuotesService{
    private favoriteQuotes: Quote[] = [];

    public addQuoteToFavorite(quote:Quote): void{
        this.favoriteQuotes.push(quote);
    }

    public removeQuoteFromFavorites(quote:Quote): void{
        let position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id === quote.id;
        });
        this.favoriteQuotes.splice(position,1);
    }

    public getFavoriteQuote(): Quote[]{
        return this.favoriteQuotes.slice();
    }

 public isFavorite(quote:Quote): boolean{
     return this.favoriteQuotes.findIndex((quoteEl: Quote) => {return quoteEl.id === quote.id;}) >= 0;
     //return this.favoriteQuotes.find((quoteEl: Quote) => {return quoteEl.id === quote.id;}) ;
 }


}