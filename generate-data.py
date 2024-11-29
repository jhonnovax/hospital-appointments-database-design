import json
from faker import Faker
import random

# Initialize faker
fake = Faker()

# Define specialty and status options
specialties = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology']
statuses = ['active', 'onleave']
appointment_statuses = ['completed', 'cancelled', 'pending']
genders = ['male', 'female', 'non-binary']
conditions = ['High blood pressure', 'Back pain', 'Diabetes', 'Asthma', 'Migraine']
diagnoses = ['Hypertension', 'Sciatica', 'Type 2 Diabetes', 'Chronic Asthma', 'Recurrent Migraine']
medications = ['Metformin', 'Ibuprofen', 'Amlodipine', 'Salbutamol', 'Topiramate']
device_types = ['Smartphone', 'Tablet', 'Desktop']
os_types = ['iOS', 'Android', 'Windows', 'macOS']
provinces = ['British Columbia', 'Ontario', 'Quebec', 'Alberta', 'Manitoba']
cities = ['Vancouver', 'Toronto', 'Montreal', 'Calgary', 'Winnipeg', 'Edmonton', 'Halifax']

# Generate data
data = []
for i in range(1, 1001):
    doctor = {
        'first_name': f'Dr. {fake.first_name()}',
        'last_name': fake.last_name(),
        'specialty': random.choice(specialties),
        'license_number': fake.unique.random_int(100000, 999999),
        'status': random.choice(statuses)
    }
    patient = {
        'first_name': fake.first_name(),
        'last_name': fake.last_name(),
        'birth_date': fake.date_of_birth(minimum_age=0, maximum_age=90).isoformat(),
        'gender': random.choice(genders),
        'email': fake.unique.email(),
        'phone': fake.phone_number()
    }
    patient_reason = {
        'condition': random.choice(conditions),
        'diagnosis': random.choice(diagnoses),
        'medication': random.choice(medications)
    }
    hospital = {
        'name': fake.company() + ' Hospital',
        'province': random.choice(provinces),
        'city': random.choice(cities),
        'address': fake.address()
    }
    device = {
        'device_type': random.choice(device_types),
        'os': random.choice(os_types),
        'ip': fake.ipv4()
    }
    record = {
        'doctor': doctor,
        'patient': patient,
        'patient_reason': patient_reason,
        'hospital': hospital,
        'device': device,
        'date': fake.date_this_year().isoformat(),
        'status': random.choice(appointment_statuses),
        'price': round(random.uniform(50, 500), 2),
        'duration': random.randint(15, 120)
    }
    data.append(record)

# Save to a JSON file
with open('hospital_appointments.json', 'w') as f:
    json.dump(data, f, indent=4)

print("1,000 records generated and saved to 'hospital_appointments.json'.")
