from google.appengine.ext import ndb


class Task(ndb.Model):
    name = ndb.StringProperty(required=True);
    date = ndb.DateProperty();

