/* Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false. */

function booWho(bool) {
    if (typeof(bool) !== "boolean") {
        return false                            
    }
    return true;
  }
  
  booWho(null);

  console.log(
    // booWho(true)
    // booWho(false)
    // booWho([].slice)
    // booWho({ "a": 1 })
    // booWho("a")

  );

  console.log(typeof(true))