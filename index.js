function receivesAFunction(deceive) {
    deceive();
  }

function returnsANamedFunction() {
    return function receivesAFunction(){
        return "true"
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Yes"
    }
}