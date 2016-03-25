describe('Filters: reverse', function(){ //describe your object type
    beforeEach(module('MyApp')); //load module
    
    var reverse;    
        beforeEach(inject(function($filter){// initialize your filter
            reverse = $filter('reverse',{});
        }));
        
        it('Should reverse a string', function(){  //write tests
            expect(reverse('john')).toBe('nhoj'); //pass
        }); 
});