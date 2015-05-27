describe('palindrome', function(){
  // it('checks if aa is a palindrome', function(){
  //   expect(palindrome('aa')).to.equal(true);
  // });
  //
  // it('checks if beaeb is a palindrome', function(){
  //   expect(palindrome('beaeb')).to.equal(true);
  // });
  //
  // it('checks if barb is a palindrome', function(){
  //   expect(palindrome('barb')).to.equal(false);
  // });
  //
  // it('checks if 120021 is a palindrome', function(){
  //   expect(palindrome('120021')).to.equal(true);
  // });
  //
  // it('checks if Hello olleH is a palindrome', function(){
  //   expect(palindrome('Hello olleH')).to.equal(true);
  // });

  it('removes puncuation from input phras', function(){
    expect(palindrome('Hello olleH!')).to.equal(true);
  });


});
