from pybo import db

class Document(db.Model):

# 언제 포스팅이 된건지 create_date Column도 있어야 하지 않을까?
# 그걸 만드려면 어떻게 해야 할까?

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    url = db.Column(db.Text(), nullable=False)
    image = db.Column(db.Text(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    comment = db.Column(db.String(200), nullable=False)