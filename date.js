//module.exports.getDate= function(){ we can skip module
exports.getDate= function(){

const today = new Date();

const options = {
    weekday:"long",
    day:"numeric",
    month:"long"
};

return today.toLocaleDateString("en-US",options);
}

//to get only day
module.exports.getDay= function(){
    const today = new Date();
    
    const options = {
        weekday:"long"
       
    };
    
    return today.toLocaleDateString("en-US",options);
    }
