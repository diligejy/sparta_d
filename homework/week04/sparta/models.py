from sparta import db

class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    create_date = db.Column(db.DateTime(), nullable=False)
    title = db.Column(db.String(200), nullable=False)
    url = db.Column(db.Text(), nullable=False)
    image = db.Column(db.Text(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    comment = db.Column(db.String(200), nullable=False)

    