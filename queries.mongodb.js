// What is the total revenue for completed appointments on a specific date? 
use('csis3300');
db.hospital_appointments.aggregate([
	{ $match: { status: "completed" } },
	{ $group: { _id: null, totalRevenue: { $sum: "$price" } } }
])

// What is the average duration of appointments by doctor? 
use('csis3300');
db.hospital_appointments.aggregate([
	{ $group: { _id: "$doctor.last_name", avgDuration: { $avg: "$duration" } } },
	{ $sort: { avgDuration: -1 } }
])

// What is the total number of appointments within a specific date? 
use('csis3300');
db.hospital_appointments.find({ 
	"date": { 
		$gte: "2023-05-01", 
		$lte: "2023-05-31" 
	}
})

// How many appointments by specialty? 
use('csis3300');
db.hospital_appointments.aggregate([
	{ 
		$group: { 
			_id: "$doctor.specialty", 
			appointmentCount: { $sum: 1 } 
		}
	},
	{ 
		$sort: { appointmentCount: -1 } 
	}
])

// How many appointment workloads are there by doctor?
use('csis3300');
db.hospital_appointments.aggregate([
	{ 
		$group: {
			_id: { firstName: "$doctor.first_name", lastName: "$doctor.last_name" },
			appointmentCount: { $sum: 1 }
		} 
	},
	{ 
		$sort: { appointmentCount: -1 } 
	}
])









