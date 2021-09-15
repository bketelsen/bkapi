{
  data_dir: "data"
  schemata_dir: "data/schemata"
  build_dir: "build"
  template_dir: "data/tpl"
  static_dir: "public/static"
  output_cue: true
  output_recordsets: true
  prebuild: [ {
    name: "bloximages"
    executable: "bloximages"
  }]
  postbuild: [ {
    name: "datasync"
    executable: "staticsync"
  }]
}
