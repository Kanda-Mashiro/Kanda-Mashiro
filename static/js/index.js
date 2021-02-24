; (function (doc) {
  var action = sessionStorage.getItem('action');
  console.log(action)
  if(!action) {
    doc.getElementsByClassName('J_cat')[0].classList.add('action_cat')
    doc.getElementsByClassName('J_toGit')[0].classList.add('action_target')
    sessionStorage.setItem('action', 1)
  }
})(document);