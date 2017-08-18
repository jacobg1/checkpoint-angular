(function () {
  angular.module('musingsApp', [])
  .controller('musingsController', ['musings', musingsController])
  .factory('musings', [musingsService])

  function musingsService () {
    const musings = [
      {title: 'test1', content: 'test test', author: 'mee'},
      {title: 'test2', content: 'test test', author: 'me'},
      {title: 'test3', content: 'test test', author: 'meee'}
    ]
    return {
      all: all,
      create: create,
      remove: remove
    }
    function all () {
      return musings
    }
    function create (musing) {
      musings.push(musing)
    }
    function remove (index) {
      musings.splice(index, 1)
    }
  }
  function musingsController (musings) {
    this.musings = musings.all()
    this.newMusing = {
      title: '',
      content: '',
      author: ''
    }

    this.createMusing = function () {
      musings.create(this.newMusing)
    }
    this.removeMusing = function (index) {
      musings.remove(index)
    }
  }
})()
