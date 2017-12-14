import webapp2

# If the URL doesn't match any above, a 302 redirect will be done to the following address
DEFAULT_URL = 'http://www.partym.org/' # <-- EDIT THIS DEFAULT URL

class MainPage(webapp2.RequestHandler):

    def get(self):
            # Don't do permanent (301), since we don't know what this is.
            self.redirect(DEFAULT_URL, permanent=False)

app = webapp2.WSGIApplication([
    ('/.*', MainPage),
])
