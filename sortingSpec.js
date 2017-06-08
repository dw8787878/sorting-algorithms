describe("bubbleSort", function() {


	it("is a function", function(){
		expect(typeof bubbleSort).toEqual("function");
	});

  it("sorts an empty array", function(){
		expect( bubbleSort([]) ).toEqual ([]);
	});

  it("returns a sorted array", function(){

    var myArr = [34, 452, 32, 55, 3, 23, 7];
		expect( bubbleSort(myArr)).toEqual([ 3, 7, 23, 32, 34, 55, 452 ]);
	});


});

describe("mergeSort", function() {

  it("is a function", function(){
		expect(typeof mergeSort).toEqual("function");
	});

	it("sorts an empty array", function(){
		expect( mergeSort([]) ).toEqual ([]);
	});

  it("returns a sorted array", function(){

    var myArr = [34, 452, 32, 55, 3, 23, 7];
		expect( mergeSort(myArr)).toEqual([ 3, 7, 23, 32, 34, 55, 452 ]);
	});


});
