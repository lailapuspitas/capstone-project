const { prisma } = require("../config/prisma");

const getAllAppointment = async () => {
  try {
    const appointments = await prisma.appointment.findMany();
    return appointments;
  } catch (error) {
    console.log(error);
  }
};

const createAppointment = async (appointment) => {
  try {
    const mappedAppointment = {
      data: {
        name: appointment.name,
        email: appointment.email,
        date: appointment.date,
        time: appointment.time,
        categories: appointment.categories,
        complaint: appointment.complaint,
      },
    };

    const createdAppointment = await prisma.appointment.create(
      mappedAppointment
    );

    return createdAppointment;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create appointment");
  }
};

module.exports = { getAllAppointment, createAppointment };
