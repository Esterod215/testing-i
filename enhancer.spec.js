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
    })
})

});