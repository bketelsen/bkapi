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
		guest1?:	   		string @relationship(Guest)
		guest2?:	   		string @relationship(Guest)
		guest3?:	   		string @relationship(Guest)
		guest4?:	   		string @relationship(Guest)
   	 	image_id?: 		string @relationship(Image)
		body?:        	string
		tags?: 			[...string]
		category_id?: 	string @relationship(Category)
	}
}
