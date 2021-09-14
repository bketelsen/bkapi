{
	_schema: {
		name:      "Guest"
		namespace: "schemas.cueblox.com"
	}

	#Guest: {
		_dataset: {
			plural: "guests"
			supportedExtensions: ["yaml", "yml", "md", "mdx"]
		}

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
