var count = 99;

function lyrics() {
    while (count >= 1) {
        if (count > 1 ) {
            count_new = count-1
            console.log(count + " bottles of beer on the wall, "+ 
                    count +" bottles of beer.Take one down and pass it around, " +
                     count_new +" bottles of beer on the wall.")
            
        }
        else if (count==1)  {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
        }
    count--;
    }
}

lyrics();
