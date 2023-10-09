'use strict';

console.log('🌱🌱🌱 seeding database! 🌱🌱🌱');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	const event1 = await prisma.event.upsert({
		where: { name: 'Hidden Falls Adventure Park' },
		update: {},
		create: {
			name: 'Hidden Falls Adventure Park',
			description:
				'2023 CAMPSPOT AWARDS WINNER: Best Campgrounds for Weekenders! If you enjoy off-roading in a dirtbike, ATV/UTV, or full-size vehicle, then you will love camping at Hidden Falls Adventure Park! Offering cabins, RV, and primitive tent sites, multi-day passes for riding: for every night that you camp in the park, you will be charged riding fees for the day before and the day after. These fees apply to both the driver and passenger and range from $15-$55 depending on stay. The price is well worth it with over 2,000 acres of off-road perfection! If you need to rent an off-road vehicle, Hill Country Adventure Rentals is recommended, as Hidden Falls does not provide rentals. The nearest gas station is 7 miles from the park. Onsite you will find bathrooms, showers, and a general store. Gear up and head out to Hidden Falls Adventure Park!',
			address: '7030 E FM 1431, Marble Falls, TX',
			lat: 30.596808198486336,
			lng: -98.16349661403656,
			isPublic: true
		}
	});

	const event2 = await prisma.event.upsert({
		where: { name: 'River Camp RV' },
		update: {},
		create: {
			name: 'River Camp RV',
			description:
				'Rivercamp RV is a new and quiet place to stay while you visit beautiful Broken Bow or Hochatown, Oklahoma. Enjoy 17 acres of hardwoods, surrounded by Weyerhaevent pines. Have a day of rest or rent a kayak. River Camp is constantly improving and is ready to make your visit a lasting memory.',
			address: '4213 Craig Road, Broken Bow, OK',
			lat: 33.9982284110287,
			lng: -94.66650836472807,
			isPublic: true
		}
	});

	const event3 = await prisma.event.upsert({
		where: { name: "Heaven's Gate RV Park and Retreat" },
		update: {},
		create: {
			name: "Heaven's Gate RV Park and Retreat",
			description:
				"Heaven's Gate RV Park and Retreat offers a beautiful remote destination in Muse, OK. Nestled in the stunning Ouachita Mountains, National Forest and adjacent to the ever-changing Billy Creek. Heavens Gate offers 13 campsites with electricity and water, plus three creekside primitive sites. Horse pens are available for each campsite. Equestrians, hikers, and ATV riders will love the countless diversified trails. No matter which trail you choose or what level rider you are, there is something for everyone with unlimited panoramic views, unusual rock formations, and always the perfect photo opportunity. Dip your toes in the aqua-colored water of Billy Creek or dive into the refreshing Blue Hole after a day on the trails. Come explore the peace and beauty of the Ouachita Mountains at Heaven's Gate RV Park and Retreat!",
			address: 'P.O. Box 104 58076 Billy Creek Road, Muse, OK',
			lat: 34.680729482156956,
			lng: -94.7374026989441,
			isPublic: true
		}
	});

	const event4 = await prisma.event.upsert({
		where: { name: 'Four Creeks Ranch Campground' },
		update: {},
		create: {
			name: 'Four Creeks Ranch Campground',
			description:
				"Take on new adventures at Four Creeks Ranch Campground. Located in Ellington, Missouri - There is no limit on activities. From ATVs to Horseback Riding you're sure to make memories to last a lifetime.",
			address: '',
			lat: 37.253825384719875,
			lng: -90.92489538020894,
			isPublic: true
		}
	});

	const event5 = await prisma.event.upsert({
		where: { name: 'Black River Wine House & RV Retreat' },
		update: {},
		create: {
			name: 'Black River Wine House & RV Retreat',
			description:
				"Nestled in the majestic heart of the hills, youll find the perfect place to meet friends, listen to live music, and feel the breeze as you sip your many choices of Missouri wine and craft beer selections. This perfect backdrop allows you to sit back and unwind, taking in the beautiful views of this gorgeous countryside. You'll hear easy listening, acoustic varieties of live music, provided on Saturday and Sunday afternoons for your pleasure. Make Black River your next getaway destination!",
			address: '50129 Highway 49, Annapolis, MO',
			lat: 37.38542640589114,
			lng: -90.69042229482524,
			isPublic: true
		}
	});

	const event6 = await prisma.event.upsert({
		where: { name: 'Otahki Lake Cabins & Campground' },
		update: {},
		create: {
			name: 'Otahki Lake Cabins & Campground',
			description:
				"2023 CAMPSPOT AWARDS WINNER: Best in America! If you're looking for the perfect family-friendly getaway, then look no further than Otahki Lake Cabins & Campground! Located in the heart of the Missouri Ozarks, Otahki Lake is just a short drive away from St. Louis, MO(2hrs) and Memphis, TN (3hrs). This 1200-acre park features a 23-acre lake and 2 miles of river frontage, 15 Deluxe Cabins w/hot tubs, 42 Full-hookup RV Sites, 4 Covered Wagons, 8 Glamping Tents, 8 Primitive Cabins, and 2 tiny Sunset Cabins. Rent an E-bike or Golf cart and ride the over 8 miles of gravel roads. Kayak or canoe on the lake or river, you can also enjoy floats and rafting trips ranging from 1 mile to 10 miles on the picturesque St. Francois River. Relax on the river gravel bar or at the lake's swim beach. Join Otahki Lake Cabins & Campground for one of the many themed weekends and make the most of your family camping trip! Book your spot today!",
			address: '1224 Wayne 318, Patterson, MO',
			lat: 37.2574182929782,
			lng: -90.48693024660228,
			isPublic: true
		}
	});
	const event7 = await prisma.event.upsert({
		where: { name: 'Bill Monroe Music Park and Campground' },
		update: {},
		create: {
			name: 'Bill Monroe Music Park and Campground',
			description:
				"Get outside, disconnect the phones and reconnect with nature at Bill Monroe's Music Park and Campground. Sit by the crackling fire under a star-filled sky with the sight and sounds of nature filling your ears. Known for some of the best bluegrass festivals in the country, the history Bill Monroe Music Park & Campground is also one of the largest campgrounds in southern Indiana. Whether you're an avid hiker or a relaxed fisher, there is something to do at Bill Monroe!",
			address: '5163 N State Road 135, Morgantown, IN',
			lat: 39.270591790820205,
			lng: -86.24874762568597,
			isPublic: true
		}
	});

	const event8 = await prisma.event.upsert({
		where: { name: 'Off The Hook Campground' },
		update: {},
		create: {
			name: 'Off The Hook Campground',
			description:
				'You are now Off The Hook! Sites with full hook-ups and access to great fishing & swimming during your stay, this relaxed atmosphere for family and friends is guaranteed enjoyment!',
			address: '11760 State Route 122, Camden, OH',
			lat: 39.611545498984995,
			lng: -84.50988951229904,
			isPublic: true
		}
	});

	// console.log({
	// 	event1,
	// 	event2,
	// 	event3,
	// 	event4,
	// 	event5,
	// 	event6,
	// 	event7,
	// 	event8
	// });
}

