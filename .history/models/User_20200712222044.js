let User = (data) => {
    this.data = data
    this.errors = []

}
User.prototype.validate = () => {
  if (this.data.username == '') {this.errors.push('You must Provide a username.')}
  if (this.data.username == '') {this.errors.push('You must Provide a username.')}

}


User.prototype.register = () => {
    //Step #1: Validate user data
this.validate()
    //Step #2: Only if there are no validation errors then save the user data into a database
}

module.exports = User