describe('ox-toggle-toolbar-left', function() {
  var element, $scope, isolate;
  beforeEach(module('oxford.directives.toolbar.left.toggle'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();

    //save a reference to the element
    element = '<ox-toggle-toolbar-left></ox-toggle-toolbar-left>';
    //compile the element and pass in a new rootscope into the link function
    element = $compile(element)($scope);
    //digest the scope to register the element
    $scope.$digest();
  }));
  it('Should exist', function() {
    expect(element).to.be.an(Object);
  });
  it('Should toggle class on body when opened', function() {
    var body = angular.element(document.querySelector('body'))
    angular.element(element).triggerHandler('click')
    expect(body.hasClass( 'show-toolbar-left' ) ).to.be(true);
    angular.element(element).triggerHandler('click')
    expect(body.hasClass( 'show-toolbar-left' ) ).to.be(false);
  });
  it('Should toggle have a class toggle-toolbar-left', function() {
    var el = angular.element(element);
    expect( el.hasClass( 'toggle-toolbar-left' ) ).to.be(true);
  });
});