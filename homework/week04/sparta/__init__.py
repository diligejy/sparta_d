from flask import Flask 
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    # ORM
    db.init_app(app)
    migrate.init_app(app, db)
    from . import models
    
    from .views import main_views, memo_views, book_review_views, favorite_views 
    app.register_blueprint(main_views.bp)
    app.register_blueprint(memo_views.bp)
    app.register_blueprint(book_review_views.bp)
    app.register_blueprint(favorite_views.bp)
    return app 