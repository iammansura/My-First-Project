function womanCoding() {
  let Name = prompt('What is your  Name?')
  let Email = prompt('What is your e-mail address?')
  let favourite = prompt('what is your favourite programming language?')
  let age = prompt('How old are you?')

  if (age <= 12) {
    alert(
      'Hi👋 ' +
        Name +
        ", We'll " +
        'be ' +
        'in ' +
        ' touch ' +
        'by ' +
        'email, ' +
        'meanwhile ' +
        'have ' +
        'a ' +
        'great ' +
        'day!',
    )
  } else {
    alert(
      'Hi👋 ' +
        Name +
        ', Welcome ' +
        'to ' +
        'SheCodes! ' +
        " We'll " +
        'be ' +
        'in ' +
        ' touch ' +
        'by ' +
        'email, ' +
        'meanwhile ' +
        'have ' +
        'a ' +
        'great ' +
        'day!',
    )
  }
}

let womanINcoding = document.querySelector('button')
womanINcoding.addEventListener('click', womanCoding)
