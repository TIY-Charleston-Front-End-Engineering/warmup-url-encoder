//-----------------------------------------
// encodeURL()
//   URLs can only be sent using an ASCII character set
//   When formatting a URL, certain characters like spaces, quote marks 
//   and parentheses must be replaced with a '%' and two letters/numbers
//   
//   For example: the string : 'how are you' 
//   would be URL encoded to : 'how%20are%20you'
// 
//   Take a string and build a URL encoder for it

//
//   %20 - space
//   %21 - !
//   %22 - "
//   %24 - $
//   %27 - '
//
//------------------------------------------

var encodeURL = function(){


}

var encodedURL_1 = encodeURL('this is great')
console.assert(url1 === 'this%20is%20great')

var encodedURL_2 = encodeURL('she said "there is no need for violence!"')
console.assert(url2 === 'she%20said%20%22there%20is%20no%20need%20for%20violence%21%22')

var encodedURL_3 = encodeURL("i'm all about the $")
console.assert(url3 === "i%27m%20all%20about%20the%20%24")



// decodeURL()
// finish early? build a decodeURL function!
// var decodeURL('i%27m%20all%20about%20the%20%24')
// console.assert(url3 === "i'm all about the $")

