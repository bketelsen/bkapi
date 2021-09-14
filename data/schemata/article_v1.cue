{
	_schema: {
		name:      "Article"
		namespace: "schemas.cueblox.com"
	}

	#Article: {
		_dataset: {
			plural: "articles"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		title:             string @template("My New Article")
		summary:           string @template("Small Description")
		featured:          bool | *false
		draft:             bool | *false
		date:      string @template("2020-01-01")
		author_id:  	   string @relationship(Author)
		layout?: string 
		image_id?:         string @relationship(Image)
		images?:		[...string] 
		lastmod?:   string
		edit_description?: string
		body?:             string @template("My Awesome Article")
		tags?: 			   [...string]
		category_id?: 	   string @relationship(Category)

	}

}
