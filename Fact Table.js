const hospital_appointments =
{
	"date": "2024-05-18", // Between 2022-01-01 and 2024-12-31
	"status": "cancelled", // Possible options: pending, cancelled, completed
	"price": 423.73, // Random number between 60 and 300
	"duration": 15, // Random number between 15 and 120 minutes
	"doctor": {
		"full_name": "Dr. John Doe", // Possible options: Dr. John Doe, Dr. Sarah Smith, Dr. Emily Taylor, Dr. Michael Brown, Dr. Laura Davis, Dr. David Wilson, Dr. Karen Lee, Dr. James Miller, Dr. Rachel Evans, Dr. Brian Clark
		"specialty": "Cardiology", // Possible options: Cardiology, Dermatology, Neurology, Orthopedics, Pediatrics
		"license_number": 318601,
		"status": "active" // Possible options: active, onleave
	},
	"patient": {
		"full_name": "Katrina Dalton",
		"birth_date": "1984-06-03", // Between 1960-01-01 and 2024-11-30
		"gender": "female", // Possible options: male, female
		"email": "piercemichelle@example.com",
		"phone": "(962)531-5642x792"
	},
	"patient_reason": {
		"condition": "Migraine", // Possible options: High blood pressure, Back pain, Diabetes, Asthma, Migraine
		"diagnosis": "Type 2 Diabetes", // Possible options: Hypertension, Sciatica, Type 2 Diabetes, Chronic Asthma, Recurrent Migraine
		"medication": "Salbutamol" // Possible options: Metformin, Ibuprofen, Amlodipine, Salbutamol, Topiramate
	},
	"hospital": {
		"name": "Hampton, Collins and Garcia Hospital",
		"province": "Manitoba", // Possible options: Alberta, British Columbia, Manitoba, Ontario, Quebec
		"city": "Halifax", // Possible options: Vancouver, Toronto, Montreal, Calgary, Winnipeg, Edmonton, Halifax
		"address": "4153 Maria Cliff\nKaitlintown, PW 39166"
	},
	"device": {
		"device_type": "Desktop", // Possible options: Smartphone, Tablet, Desktop
		"os": "iOS", // Possible options: iOS, Android, Windows, macOS
		"ip": "217.129.6.240"
	}
}