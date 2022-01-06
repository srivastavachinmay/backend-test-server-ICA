const User = require("../Models/User");

function handleSubmit(req, res) {
  // const {
  //   cciName,
  //   dateOfRegisteration,
  //   contactPerson,
  //   designation,
  //   address,
  //   pincode,
  //   state,
  //   district,
  //   phoneNumber,
  //   mobileNumber,
  //   fax,
  //   email,
  //   registerationNumber,
  //   licenseIssueDate,
  //   licenseValidFrom,
  //   licecnseValidTo,
  // } = req.body;

  // await User.sequelize.query(
  //   `INSERT INTO User (cciName,
  //   dateOfRegisteration,
  //   contactPerson,
  //   designation,
  //   address,
  //   pincode,
  //   state,
  //   district,
  //   phoneNumber,
  //   mobileNumber,
  //   fax,
  //   email,
  //   registerationNumber,
  //   licenseIssueDate,
  //   licenseValidFrom,
  //   licecnseValidTo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  //   {
  //     replacements: [
  //       cciName,
  //       dateOfRegisteration,
  //       contactPerson,
  //       designation,
  //       address,
  //       pincode,
  //       state,
  //       district,
  //       phoneNumber,
  //       mobileNumber,
  //       fax,
  //       email,
  //       registerationNumber,
  //       licenseIssueDate,
  //       licenseValidFrom,
  //       licecnseValidTo,
  //     ],
  //   }
  // );
  console.log(JSON.stringify(req.body));
  User.create(req.body).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = { handleSubmit };
