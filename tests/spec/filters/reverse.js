describe('Filters: reverse', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    
    var reverse;    
        beforeEach(inject(function($filter){// initialize your filter
            reverse = $filter('reverse',{});
        }));
        
        it('has a reverse filter', inject(function($filter) {
	        expect($filter('reverse')).not.toBeNull();
	    }));
	        
        it('Should reverse a string', function(){  //write tests
            expect(reverse('john')).toBe('nhoj'); //pass
        }); 
});