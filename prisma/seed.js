const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create user
  const adminUser = await prisma.user.create({
    data: {
      clerkId: 'admin1',
      email: 'admin1@example.com',
    },
  });

  // Create patient
  const patient = await prisma.patient.create({
    data: {
      user_id: adminUser.user_id,
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: new Date('1990-01-01'),
      gender: 'Male',
      contact_number: '1234567890',
      address: '123 Main St',
    },
  });

  // Create doctor
  const doctor = await prisma.doctor.create({
    data: {
      user_id: adminUser.user_id,
      first_name: 'Alice',
      last_name: 'Smith',
      specialization: 'Cardiology',
      contact_number: '0987654321',
    },
  });

  // Create appointment
  const appointment = await prisma.appointment.create({
    data: {
      patient_id: patient.patient_id,
      doctor_id: doctor.doctor_id,
      appointment_date: new Date('2024-07-15T10:00:00Z'),
      status: 'scheduled',
    },
  });

  // Create treatment
  const treatment = await prisma.treatment.create({
    data: {
      appointment_id: appointment.appointment_id,
      treatment_description: 'Routine check-up',
      treatment_date: new Date('2024-07-15T11:00:00Z'),
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
