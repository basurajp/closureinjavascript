// Private Variables:
// Implement a function that creates an object with a private variable. Provide methods to access and modify the private variable.

function personname(name) {
  let privateNanme = name;
  return {
    getname: function () {
      return privateNanme;
    },
    setName: function (newName) {
      return (privateNanme = newName);
    },
  };
}


let findPrivateName = personname('basuraj')

console.log(findPrivateName.getname())
console.log(findPrivateName.setName('pooja'))