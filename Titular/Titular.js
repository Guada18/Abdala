function Titular(y) {
    let z, v;
    y = y.toLowerCase();
    
    z = y.split(" ");
    z.sort((a, b) => b.length - a.length);
    
    v = z.slice(0, 3);
   
    for( let i = 0; i < v.length; i++ ){
        v[i] = '#' + v[i];
    }
   
    return 'Hashtags: ["' + v[0] + '","' + v[1] + '","' + v[2] + '"]';
}  