profiles = [
	{
		firstName: "Plo",
		lastName: "Koon",
		email: "plokoon@jediorder.com",
		origin: "alien",
		picture:
			"http://pm1.narvii.com/7077/d25d26150a2c8a4c76becee4439122624f5c1742r1-202-249v2_uhq.jpg",
	},
	{
		firstName: "Fit",
		lastName: "Kisto",
		email: "fit.kisto@jediorder.com",
		origin: "alien",
		picture:
			"http://pm1.narvii.com/7114/db5e4f4263c09ad13432a8e0a120f441fc218a1dr1-732-530v2_00.jpg",
	},
	{
		firstName: "Dennis",
		lastName: "Ritchie",
		email: "dennis@unix.com",
		origin: "terran",
		picture:
			"https://upload.wikimedia.org/wikipedia/commons/e/e6/Dennis_Ritchie.jpg",
	},
	{
		firstName: "Morgan",
		lastName: "Gold",
		email: "morgan.gold@goldshawfarm.com",
		origin: "terran",
		picture:
			"https://1.bp.blogspot.com/-wa-jE09DoFs/YMM-4JKS6pI/AAAAAAAAIuw/K67LdJsPTbkPexuu6_OjYKB9-3H7I1e-ACPcBGAsYHg/s0/193331939_2258106580993048_7670120012341652777_n.jpg",
	},
];

const app = Vue.createApp({
	data() {
		const index = Math.floor(Math.random() * profiles.length);
		objIndex = profiles[index];

		return {
			firstName: objIndex.firstName,
			lastName: objIndex.lastName,
			email: objIndex.email,
			origin: objIndex.origin,
			picture: objIndex.picture,
		};
	},

	methods: {
		getUser() {
			const index = Math.floor(Math.random() * profiles.length);
			objIndex = profiles[index];

			this.firstName = objIndex.firstName;
			this.lastName = objIndex.lastName;
			this.email = objIndex.email;
			this.origin = objIndex.origin;
			this.picture = objIndex.picture;
		},
	},
});

app.mount("#app");
