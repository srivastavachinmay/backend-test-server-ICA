const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    cciName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfRegisteration: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registerationNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    licenseIssueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    licenseValidFrom: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    licenseValidTo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = User;
