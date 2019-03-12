const { repair, success, fail} = require('./enhancer.js')

describe('enhancer.js', () =>{

describe('repair',() => {

    it('should return durability 100',()=>{
let item = {name:'',type:'',durability:20,enhancement:0}
    const actual = repair(item);
expect(actual.durability).toBe(100)
});
});

describe ('success', ()=>{
  
it('should increase enhancement by 1',()=>{
 let item = {name:'',type:'',durability:0,enhancement:0};
 const actual = success(item);
expect(actual.enhancement).toBe(1)
})

it('should not increase enhancement if enhancement is 20',()=>{
let item = {name:'',type:'',durability:0,enhancement:20};
 const actual = success(item);
expect(actual.enhancement).toBe(20)
})


});

describe('fail', ()=>{
    it('should subtract 5 from durability if enhancemnet is less than 15', ()=>{
    
        let item = {name:'',type:'',durability:18,enhancement:14};
        const actual = fail(item);
        expect(actual.durability).toBe(13)
        //tests if durability will not decrease below 0
        let newItem = {name:'',type:'',durability:3,enhancement:14};
        const newTest = fail(newItem);
        expect(newTest.durability).toBe(0);
        expect(fail(newItem.durability = 0)).toBe(0);

    });

    it('should subtract 10 from durability if enhancement is greater than or equal to 15',()=>{
        let item = {name:'',type:'',durability:18,enhancement:15};
        const actual = fail(item);
        expect(actual.durability).toBe(8)
        //tests that durability will not decrease below 0
        let item2 = {name:'',type:'',durability:7,enhancement:15};
        expect(fail(item2).durability).toBe(0);
    })

    it('should lower enhancemnet by 1 if enhancement is greater than 16',()=>{
        let item = {name:'',type:'',durability:18,enhancement:16};
        const actual = fail(item);
        expect(actual.enhancement).toBe(16)
        expect(actual.durability).toBe(8);
    })

})

});