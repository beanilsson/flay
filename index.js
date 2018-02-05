/**
 * Log objects easily
 *
 */
module.exports = {
    flay: function(data) {
        if (data === undefined){
            console.log('Error, no parameter provided.');
            return;
        }
        if (typeof data === 'object'){
            console.log(JSON.stringify(data));
            return;
        }else if (typeof data !== 'object'){
            console.log(data);
            return;
        }
    }
};
