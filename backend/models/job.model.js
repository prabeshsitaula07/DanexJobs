// models/job.model.js
module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define('job', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Job;
  };
  