seed()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

// 	{
// 		name: 'Niagara Shores Campground and Conference Center',
// 		description:
// 			"Niagara Shores specializes in overnight lodging and camping or glamping. With plenty of spaces, a large old 5000 square ft. Tabernacle, a Wood land chapel, 10,000 square ft. Convention Center with a commercial kitchen, a beautiful lakeside dining room, miniature golf, swimming pool, clean community bathrooms, souvenir shop, grocery store, snack bar and much more, this is truly a unique must-stay in the Niagara region. With the ability to accommodate up to 250 guests per night in full capacity, you'll find the perfect spot for you! Not to mention, an awesome 1.5 mile nature walk for meditation, solace and may feature extremely fun themes in the future!",
// 		address: '6419 Lake Rd, Appleton, NY',
// 		lat: '',
// 		lng: '',
// isPublic: true

// 	},

// 	{
// 		name: 'Port Bay Campground',
// 		description:
// 			"Port Bay Campground is a family owned and operated campground in Wolcott, New York. When you visit, you'll become a part of the family with exciting activities spread throughout open season. Enjoy the surrounding nature views, the peaceful atmosphere, local attractions, and so much more. Book your spot today and make Port Bay Campground your next getaway destination!",
// 		address: '8346 East Port Bay Road, Wolcott, NY',
// 		lat: '',
// 		lng: '',
// isPublic: true

// 	},
