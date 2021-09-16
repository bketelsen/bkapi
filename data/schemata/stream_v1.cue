{
	_schema: {
		name:      "Stream"
		namespace: "schemas.cueblox.com"
	}

	#Stream: {
		_dataset: {
			plural: "streams"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		title:        	string @template("My New Page")
		excerpt:      	string @template("Small description about my page")
		draft:        	bool | *false
		air_date: 		string @template("2020-01-01")
		author_id:		string @template("bketelsen") @relationship(Author)
		guests?:	   	[...#Guest]	
   	 	image_id?: 		string @relationship(Image)
		body?:        	string
		tags?: 			[...string]
		category_id?: 	string @relationship(Category)
	}


	#Guest: {
		name: string @template("Bob Smith")
		company?:   string @template("CueBlox")
		email?:   string @template("bob@smith.dev")
		avatar?:   string @template("https://avatars.dicebear.com/v2/bottts/bob.svg")
		image_id?:   string @relationship(Image)
		occupation?:     string @template("Cue Slinger")
		body?:      string @template("☕️ Required")
    	twitter?:   string @template("bketelsen")
    	linkedin?:   string @template("bketelsen")
    	github?:   string @template("bketelsen")
    	youtube?:   string @template("bketelsen")
    	twitch?:   string @template("bketelsen")
  }
}
