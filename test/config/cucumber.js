module.exports = {
  default: {
    format: [
      '@cucumber/pretty-formatter',
      'html:reports/report.html',
      'junit:reports/report.xml',
    ]
  }
}
