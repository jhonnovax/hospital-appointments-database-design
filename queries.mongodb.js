// What is the total revenue generated in a specific time frame? 
use('hospital');
db.hospital_appointments.aggregate([
	{
		$match: { 
			"status": "completed",
			"date": { 
				$gte: "2023-01-01",
				$lte: "2023-12-31"
			}
		}
	},
	{ 
		$group: { 
			_id: null, 
			totalRevenue: { $sum: "$price" }
		} 
	}
])

// What is the total revenue generated by doctors?
use('hospital');
db.hospital_appointments.aggregate([
	{
		$match: { "status": "completed" } 
	},
	{ 
		$group: { 
			_id: "$doctor.full_name", 
			totalRevenue: { $sum: "$price" }
		} 
	},
	{ 
		$sort: { totalRevenue: -1 } 
	}
])

// What is the average duration of appointments by doctor? 
use('hospital');
db.hospital_appointments.aggregate([
	{ 
		$group: { 
			_id: "$doctor.full_name", 
			avgDuration: { $avg: "$duration" } 
		} 
	},
	{ 
		$sort: { avgDuration: -1 } 
	}
])

// How many appointments by specialty? 
use('hospital');
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

// Who are the doctors with the most appointments?
use('hospital');
db.hospital_appointments.aggregate([
	{ 
		$group: {
			_id: "$doctor.full_name",
			appointmentCount: { $sum: 1 }
		} 
	},
	{ 
		$sort: { appointmentCount: -1 } 
	}
])
