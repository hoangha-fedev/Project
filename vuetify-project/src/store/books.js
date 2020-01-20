export default {
	state: {
		books: [
			{
				id: '1',
				title: 'Harry Potter und der Stein der Weisen',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '1',
				imageUrl:'https://i.pinimg.com/474x/b8/65/a1/b865a148919f86e9802c50343e9b93ee.jpg',
				level: [ 'B2', 'C1' ],
				rating: 4,
				ratingsCount: 100,
				youtube_playlist_id: '1',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '2',
				title: 'Harry Potter und der Stein der Weisen - 2',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '2',
				level: [ 'B1', 'C2' ],
				rating: 4.5,
				ratingsCount: 40,
				youtube_playlist_id: '2',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '3',
				title: 'Harry Potter und der Stein der Weisen - 3',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '3',
				level: [ 'A2', 'C1' ],
				rating: 5,
				ratingsCount: 80,
				youtube_playlist_id: '3',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '4',
				title: 'Harry Potter und der Stein der Weisen - 4',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '4',
				level: [ 'A1', 'C2' ],
				rating: 3.5,
				ratingsCount: 100,
				youtube_playlist_id: '4',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '5',
				title: 'Harry Potter und der Stein der Weisen - 5',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '5',
				level: [ 'A1', 'C1' ],
				rating: 3,
				ratingsCount: 70,
				youtube_playlist_id: '5',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '6',
				title: 'Harry Potter und der Stein der Weisen - 6',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '6',
				level: [ 'A2', 'C2' ],
				rating: 4.5,
				ratingsCount: 80,
				youtube_playlist_id: '6',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			},
			{
				id: '7',
				title: 'Harry Potter und der Stein der Weisen - 7',
				description: 'Der britisch-US-amerikanische Fantasyfilm Harry Potter und der Stein der Weisen',
				imageId: '7',
				level: [ 'A1', 'C1' ],
				rating: 3.5,
				ratingsCount: 50,
				youtube_playlist_id: '7',
				parts: [
					{
						id: '1',
						title: 'Chappter 1',
						youtube_id: '1'
					},
					{
						id: '2',
						title: 'Chappter 2',
						youtube_id: '2'
					},
					{
						id: '3',
						title: 'Chappter 3',
						youtube_id: '3'
					},
					{
						id: '4',
						title: 'Chappter 4',
						youtube_id: '4'
					}
				]
			}
        ],

        bookParts: [
            {
                bookId: "1",
                bookPartId: '1',
                bookTitle: "Harry Potter und der Stein der Weisen - 1",
                partTitle: "Chapper 1",
                youtube_id: "wP2OdJizkWA",
                content: [
                    {
                        sentences: [
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            }
                        ]
                    },
                    {
                        sentences: [
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            }
                        ]
                    },
                    {
                        sentences: [
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            },
                            {
                                origText: "Für alle, die mit einsteigen wollen in die Welt der Muggel, Magier und Zauberlehrlinge.",
                                transText: "Harry ist Vollwaise und lebt bei seinen hartherzigen Verwandten. Bis zu seinem elften Geburtstag glaubt er, ein ganz normaler Junge zu sein. Doch ein Brief, der an diesem Tag ins Haus flattert"
                            }
                        ]
                    }
                ],
                words: [
                    {
                        origWord: 'Hello',
                        transWord: 'Xin Chao'
                    },
                    {
                        origWord: 'Hello2',
                        transWord: 'Xin Chao2'
                    },
                    {
                        origWord: 'Hello3',
                        transWord: 'Xin Chao3'
                    },
                    {
                        origWord: 'Hello4',
                        transWord: 'Xin Chao4'
                    },
                    {
                        origWord: 'Hello5',
                        transWord: 'Xin Chao5'
                    },
                    {
                        origWord: 'Hello6',
                        transWord: 'Xin Chao6'
                    },
                    {
                        origWord: 'Hello7',
                        transWord: 'Xin Chao7'
                    },
                ]
            }
        ]
	},
	mutations: {
		SET_BOOKS(state, payload) {
			state.books = payload;
		}
	},
	getters: {
        getBooks: (state) => state.books,
        getParts: (state) => state.bookParts
	}
};
