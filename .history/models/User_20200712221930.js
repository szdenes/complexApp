let User = (data) => {
    this.dataIncome = data

}
User.prototype.validate = () => {
  if (this.data.username == '') {}
}


User.prototype.register = () => {
    //Step #1: Validate user data
this.validate()
    //Step #2: Only if there are no validation errors then save the user data into a database
}

module.exports = User