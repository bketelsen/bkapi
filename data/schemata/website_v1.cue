{
	_schema: {
		name:      "Profile"
		namespace: "schemas.cueblox.com"
	}

	#Website: {
		_dataset: {
			plural: "websites"
			supportedExtensions: ["yaml", "yml"]
		}

		url:         string @template("https://google.com")
		author_id?: string @template("bketelsen") @relationship(Author)
		brand_name:  string @template("Your Name")
		body?:       string
		primary_navigation?: [...#NavigationItem]
		secondary_navigation?: [...#NavigationItem]
	}
		#NavigationItem: {
			name: 	  string @template("About")
			route:     string @template("/about")
		}
}
