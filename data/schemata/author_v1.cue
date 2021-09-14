{
	_schema: {
		name:      "Author"
		namespace: "schemas.cueblox.com"
	}

	#Author: {
		_dataset: {
			plural: "authors"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

		name: string @template("Bob Smith")
		company?:   string @template("CueBlox")
		email?:   string @template("bob@smith.dev")
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
